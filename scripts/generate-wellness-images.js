const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../public/images/products/wellness');
const scratchDir = path.join(outDir, 'scratch');
const baseDir = path.join(__dirname, '../public/images');

async function safeCrop(filePath, extractOpts, targetW = 900, targetH = 900, fitMode = 'cover', bg = { r: 255, g: 255, b: 255, alpha: 1 }) {
  const meta = await sharp(filePath).metadata();
  let left = Math.max(0, extractOpts.left || 0);
  let top = Math.max(0, extractOpts.top || 0);
  let width = Math.min(meta.width - left, extractOpts.width || meta.width);
  let height = Math.min(meta.height - top, extractOpts.height || meta.height);

  return sharp(filePath)
    .extract({ left, top, width, height })
    .resize(targetW, targetH, { fit: fitMode, background: bg });
}

async function buildAll25() {
  console.log('Generating perfected 25 wellness product images...');

  // -------------------------------------------------------------
  // VIBRATORS (1 - 5)
  // -------------------------------------------------------------
  // 1. Séraphine Rabbit Vibrator with 24K Gold Trim on Travertine
  await sharp(path.join(baseDir, 'wellness-toy.jpg'))
    .resize(900, 900, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'vibrator-1.jpg'));

  // 2. Élan Ergonomic Curved Designer Vibrator (Delight: crop out left award logos)
  // delight.jpg is 700x700. left: 320 removes all text completely!
  await (await safeCrop(path.join(scratchDir, 'delight.jpg'), { left: 310, top: 0, width: 390, height: 700 }, 900, 900, 'contain', { r: 255, g: 255, b: 255, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'vibrator-2.jpg'));

  // 3. Lumina High-Intensity Micro-Wand Contoured Tip
  await (await safeCrop(path.join(baseDir, 'wellness-toy.jpg'), { left: 160, top: 350, width: 600, height: 600 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'vibrator-3.jpg'));

  // 4. Aurelia Petite Fingertip Sculpted Vibrator
  await (await safeCrop(path.join(scratchDir, 'designers_vibrator.jpg'), { left: 510, top: 510, width: 370, height: 320 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'vibrator-4.jpg'));

  // 5. Symphony Multi-Wave Contoured Silicone Massager
  await (await safeCrop(path.join(scratchDir, 'funfactory_vibe4.jpg'), { left: 150, top: 90, width: 360, height: 500 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'vibrator-5.jpg'));

  console.log('✓ Vibrators 1-5 ready');

  // -------------------------------------------------------------
  // SUCTION TOYS (1 - 5)
  // -------------------------------------------------------------
  // 1. Aéra Clitoral Air-Pulse Acoustic Pebble Stimulator
  await (await safeCrop(path.join(baseDir, 'wellness-toy.jpg'), { left: 200, top: 400, width: 450, height: 450 }, 900, 900, 'cover'))
    .modulate({ saturation: 1.15, brightness: 1.02 })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'suction-1.jpg'));

  // 2. Petal Sculpted Aerodynamic Clitoral Stimulator
  await (await safeCrop(path.join(baseDir, 'wellness-toy.jpg'), { left: 400, top: 380, width: 450, height: 450 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'suction-2.jpg'));

  // 3. Pulse Dual-Stimulation Sonic Clitoral Wave Device
  await (await safeCrop(path.join(baseDir, 'wellness-toy.jpg'), { left: 80, top: 220, width: 850, height: 600 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'suction-3.jpg'));

  // 4. Solis Ergonomic Palm-Fit Touchless Air Massager
  await (await safeCrop(path.join(scratchDir, 'designers_vibrator.jpg'), { left: 520, top: 100, width: 370, height: 370 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'suction-4.jpg'));

  // 5. Aureole Targeted Micro-Chamber Suction Wand
  await (await safeCrop(path.join(scratchDir, 'funfactory_vibe4.jpg'), { left: 400, top: 300, width: 350, height: 350 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'suction-5.jpg'));

  console.log('✓ Suction Toys 1-5 ready');

  // -------------------------------------------------------------
  // DILDOS (1 - 5)
  // -------------------------------------------------------------
  // 1. Sensiglass 24K Gold Leaf Infused Borosilicate Glass Wand
  await (await safeCrop(path.join(scratchDir, 'sensiglass_24k_gold.jpg'), { left: 200, top: 50, width: 1600, height: 2600 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'dildo-1.jpg'));

  // 2. Aphrodite Sculpted Spiral Borosilicate Glass Contoured Wand
  await (await safeCrop(path.join(scratchDir, 'glass_dildos.png'), { left: 40, top: 150, width: 380, height: 1100 }, 900, 900, 'contain', { r: 35, g: 35, b: 38, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'dildo-2.jpg'));

  // 3. Nocturne Ribbed Obsidian Borosilicate Glass Pleasure Probe
  await (await safeCrop(path.join(scratchDir, 'glass_dildos.png'), { left: 550, top: 10, width: 380, height: 1400 }, 900, 900, 'contain', { r: 35, g: 35, b: 38, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'dildo-3.jpg'));

  // 4. Pure Contour Medical-Grade Clear Silicone Pleasure Probe
  await (await safeCrop(path.join(scratchDir, 'clear_dildos.png'), { left: 240, top: 80, width: 1700, height: 2500 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'dildo-4.jpg'));

  // 5. Celestia Hand-Blown Borosilicate Glass Bead Wand
  await (await safeCrop(path.join(scratchDir, 'three_plugs.jpg'), { left: 0, top: 800, width: 1850, height: 550 }, 900, 900, 'contain', { r: 215, g: 215, b: 220, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'dildo-5.jpg'));

  console.log('✓ Dildos 1-5 ready');

  // -------------------------------------------------------------
  // ANAL TOYS (1 - 5)
  // -------------------------------------------------------------
  // 1. Sterling Mirror-Polished Surgical Stainless Steel Tapered Anchor Plug
  await (await safeCrop(path.join(scratchDir, 'three_plugs.jpg'), { left: 600, top: 50, width: 850, height: 500 }, 900, 900, 'contain', { r: 215, g: 215, b: 220, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'anal-1.jpg'));

  // 2. Bijoux Rose Cut Crystal Jewel-Base Luxury Chrome Mini Plug
  await (await safeCrop(path.join(scratchDir, 'three_plugs.jpg'), { left: 750, top: 380, width: 700, height: 420 }, 900, 900, 'contain', { r: 215, g: 215, b: 220, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'anal-2.jpg'));

  // 3. Apex Contoured Velvet-Touch Silicone P-Spot & Perineum Massager (pspot_stimulator.jpg)
  await (await safeCrop(path.join(scratchDir, 'pspot_stimulator.jpg'), { left: 0, top: 0, width: 640, height: 960 }, 900, 900, 'contain', { r: 30, g: 30, b: 35, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'anal-3.jpg'));

  // 4. Empress 24K Gold-Dipped Dual Weighted Kegel & Pelvic Spheres (both gold spheres)
  await (await safeCrop(path.join(scratchDir, 'gold_ben_wa.jpg'), { left: 250, top: 320, width: 700, height: 1100 }, 900, 900, 'contain', { r: 245, g: 245, b: 245, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'anal-4.jpg'));

  // 5. Jade Yoni Hand-Carved Natural Nephrite Jade Pelvic Training Eggs
  await sharp(path.join(scratchDir, 'jade_eggs.jpg'))
    .resize(900, 900, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'anal-5.jpg'));

  console.log('✓ Anal Toys 1-5 ready');

  // -------------------------------------------------------------
  // ESSENTIALS (1 - 5)
  // -------------------------------------------------------------
  // 1. Silken Touch Organic Hyaluronic Water-Based Intimate Serum
  await sharp(path.join(baseDir, 'botanical-oil.jpg'))
    .resize(900, 900, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'essential-1.jpg'));

  // 2. Botanical Anti-Microbial Foaming Toy Cleanser (macro bottle pump focus)
  await (await safeCrop(path.join(baseDir, 'botanical-oil.jpg'), { left: 300, top: 80, width: 550, height: 750 }, 900, 900, 'contain', { r: 240, g: 235, b: 230, alpha: 1 }))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'essential-2.jpg'));

  // 3. Plush Velvet Keepsake Toy Storage & Travel Pouch with Silk Lining
  await (await safeCrop(path.join(baseDir, 'couples-box.jpg'), { left: 380, top: 350, width: 500, height: 450 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'essential-3.jpg'));

  // 4. Magnetic Inductive Fast-Charging Dock & Stone Nightstand Valet
  await (await safeCrop(path.join(baseDir, 'wellness-toy.jpg'), { left: 50, top: 500, width: 900, height: 500 }, 900, 900, 'cover'))
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'essential-4.jpg'));

  // 5. UV-C Deep Sanitizing & Velvet Storage Keepsake Chest
  await sharp(path.join(baseDir, 'couples-box.jpg'))
    .resize(900, 900, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, 'essential-5.jpg'));

  console.log('✓ Essentials 1-5 ready');
  console.log('ALL 25 WELLNESS PRODUCT IMAGES READY!');
}

buildAll25().catch(console.error);
