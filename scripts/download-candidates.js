const https = require('https');
const fs = require('fs');
const path = require('path');

const candidates = [
  // Dildos
  { name: 'sensiglass_24k_gold.jpg', title: 'File:Sensiglass.ca dildo glass 24K gold.jpg' },
  { name: 'sensiglass_swarovski.jpg', title: 'File:Sensiglass.ca Swarovski crystals dildo.jpg' },
  { name: 'sensiglass_platinum.jpg', title: 'File:Sensiglass.ca platinum covered sex toy.jpg' },
  { name: 'stildo_metal.jpg', title: 'File:Dildo Stildo.jpg' },
  { name: 'glass_wands.png', title: 'File:Glass dildos.png' },
  { name: 'pleasuretoys_glass.png', title: 'File:Pleasuretoys-glass-dildo.png' },

  // Vibrators
  { name: 'funfactory_delight.jpg', title: 'File:Designers Vibrator by Fun Factory.jpg' },
  { name: 'funfactory_vibe4.jpg', title: 'File:Funtoys vibrators byfunfactory4.jpg' },
  { name: 'funfactory_vibe3.jpg', title: 'File:Funtoys vibrators byfunfactory3.jpg' },
  { name: 'funfactory_vibe2.jpg', title: 'File:Funtoys vibrators byfunfactory2.jpg' },
  { name: 'funfactory_vibe6.jpg', title: 'File:Funtoys vibrators byfunfactory6.jpg' },

  // Anal & Kegel
  { name: 'whoop_de_doo.jpg', title: 'File:Venusiny kulicky Whoop de doo.jpg' },
  { name: 'gold_ben_wa.jpg', title: 'File:Gold-toned Ben Wa balls.jpg' },
  { name: 'superslim_anal.jpg', title: 'File:Unisex Superslim Buttplug - Flickr - stnu.jpg' },
  { name: 'glass_butt_plug.jpg', title: 'File:Glass Butt Plug Daniel D. Teoli Jr..jpg' },
  { name: 'three_plugs.jpg', title: 'File:Three buttplugs.jpg' },
  { name: 'rude_boy_pspot.jpg', title: 'File:Rude Boy - P Spot stimulator - Flickr - stnu.jpg' }
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

(async () => {
  const dir = path.join(__dirname, '../public/images/products/wellness/scratch');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const item of candidates) {
    try {
      const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&format=json`;
      const json = await fetchJson(apiUrl);
      const page = Object.values(json.query.pages)[0];
      if (page && page.imageinfo && page.imageinfo[0]) {
        const fileUrl = page.imageinfo[0].url;
        const dest = path.join(dir, item.name);
        console.log(`Downloading ${item.title} -> ${item.name}`);
        await downloadFile(fileUrl, dest);
      } else {
        console.log(`Not found: ${item.title}`);
      }
    } catch (e) {
      console.error(`Error ${item.name}: ${e.message}`);
    }
  }
  console.log('Finished downloading candidates.');
})();
