const multer = require('multer')
const path = require('path')
const furnitureDatamapper = require('../../models/furnitureDatamapper');


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
        callback(null, file.originalname)
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

const upload = multer({
    storage: multerConfig,
    // limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback)
    },
})

exports.uploadImageFurniture = upload.single('cover_image');

exports.uploadFurniture = async (req, res) => {

    try {

        const originalname = req.file.originalname

        const data = req.body;

        const spacingFurnitureName = data.furniture_name
            .replace(/(?!\w|\s)./g, '')
            .replace(/\s+/g, ' ')
            .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
        const slugFurnitureName = spacingFurnitureName.replace(/ +/g, "-").toLowerCase()
        console.log(slugFurnitureName)

        const allFurnitures = await furnitureDatamapper.findAll();
        // console.log('allFurnitures : ', allFurnitures);

        // Checking if the project already exists
        const checkIfFurnitureExists = allFurnitures.find(element => element.furniture_name === data.furniture_name);
        // console.log('Existing furniture :', checkIfFurnitureExists);

        //Checking if the photo already exists
        const checkIfphotoExist = allFurnitures.find(element => element.photo_name === originalname);

        console.log("toto", checkIfphotoExist);

        if (checkIfphotoExist !== undefined) {
            return res.status(500).json(`La photo ${originalname} existe déjà, merci de saisir un autre nom`);
        }

        if (data.furniture_name === "") {
            return res.status(500).json(`Merci de remplir le champs nom de la furniture`);
        }

        //! Le champs se rempli automatiquement, mais c'est une vérification supplémentaire
        if (data.photo_name === "") {
            return res.status(500).json(`Merci de remplir le champs nome de la photo (photo_name)`);
        }

        if (checkIfFurnitureExists !== undefined) {
            return res.status(500).json(`La furniture ${data.furniture_name} existe déjà, merci de saisir un autre nom`);
        } else {
            await furnitureDatamapper.insertFurnitureWithCoverPhoto(data, originalname, spacingFurnitureName, slugFurnitureName);
            return res.status(200).json(`le projet ${data.furniture_name} a bien été ajouté`);
        }

    } catch (error) {
        console.trace(error);
        res.status(500).json(error.toString());
    }

}

