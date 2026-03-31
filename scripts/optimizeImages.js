// Otimização de imagens para galeria usando sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/fotos_galeria');
const outputDir = path.join(__dirname, '../public/images/fotos_galeria_otimizadas');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png)$/i.test(f));

async function optimize() {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `galeria-${i + 1}.webp`);
    await sharp(inputPath)
      .resize({ width: 1200 })
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log(`Gerado: galeria-${i + 1}.webp`);
  }
  console.log('Otimização concluída!');
}

optimize();
