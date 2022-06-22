// I import the datamappers
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


    async getStatus(req, res) {
       try {
          const status = await projectDatamapper.findAllStatus();
          return res.json(status)
       } catch (error) {
         console.trace(error);
         res.status(500).json(error.toString());
       }
    },
   
 
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
      return res.status(204).json({Status :'The project has been deleted'});
  },


  async deletePhoto(req, res) {
   const deleteThisPhoto = await projectDatamapper.findPhotoByPk(req.params.id);
   console.log("je suis dans le controller delete", deleteThisPhoto)
   if (!deleteThisPhoto) {
      return res.status(404).send("error: The photo you are looking for does not exists");
   }
   await projectDatamapper.deletePhoto(req.params.id);
   // 204 : No Content
   return res.status(204).json(toString('The photo has been deleted'));
},

  async updateOneProject(req, res) {
    const projectToUpdate = await projectDatamapper.findByPk(req.params.id);
    if (!projectToUpdate) {
        res.send('project not found');
    }
    
    if(projectToUpdate) {

        const spacingProjectName = req.body.name.replace(/  +/g, " ")
        const slugProjectName = spacingProjectName.replace(/ +/g, "-").toLowerCase()
       

        const id = req.params.id;
        const name = spacingProjectName;
        const slug = slugProjectName;
        const location = req.body.location;
        const date = req.body.date;
        const program = req.body.program;
        const surface_area = req.body.surface_area;
        const type = req.body.type;
        const project_client = req.body.client;
        const design = req.body.design;
        const photo_credit = req.body.photo_credit;
      

        const updateProject = await projectDatamapper.updateOneProject(id, name, slug, location, date, program, surface_area, type, project_client, design, photo_credit);
        res.send('Project has been updated');
        console.log(updateProject);
    }
        },

        


};

module.exports = projectController;