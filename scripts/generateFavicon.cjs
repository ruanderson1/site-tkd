// Gera favicon.png a partir da Logo-pirncipal.png usando sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/Logo-pirncipal.png');
const outputPath = path.join(__dirname, '../public/favicon.png');

sharp(inputPath)
  .resize(192, 192) // tamanho padrão para favicon moderno
  .png()
  .toFile(outputPath)
  .then(() => console.log('favicon.png gerado com sucesso!'))
  .catch(err => console.error('Erro ao gerar favicon:', err));
