const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testVibrators() {
  const baseImg = path.join(__dirname, '../public/images/wellness-toy.jpg');
  const outDir = path.join(__dirname, '../public/images/products/wellness');

  // 1. Original high-res crop
  await sharp(baseImg)
    .resize(900, 900, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'test-vib-1.jpg'));

  // 2. Noir Onyx with warm gold highlights
  await sharp(baseImg)
    .modulate({
      brightness: 0.75,
      saturation: 0.35,
      hue: 240
    })
    .tint({ r: 50, g: 45, b: 55 })
    .resize(900, 900, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'test-vib-2.jpg'));

  // 3. Macro crop of the sculpted dual-stimulation tip
  await sharp(baseImg)
    .extract({ left: 150, top: 320, width: 700, height: 700 })
    .resize(900, 900)
    .modulate({
      saturation: 1.15,
      brightness: 1.02
    })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'test-vib-3.jpg'));

  console.log('Generated test vibrators');
}

testVibrators().catch(console.error);
