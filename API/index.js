
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// not useful now but useful to deploy de the app
const path = require('path');
const router = require('./app/router');
const cors = require('cors');
// const bodyParser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/image/projects')
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname + '_' + Date.now() + '_' + path.extname(file.originalname))
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 1024 * 1024 * 5},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }});


// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}


const app = express();


app.get("/upload", (req, res) => {
  res.status(200).json('Uploaded');
})

app.post("/upload", upload.single('image'), (req, res) => {
  res.status(200).json('Image uploaded');
})

// const jwt = require('express-jwt');




app.use(express.urlencoded({extended: true}));

console.log('path = ',path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

const PORT = process.env.PORT || 4001;

app.use(cors({
    origin: "*"
}));


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