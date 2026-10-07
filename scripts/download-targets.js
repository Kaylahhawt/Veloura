const { execSync } = require('child_process');
const https = require('https');
const fs = require('fs');
const path = require('path');

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

const targets = [
  { name: 'stildo.jpg', title: 'File:Dildo Stildo.jpg' },
  { name: 'gold_ben_wa.jpg', title: 'File:Gold-toned Ben Wa balls.jpg' },
  { name: 'whoop_de_doo.jpg', title: 'File:Venusiny kulicky Whoop de doo.jpg' },
  { name: 'vibe_fun4.jpg', title: 'File:Funtoys vibrators byfunfactory4.jpg' },
  { name: 'vibe_fun3.jpg', title: 'File:Funtoys vibrators byfunfactory3.jpg' },
  { name: 'vibe_fun2.jpg', title: 'File:Funtoys vibrators byfunfactory2.jpg' },
  { name: 'vibe_fun6.jpg', title: 'File:Funtoys vibrators byfunfactory6.jpg' },
  { name: 'glass_plug.jpg', title: 'File:Glass Butt Plug Daniel D. Teoli Jr..jpg' },
  { name: 'three_plugs.jpg', title: 'File:Three buttplugs.jpg' }
];

(async () => {
  const dir = path.join(__dirname, '../public/images/products/wellness/scratch');
  for (const t of targets) {
    const dest = path.join(dir, t.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
      console.log(`Already exists: ${t.name}`);
      continue;
    }
    try {
      console.log(`Looking up: ${t.title}`);
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(t.title)}&prop=imageinfo&iiprop=url&format=json`;
      const data = await fetchJson(infoUrl);
      const page = Object.values(data.query.pages)[0];
      if (page && page.imageinfo && page.imageinfo[0]) {
        const fileUrl = page.imageinfo[0].url;
        console.log(`Downloading with curl: ${t.name} from ${fileUrl}`);
        execSync(`curl.exe -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0" -s -L "${fileUrl}" -o "${dest}"`);
        console.log(`Saved: ${t.name} (${fs.statSync(dest).size} bytes)`);
      }
    } catch (e) {
      console.error(`Failed ${t.name}: ${e.message}`);
    }
    await sleep(2500);
  }
  console.log('Done downloading targets.');
})();
