const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
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

async function searchWiki(term) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|size&format=json`;
  try {
    const res = await fetchJson(url);
    if (!res.query || !res.query.pages) return [];
    return Object.values(res.query.pages)
      .filter(p => p.imageinfo && p.imageinfo[0] && (p.title.endsWith('.jpg') || p.title.endsWith('.png')))
      .map(p => ({
        title: p.title,
        url: p.imageinfo[0].url,
        width: p.imageinfo[0].width,
        height: p.imageinfo[0].height
      }));
  } catch (err) {
    return [];
  }
}

(async () => {
  const queries = [
    'vibrator "fun factory"',
    'rabbit vibrator',
    'wand vibrator',
    'bullet vibrator',
    'clitoral suction',
    'glass dildo',
    'borosilicate dildo',
    'silicone dildo',
    'butt plug glass',
    'butt plug jewel',
    'prostate massager',
    'intimate lubricant bottle',
  ];

  for (const q of queries) {
    console.log(`\n=== QUERY: ${q} ===`);
    const results = await searchWiki(q);
    results.forEach(r => console.log(`${r.title} (${r.width}x${r.height}) -> ${r.url}`));
  }
})();
