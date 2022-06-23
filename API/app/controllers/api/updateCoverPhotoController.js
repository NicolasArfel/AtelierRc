const multer = require('multer')
const path = require('path')
const projectDatamapper = require('../../models/projectDatamapper');


// /**
//      * Project controller to create a record
//      * @param {*} req Express req.object (not used)
//      * @param {*} res Express response object
//      * @returns Route API JSON response
//      */


const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/image/projects')
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
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback)
    },
})

exports.uploadImageCover = upload.single('cover_image');

exports.uploadCoverPhoto = async (req, res) => {

    try {

        const originalname = req.file.originalname

        const data = req.body;
        const id = Number(req.params.id);
        console.log(id);

        const allProjects = await projectDatamapper.findAll();
        // console.log('all projects : ', allProjects);

        const currentProject = await projectDatamapper.findByPk(id);
        // console.log('all projects : ', currentProject.length);
        const position = currentProject.length + 1;
        console.log(position);

        const checkIfProjectExists = allProjects.find(element => element.project_id === id);
        console.log('Existing project :', checkIfProjectExists);

        // const checkIfCoverExists = allProjects.find(element => element.cover_photo === true);
        // console.log (checkIfCoverExists);

        //Checking if the photo already exists
        const checkIfphotoExist = allProjects.find(element => element.photo_name === originalname);

        // console.log("toto",checkIfphotoExist);

        if (checkIfphotoExist !== undefined) {
            return res.status(500).json(`"La photo ${originalname} existe déjà, merci de saisir un autre nom"`);
        }

        //! Le champs se rempli automatiquement, mais c'est une vérification supplémentaire
        if (data.photo_name === "") {
            return res.status(500).json(`Merci de remplir le champs name de la photo (photo_name)`);
        }
        console.log('je lance l\'update');
        const resultUpdate = await projectDatamapper.updateCoverPhoto(data, originalname, id);

        if (checkIfProjectExists && checkIfProjectExists.cover_photo === true) {
            console.log(' je suis dans if de checkIfProjectExists');
            await projectDatamapper.turnOffCoverPhoto(checkIfProjectExists.id, position);

        }

        return res.status(200).json(`la photo ${originalname} de couverture a bien été modifiée`);


    } catch (error) {
        console.trace(error);
        res.status(500).json(error.toString());
    }
}