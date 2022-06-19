// I import the datamappers
const { update } = require('../../models/projectDatamapper.js');
const projectDatamapper  = require('../../models/projectDatamapper.js');


const projectController = {
/**
 * Project controller to get all the projects
 * @param {*} _ Express req.object (not used)
 * @param {*} res Express response object
 * @returns Route API JSON response with the projects
 */
    async getAllProjects(_, res) {
       try {
            const projects = await projectDatamapper.findAll();
            return res.json(projects);
    
       } catch(error) {
          console.trace(error);
          res.status(500).json(error.toString());
        }
    },

   /**
    * Project controller to get one specific project
    * @param {*} req Express req.object (not used)
    * @param {*} res Express response object
    * @returns Route API JSON response with the project
    */
    async getOne(req, res) {
       //try {
            const project = await projectDatamapper.findByPk(req.params.id);
           
            if (!project) {
               //console.log('je suis dans le if de getOne');
               res.status(404).send("error: The project you are looking for does not exists");
               //throw new ApiError('Post not found', { statusCode: 404 });
               //res.send('project not found');
            } 
            
            return res.json(project);

      //   } catch(error) {
      //      console.trace(error);
      //     res.status(500).json(error.toString());
      //   }
    },

  
   //! terminer cette méthode du controller
    /**
     * Project controller to update a record
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */
   // async update(req, res){
   //     try {

   //       const updateProject = await projectDatamapper.findByPk(req.params.id);
   //       console.log(updateProject);

   //       if (!updateProject) {
   //          res.status(404).json("error: The project you are looking for does not exists");
   //       //     //throw new ApiError('Post not found', { statusCode: 404 });
   //       //    //  res.send('project not found');
   //       } if(req.body.project_name || req.body.slug){
   //             const existingProject = await projectDatamapper.findByPk(req.params.id);
   //          if(existingProject){
   //             let field;
   //             if(existingProject.name === req.body.name){
   //                field = 'name'
   //             } else {
   //                field = 'slug';
   //            }
   //             res.status(404).json("error: The project you are looking for does not exists");
   //             throw new ApiError('Project not found', { statusCode: 404 });
   //              res.send('project not found');
   //          }
   //       }
   //       const savedProject = await projectDatamapper.update(req.params.id)
   //       return res.json(savedProject);
   //     } catch (error) {
   //       console.trace(error);
   //       res.status(500).json(error.toString());
   //     }
   // },
   
 
    /**
     * Project controller to delete a record
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */
    async delete(req, res) {
      const deleteProject = await projectDatamapper.findByPk(req.params.id);
      console.log("je suis dans le controller delete", deleteProject)
      if (!deleteProject) {
         return res.status(404).send("error: The project you are looking for does not exists");
         //throw new ApiError('This project does not exists', { statusCode: 404 });
      }
      await projectDatamapper.delete(req.params.id);
      // 204 : No Content
      return res.status(204).json(toString('The project has been deleted'));
  },
};

module.exports = projectController;