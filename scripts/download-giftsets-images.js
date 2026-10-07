const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../public/images/products/giftsets');
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
  // Bride-to-Be Kits (1 - 5)
  { id: 'gift-bride-1', wikiTitle: 'File:Maryhill Museum - silver filigreed casket given as a wedding gift to Alexander and Maria of Yugoslavia in 1922.jpg', crop: { fit: 'cover' } },
  { id: 'gift-bride-2', wikiTitle: 'File:Marriage gift box.jpg', crop: { fit: 'cover' } },
  { id: 'gift-bride-3', wikiTitle: 'File:Open Pink Gifft Box with White Ribbon.JPG', crop: { fit: 'cover' } },
  { id: 'gift-bride-4', wikiTitle: 'File:Brown gift box with red ribbon and bow.jpg', crop: { fit: 'cover' } },
  { id: 'gift-bride-5', wikiTitle: 'File:Antique Jewelry Box.jpg', crop: { fit: 'cover' } },

  // Date Night Bundles (1 - 5)
  { id: 'gift-date-1', localFile: path.join(__dirname, '../public/images/couples-box.jpg'), crop: { fit: 'cover' } },
  { id: 'gift-date-2', wikiTitle: 'File:Vierkante met zwart leer beklede juwelendoos., BK-1968-49-1.jpg', crop: { fit: 'cover' } },
  { id: 'gift-date-3', wikiTitle: 'File:Jewel casket MET DP232237.jpg', crop: { fit: 'cover' } },
  { id: 'gift-date-4', wikiTitle: 'File:Box, trinket (51368820716).jpg', crop: { fit: 'cover' } },
  { id: 'gift-date-5', wikiTitle: 'File:"Chanel Gift Box" 2018, Belgian Black, and White Carrara Marble.jpg', crop: { fit: 'cover' } },

  // Curated Romance Boxes (1 - 5)
  { id: 'gift-box-1', wikiTitle: 'File:Treasure Chest (3981686321).jpg', crop: { fit: 'cover' } },
  { id: 'gift-box-2', wikiTitle: 'File:Coffret MET DP154234.jpg', crop: { fit: 'cover' } },
  { id: 'gift-box-3', wikiTitle: 'File:Coffret MET DT240746.jpg', crop: { fit: 'cover' } },
  { id: 'gift-box-4', wikiTitle: 'File:Casket ivory Louvre UCAD4417.jpg', crop: { fit: 'cover' } },
  { id: 'gift-box-5', wikiTitle: 'File:02023 0896 Baltic amber casket by Michael Redlin, Danzig.jpg', crop: { fit: 'cover' } }
];

async function run() {
  console.log(`Starting image pipeline for 15 Gift Sets products...`);

  const wikiTargets = targets.filter(t => t.wikiTitle);
  const titles = wikiTargets.map(t => t.wikiTitle).join('|');
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url|size&format=json`;
  const infoRes = await fetchJson(url);
  const pages = Object.values(infoRes.query.pages);

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    const finalDest = path.join(outDir, `${t.id}.jpg`);

    if (t.localFile && fs.existsSync(t.localFile)) {
      console.log(`[${i + 1}/15] Processing local file for ${t.id}...`);
      await sharp(t.localFile)
        .resize({ width: 900, height: 900, fit: t.crop.fit || 'cover', background: { r: 255, g: 255, b: 255, alpha: 1 } })
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

    console.log(`[${i + 1}/15] Downloading: ${t.wikiTitle}...`);
    try {
      await downloadFile(imgUrl, rawDest);
      console.log(`  Downloaded (${fs.statSync(rawDest).size} bytes). Processing with sharp...`);

      await sharp(rawDest)
        .resize({ width: 900, height: 900, fit: t.crop.fit || 'cover', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .jpeg({ quality: 92 })
        .toFile(finalDest);

      console.log(`  Processed -> ${t.id}.jpg (${fs.statSync(finalDest).size} bytes)`);
    } catch (err) {
      console.error(`  Error processing ${t.id}:`, err.message);
    }

    await sleep(600);
  }

  console.log('All 15 Gift Sets images generated!');
}

run();
