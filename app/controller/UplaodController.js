const Upload = require('../model/Upload');
const path = require('path');

class UploadController {
  async upload(req, res) {
    try {
      console.log('Uploading...');
      console.log(req.body);
  
      if (req.file) {
        console.log('Tem arquivo');
        const image = req.file;
        const {originalname, mimetype, filename } = image;

        const data = {
          name: filename,
          type: mimetype,
          path: filename
        }

      const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

      // Verifica se o arquivo é uma imagem com base na extensão
      // Checks if the file is an image based on the extension
      const extension = path.extname(originalname).toLowerCase();
      if (!validImageExtensions.includes(extension)) {
        return res.status(400).send('The file is not an image.');
      }
  
        // Utilize o método create do modelo para salvar no banco de dados
        // Use the model's create method to save it in the database
        const upload = await Upload.create(data);
  
        if (upload) {
          return res.status(200).send('Upload successfully.');
        } else {
          return res.status(500).send('Internal error.');
        }
      } else {
        return res.status(400).send('No file to save.');
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal error.');
    }
  }
  
}

module.exports = new UploadController();
