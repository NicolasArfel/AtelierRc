
const projectDatamapper  = require('../../models/projectDatamapper.js');


const projectController = {
    async getAllProjects(_, res) {
       try {
            const projects = await projectDatamapper.findAll();
            return res.json(projects);
    
       } catch(error) {
          console.trace(error);
          res.status(500).json(error.toString());
        }
    },

    async getOne(req, res) {
       try {
            const project = await projectDatamapper.findByPk(req.params.id);
          //  if (!project) {
                //throw new ApiError('Post not found', { statusCode: 404 });
              //  res.send('project not found');
           // }
            return res.json(project);
        } catch(error) {
           console.trace(error);
           res.status(500).json(error.toString());
        }
    }
};

module.exports = projectController;