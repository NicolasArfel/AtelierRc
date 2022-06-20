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
        callback(null, Date.now() + "_" + file.originalname)
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
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback)
    },
})

exports.uploadMany = multiUpload.array('uploadedImages', 10);

exports.multiUpload = async (req, res) => {

    try {

        const originalname= req.file.originalname
        console.log("le nom du fichier est :",originalname);

        const files = req.files;
        console.log("je suis ici :",files);

        const project_id = req.params.id;
        const data = req.body;
        console.log(data);
       
        // files.forEach(async file => {
        //     await projectDatamapper.addImageToProject()
        // });
            
            for (let index = 0; index < files.length; index++) {
                await projectDatamapper.addImageToProject(data, project_id);
            }
            return res.status(200).json(`Les photos du projet ${data.project_name} ont bien été ajoutées`);
        //  }

    } catch (error) {
        console.trace(error);
        res.status(500).json(error.toString());
    }

}






// exports.uploadManyPhotos = async (req, res) =>  {
//     // NO CODE EXEMPLE
//     //const projectId = await projectDatamapper.findByPk();
//     // => ICI LA LOGIQUE UPLOAD MULTI FILE
//         if(err){
//         console.log(err);
//         return;
//       }
//       console.log(req.files);
//       res.end('Your files uploaded.');
//       console.log('Yep yep!');
//     }

    // req.body.file.length pour recuperer le nombre d'images envoyé depuis le front
    // Admettons que l'on récupère 10 images on boucle comme ceci :

    // => ICI LA LOGIQUE BOUCLE INSERTION DANS LA TABLE PROJECT_PHOTO 

//     for (let index = 0; index < req.body.file.length; index++) {
//      await projectDatamapper.addImageToProject(data);
//     }

//   }