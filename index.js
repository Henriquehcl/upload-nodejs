const express = require('express');
require('dotenv').config();
const db = require('./app/server/conn');
const router  = require('./app/router/routes');

(async () => {
    try {
        const Upload = require('./app/model/Upload'); 
        const app = express();
        app.use(express.json());//bodyParser  

        app.use('/',router);
        await db.sync({force: true});
        await app.listen(process.env.SERVER_PORT)
        console.log('Server started')
    } catch (error) {
        console.error(error);
    }
})();