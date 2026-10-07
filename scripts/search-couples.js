const https = require('https');

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

async function searchWiki(query, limit = 10) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime&format=json`;
  try {
    const res = await fetchJson(url);
    if (!res.query || !res.query.pages) return [];
    return Object.values(res.query.pages)
      .filter(p => p.imageinfo && p.imageinfo[0] && (p.imageinfo[0].mime === 'image/jpeg' || p.imageinfo[0].mime === 'image/png'))
      .map(p => ({
        title: p.title,
        url: p.imageinfo[0].url,
        width: p.imageinfo[0].width,
        height: p.imageinfo[0].height
      }));
  } catch (e) {
    return [];
  }
}

async function run() {
  const queries = [
    'sleep mask silk',
    'blindfold',
    'leather cuffs bdsm',
    'shibari rope',
    'feather tickler',
    'playing cards luxury',
    'dice metal gold',
    'couples game',
    'journal leather velvet',
    'dropper bottle oil',
    'massage oil bottle',
    'cock ring silicone',
    'we-vibe',
    'fun factory vibrator'
  ];

  for (const q of queries) {
    const results = await searchWiki(q, 6);
    console.log(`=== Query: "${q}" (${results.length} found) ===`);
    results.forEach(r => console.log(`  ${r.title} | ${r.width}x${r.height}`));
    await new Promise(r => setTimeout(r, 600));
  }
}

run();
