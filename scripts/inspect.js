const fs = require('fs');

const content = fs.readFileSync('src/data/products.ts', 'utf8');

// Match products
const regex = /"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)",[\s\S]*?"categorySlug":\s*"([^"]+)",\s*"categoryName":\s*"([^"]+)",\s*"subcategory":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const [_, id, title, slug, catName, sub] = match;
  if (slug !== 'lingerie') {
    console.log(`ID: ${id} | Title: ${title} | Slug: ${slug} | Sub: ${sub}`);
  }
}
