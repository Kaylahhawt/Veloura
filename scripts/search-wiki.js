const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'VelouraCatalog/1.0 (contact@veloura.luxury)' } }, (res) => {
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

async function getCategoryFiles(catName) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=${encodeURIComponent(catName)}&cmnamespace=6&cmlimit=50&format=json`;
  const res = await fetchJson(url);
  if (!res.query || !res.query.categorymembers) return [];
  const titles = res.query.categorymembers.map(m => m.title);
  
  // get imageinfo
  const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles.join('|'))}&prop=imageinfo&iiprop=url|size&format=json`;
  const infoRes = await fetchJson(infoUrl);
  if (!infoRes.query || !infoRes.query.pages) return [];
  return Object.values(infoRes.query.pages)
    .filter(p => p.imageinfo && p.imageinfo[0] && (p.title.endsWith('.jpg') || p.title.endsWith('.png') || p.title.endsWith('.JPG')))
    .map(p => ({
      title: p.title,
      url: p.imageinfo[0].url,
      width: p.imageinfo[0].width,
      height: p.imageinfo[0].height
    }));
}

(async () => {
  const cats = ['Category:Vibrators', 'Category:Dildos', 'Category:Butt_plugs'];
  for (const cat of cats) {
    console.log(`\n=== ${cat} ===`);
    const files = await getCategoryFiles(cat);
    files.slice(0, 15).forEach(f => console.log(`${f.title} (${f.width}x${f.height}) -> ${f.url}`));
  }
})();
