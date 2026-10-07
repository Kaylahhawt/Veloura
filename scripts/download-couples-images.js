const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../public/images/products/couples');
const scratchDir = path.join(outDir, 'scratch');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'VelouraCatalog/1.0 (contact@veloura.luxury)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'VelouraCatalog/1.0 (contact@veloura.luxury)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'VelouraCatalog/1.0 (contact@veloura.luxury)' } }, (res2) => {
          res2.pipe(file);
          file.on('finish', () => file.close(resolve));
        }).on('error', reject);
      } else {
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      }
    }).on('error', reject);
  });
}

const targets = [
  // Restraints
  { id: 'couples-restraint-1', wikiTitle: 'File:Franc-maçonnerie à Strasbourg-Bandeau (1).jpg', crop: { fit: 'cover' } },
  { id: 'couples-restraint-2', wikiTitle: 'File:Bondage cuffs.jpg', crop: { fit: 'cover' } },
  { id: 'couples-restraint-3', wikiTitle: 'File:Femitex O-Ring Black Leather Collar.jpg', crop: { fit: 'cover' } },
  { id: 'couples-restraint-4', wikiTitle: 'File:Ostrich Feather Duster cropped.jpg', crop: { fit: 'cover' } },
  { id: 'couples-restraint-5', wikiTitle: 'File:Floggers.JPG', crop: { fit: 'cover' } },

  // Games
  { id: 'couples-game-1', wikiTitle: 'File:Tarot cards - 3 card spread with candles.jpg', crop: { fit: 'cover' } },
  { id: 'couples-game-2', wikiTitle: 'File:Playing card deck, side view-92656.jpg', crop: { fit: 'cover' } },
  { id: 'couples-game-3', wikiTitle: 'File:Dice Macro (15676431485).jpg', crop: { fit: 'cover' } },
  { id: 'couples-game-4', wikiTitle: 'File:Würfel -- 2021 -- 5959.jpg', crop: { fit: 'cover' } },
  { id: 'couples-game-5', wikiTitle: 'File:Tarot cards - Celtic cross spread.jpg', crop: { fit: 'cover' } },

  // Couples Vibrators
  { id: 'couples-vibe-1', wikiTitle: 'File:Wevibe-Pigalle.jpg', crop: { fit: 'cover' } },
  { id: 'couples-vibe-2', wikiTitle: 'File:We-Vibe Tango blue.jpg', crop: { fit: 'contain', background: { r: 248, g: 247, b: 245, alpha: 1 } } },
  { id: 'couples-vibe-3', wikiTitle: 'File:Silicone glans ring.jpg', crop: { fit: 'cover' } },
  { id: 'couples-vibe-4', wikiTitle: 'File:Designers Vibrator by Fun Factory.jpg', crop: { fit: 'cover' } },
  { id: 'couples-vibe-5', wikiTitle: 'File:Vibrator Dolly Dolphin.JPG', crop: { fit: 'cover' } },

  // Enhancement Oils
  { id: 'couples-oil-1', wikiTitle: 'File:Cannabis-Tincture-on-Plate-by-workwithsherpa.jpg', crop: { fit: 'cover' } },
  { id: 'couples-oil-2', wikiTitle: 'File:Woman taking a dropper of CBD oil.jpg', crop: { fit: 'cover' } },
  { id: 'couples-oil-3', wikiTitle: 'File:RosemaryEssentialOil.png', crop: { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } } },
  { id: 'couples-oil-4', wikiTitle: 'File:Spikenard (Nardostachys jatamansi) essential oil from Nepal.jpg', crop: { fit: 'cover' } },
  { id: 'couples-oil-5', wikiTitle: 'File:RutaGraveolensEssentialOil.png', crop: { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } } }
];

async function run() {
  console.log(`Starting image pipeline for 20 couples products...`);

  // Step 1: Resolve all URLs
  const titles = targets.map(t => t.wikiTitle).join('|');
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url|size&format=json`;
  const infoRes = await fetchJson(url);
  const pages = Object.values(infoRes.query.pages);

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    const page = pages.find(p => p.title.toLowerCase() === t.wikiTitle.toLowerCase() || p.title.replace(/ /g, '_').toLowerCase() === t.wikiTitle.replace(/ /g, '_').toLowerCase());
    
    if (!page || !page.imageinfo || !page.imageinfo[0]) {
      console.error(`Could not resolve image URL for: ${t.wikiTitle}`);
      continue;
    }

    const imgUrl = page.imageinfo[0].url;
    const rawDest = path.join(scratchDir, `${t.id}_raw${path.extname(imgUrl.split('?')[0])}`);
    const finalDest = path.join(outDir, `${t.id}.jpg`);

    console.log(`[${i + 1}/20] Downloading: ${t.wikiTitle}...`);
    try {
      await downloadFile(imgUrl, rawDest);
      console.log(`  Downloaded (${fs.statSync(rawDest).size} bytes). Processing with sharp...`);

      const sharpInstance = sharp(rawDest);
      const resizeOpts = {
        width: 900,
        height: 900,
        fit: t.crop.fit || 'cover',
        background: t.crop.background || { r: 255, g: 255, b: 255, alpha: 1 }
      };

      await sharpInstance
        .resize(resizeOpts)
        .jpeg({ quality: 92 })
        .toFile(finalDest);

      console.log(`  Processed -> ${t.id}.jpg (${fs.statSync(finalDest).size} bytes)`);
    } catch (err) {
      console.error(`  Error processing ${t.id}:`, err.message);
    }

    // Polite delay for Wikimedia servers
    await sleep(600);
  }

  console.log('All 20 Couples images generated!');
}

run();
