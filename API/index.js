
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// not useful now but useful to deploy de the app
const path = require('path');
const router = require('./app/router');
const cors = require('cors');
// const jwt = require('express-jwt');
// const multer = require('multer');
// const bodyParser = multer();
// const bodyParser = require('body-parser');

const app = express();
// required for the api doc using swagger and jsdoc
require('./app/helpers/apiDoc')(app);

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));

// // on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
// app.use( bodyParser.none() );

console.log('path = ',path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const PORT = process.env.PORT || 4001;

app.use(cors({
    origin: "*"
}));


// on ajoute le middleware de "nettoyage" des variables
//const bodySanitizer = require('./app/middlewares/body-sanitizer');
//app.use(bodySanitizer);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server launched on http://localhost:${PORT}`);
});