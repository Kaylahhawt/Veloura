const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../public/images/products/accessories');
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
  // Storage Pouches (1 - 5)
  { id: 'acc-pouch-1', wikiTitle: 'File:Silk pouch (2024-04-02).jpg', crop: { fit: 'cover' } },
  { id: 'acc-pouch-2', wikiTitle: 'File:Velvet Drawstring Reticule Bag - DPLA - ce378871d64a33dcba9a98abbd2ea932 (page 1).jpg', crop: { fit: 'cover' } },
  { id: 'acc-pouch-3', wikiTitle: 'File:Rust Colored Velvet Pouch Purse with a Gate Opening - DPLA - 42183f1969dc7c22f49dbdbe02a8dbf3 (page 1).jpg', crop: { fit: 'cover' } },
  { id: 'acc-pouch-4', wikiTitle: 'File:Vintage Gillette Travel Tech Safety Razor In Leather Carrying Pouch, Made In USA, Date Code H-2 (1962).jpg', crop: { fit: 'cover' } },
  { id: 'acc-pouch-5', wikiTitle: "File:Woman's Clutch Bag LACMA M.83.103.6.jpg", crop: { fit: 'cover' } },

  // Toy Cleaners (1 - 5)
  { id: 'acc-clean-1', wikiTitle: 'File:A close-up artistic shot of a spray bottle featuring condensation droplets, highlighting its texture and fine details. 01.jpg', crop: { fit: 'cover' } },
  { id: 'acc-clean-2', wikiTitle: 'File:A close-up artistic shot of a spray bottle featuring condensation droplets, highlighting its texture and fine details. 02.jpg', crop: { fit: 'cover' } },
  { id: 'acc-clean-3', wikiTitle: 'File:Baby wipes.jpg', crop: { fit: 'cover' } },
  { id: 'acc-clean-4', wikiTitle: 'File:Hand sanitizer bottle.jpg', crop: { fit: 'cover' } },
  { id: 'acc-clean-5', wikiTitle: 'File:Bottle, scent spray (AM 1966.32-2).jpg', crop: { fit: 'cover' } },

  // Body Oils (1 - 5)
  { id: 'acc-oil-1', localFile: path.join(__dirname, '../public/images/botanical-oil.jpg'), crop: { fit: 'cover' } },
  { id: 'acc-oil-2', wikiTitle: 'File:Optical caustic Cosmetic oil bottle in the sun mj.jpg', crop: { fit: 'cover' } },
  { id: 'acc-oil-3', wikiTitle: 'File:Cocktail Bar perfume box - Jean Patou Louis Süe Brosse Glassworks (24846727987).jpg', crop: { fit: 'cover' } },
  { id: 'acc-oil-4', wikiTitle: 'File:Jojoba-oil.jpg', crop: { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } } },
  { id: 'acc-oil-5', localFile: path.join(__dirname, '../public/images/products/couples/scratch/couples-oil-1_raw.jpg'), crop: { fit: 'cover' } },

  // Lubricants (1 - 5)
  { id: 'acc-lub-1', wikiTitle: 'File:Dispenser sapone 22.jpg', crop: { fit: 'cover' } },
  { id: 'acc-lub-2', wikiTitle: 'File:Hand-sanitizer in a restaurant.jpg', crop: { fit: 'cover' } },
  { id: 'acc-lub-3', wikiTitle: 'File:Pump bottle mechanism.jpg', crop: { fit: 'cover' } },
  { id: 'acc-lub-4', wikiTitle: 'File:Green shampoo bottle.jpg', crop: { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } } },
  { id: 'acc-lub-5', localFile: path.join(__dirname, '../public/images/products/wellness/essential-1.jpg'), crop: { fit: 'cover' } }
];

async function run() {
  console.log(`Starting image pipeline for 20 Accessories products...`);

  const wikiTargets = targets.filter(t => t.wikiTitle);
  const titles = wikiTargets.map(t => t.wikiTitle).join('|');
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url|size&format=json`;
  const infoRes = await fetchJson(url);
  const pages = Object.values(infoRes.query.pages);

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    const finalDest = path.join(outDir, `${t.id}.jpg`);

    if (t.localFile && fs.existsSync(t.localFile)) {
      console.log(`[${i + 1}/20] Processing local file for ${t.id}...`);
      await sharp(t.localFile)
        .resize({ width: 900, height: 900, fit: t.crop.fit || 'cover', background: t.crop.background || { r: 255, g: 255, b: 255, alpha: 1 } })
        .jpeg({ quality: 92 })
        .toFile(finalDest);
      console.log(`  Processed -> ${t.id}.jpg (${fs.statSync(finalDest).size} bytes)`);
      continue;
    }

    const page = pages.find(p => p.title.toLowerCase() === t.wikiTitle.toLowerCase() || p.title.replace(/ /g, '_').toLowerCase() === t.wikiTitle.replace(/ /g, '_').toLowerCase());
    if (!page || !page.imageinfo || !page.imageinfo[0]) {
      console.error(`Could not resolve image URL for: ${t.wikiTitle}`);
      continue;
    }

    const imgUrl = page.imageinfo[0].url;
    const rawDest = path.join(scratchDir, `${t.id}_raw${path.extname(imgUrl.split('?')[0])}`);

    console.log(`[${i + 1}/20] Downloading: ${t.wikiTitle}...`);
    try {
      await downloadFile(imgUrl, rawDest);
      console.log(`  Downloaded (${fs.statSync(rawDest).size} bytes). Processing with sharp...`);

      await sharp(rawDest)
        .resize({ width: 900, height: 900, fit: t.crop.fit || 'cover', background: t.crop.background || { r: 255, g: 255, b: 255, alpha: 1 } })
        .jpeg({ quality: 92 })
        .toFile(finalDest);

      console.log(`  Processed -> ${t.id}.jpg (${fs.statSync(finalDest).size} bytes)`);
    } catch (err) {
      console.error(`  Error processing ${t.id}:`, err.message);
    }

    await sleep(600);
  }

  console.log('All 20 Accessories images generated!');
}

run();
