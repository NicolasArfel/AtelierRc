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

exports.uploadImage = upload.single('cover_image');

exports.upload = async (req, res) => {

    const originalname = req.file.originalname

    const data = req.body;

    const allProjects = await projectDatamapper.findAll();
    // console.log('all projects : ', allProjects);

    // Checking if the project already exists
    const checkIfProjectExists = allProjects.find(element => element.project_name === data.project_name);
    // console.log('Existing project :', checkIfProjectExists);

    //Checking if the photo already exists
    const checkIfphotoExist = allProjects.find(element => element.photo_name === data.photo_name);

    if (checkIfphotoExist !== undefined) {
        return res.status(500).json(`"La photo ${data.project_name} existe déjà, merci de saisir un autre nom"`);
    }

    try {
        // const slugRegex = data.slug;
        // const regex = '^[a-z0-9]+(?:-[a-z0-9]+)*$';

        if (data.project_name === "") {
            return res.status(500).json(`Merci de remplir le champs nom du projet (project_name)`);
        } 

        //! Le champs se rempli automatiquement, mais c'est une vérification supplémentaire
        if (data.photo_name === "") {
            return res.status(500).json(`Merci de remplir le champs nome de la photo (photo_name)`);
        } 

        if (checkIfProjectExists !== undefined) {
            return res.status(500).json(`"Le projet ${data.project_name} existe déjà, merci de saisir un autre nom"`);
        } else {
            await projectDatamapper.insert(data, originalname);
            return res.status(200).json(`le projet ${data.project_name} a bien été ajouté`);
        }

    } catch (error) {
        console.trace(error);
        res.status(500).json(error.toString());
    }

}



  // async addPhotoToProject(req, res) {
  //   // NO CODE EXEMPLE

  //   // => ICI LA LOGIQUE UPLOAD MULTI FILE

  //   // req.body.file.length pour recuperer le nombre d'images envoyé depuis le front
  //   // Admettons que l'on récupère 10 images on boucle comme ceci :

  //   // => ICI LA LOGIQUE BOUCLE INSERTION DANS LA TABLE PROJECT_PHOTO 

  //   for (let index = 0; index < req.body.file.length; index++) {
  //    await projectDatamapper.addImageToProject(data);
  //   }

  // },