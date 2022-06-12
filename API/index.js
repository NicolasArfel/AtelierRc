require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors');
const multer = require('multer');

const app = express();

const PORT = process.env.PORT || 4001;

app.use(cors({
    origin: "*"
}));

//if (process.env.NODE_ENV !== 'production') {
   // dotenv.config();
//}

app.use(express.urlencoded({extended: true}));
//const upload = multer({ dest: 'uploads/' });

// on ajoute le middleware de "nettoyage" des variables
//const bodySanitizer = require('./app/middlewares/body-sanitizer');
//app.use(bodySanitizer);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server launched on http://localhost:${PORT}`);
});