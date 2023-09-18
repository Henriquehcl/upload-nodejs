const multer = require('multer');
const fs = require('fs'); // Módulo para lidar com o sistema de arquivos
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'public/images/';

    // Verifica se o diretório de destino existe, se não, cria o diretório
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // Criação recursiva de diretório
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;