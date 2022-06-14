
const projectPhotoDatamapper = require('../../models//projectPhotoDatamapper');


const projectPhotoController = {
    async getAllPhotos(_, res) {
       try {
            const photo = await projectPhotoDatamapper.findAll();
            return res.json(photo);
    
       } catch(error) {
          console.trace(error);
          res.status(500).json(error.toString());
        }
    },

    async getOne(req, res) {
       try {
            const photo = await projectPhotoDatamapper.findByPk(req.params.id);
          //  if (!project) {
                //throw new ApiError('Post not found', { statusCode: 404 });
              //  res.send('project not found');
           // }
            return res.json(photo);
        } catch(error) {
           console.trace(error);
           res.status(500).json(error.toString());
        }
    }
};

module.exports = projectPhotoController;