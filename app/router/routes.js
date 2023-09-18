const { Router } = require('express');
const UploadController = require('../controller/UplaodController');
const upload = require('../utils/Upload');
const routes = Router();

routes.post('/upload', upload.single('image'),UploadController.upload);

module.exports = routes;