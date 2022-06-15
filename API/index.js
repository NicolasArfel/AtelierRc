
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const nodemailer = require("nodemailer");
// not useful now but useful to deploy de the app
const path = require('path');

const router = require('./app/router');

const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

// const jwt = require('express-jwt');

const app = express();

app.use(express.urlencoded({extended: true}));

console.log('path = ',path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const PORT = process.env.PORT || 4001;

app.use(cors({
    origin: "*"
}));

// let transporter = nodemailer.createTransport({
//   service:"gmail",
//   auth:{
//     user:process.env.EMAIL,
//     pass:process.env.PASSMAIL
//   }
// })

// let mailOptions = {
//   to: 'testatelierrc@gmail.com',
//   subject :'Testing',
//   text: 'It works'
// };

// transporter.sendMail(mailOptions, function(err, data) {
//   if(err) {
//     console.log('Erros Occurs');
//   } else {
//     console.log('Email sent!!!!');
//   }
//   });

// if (process.env.NODE_ENV !== 'production') {
//    dotenv.config();
// }


//const upload = multer({ dest: 'uploads/' });

// on ajoute le middleware de "nettoyage" des variables
//const bodySanitizer = require('./app/middlewares/body-sanitizer');
//app.use(bodySanitizer);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server launched on http://localhost:${PORT}`);
});