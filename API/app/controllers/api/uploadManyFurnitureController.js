const multer = require('multer')
const path = require('path')
const furnitureDatamapper = require('../../models/furnitureDatamapper');
// const forEach = require('async-foreach').forEach;


// /**
//      * Project controller to create a record
//      * @param {*} req Express req.object (not used)
//      * @param {*} res Express response object
//      * @returns Route API JSON response
//      */


const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/image/furnitures')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname)
    }
})

// console.log('originalName', multerConfig.getFilename);

function checkFileType(file, callback) {
    // console.log('file', file)
    // Allowed ext
    const filetypes = /jpeg|jpg|png/
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    // console.log('extname', extname)
    // Check mime
    const mimetype = filetypes.test(file.mimetype)
    // console.log('mimetype', mimetype)

    if (mimetype && extname) {
        return callback(null, true)
    } else {
        callback('Error: Images Only!')
    }
}

const multiUpload = multer({
    storage: multerConfig,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback)
    },
})

exports.uploadManyFurniture = multiUpload.array('uploadedImages', 20);

exports.multiUploadFurniture = async (req, res) => {

    const files = req.files;
    //console.log("je suis ici :", files);
    const furniture_id = Number(req.params.id);
    console.log('furniture_id', furniture_id);
    const data = req.body;

    const currentProject = await furnitureDatamapper.findByPk(furniture_id);
    // console.log('all projects : ', currentProject.length);
    const position = currentProject.length + 1;
    console.log('position = ',position);

    try {
        if(position>20){
            return res.status(403).json({error : 'you cannot load more than 20 files'});  //! ajout condition par Véronique 
        }
        files.forEach(async file => {
            await furnitureDatamapper.addImageToFurniture(data.photo_credit, furniture_id, file.filename, position);
        })
        return res.status(200).json(`les images de la furniture ont bien été ajoutées`);

    } catch (error) {
        console.trace(error);
        res.status(500).json(error.toString());
    }
}