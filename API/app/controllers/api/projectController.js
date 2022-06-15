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
               res.status(401).send("error: The project you are looking for does not exists");
               //throw new ApiError('Post not found', { statusCode: 404 });
               //res.send('project not found');
            } 
            
            return res.json(project);

      //   } catch(error) {
      //      console.trace(error);
      //     res.status(500).json(error.toString());
      //   }
    },

    /**
     * Project controller to create a record
     * @param {*} req Express req.object (not used)
     * @param {*} res Express response object
     * @returns Route API JSON response
     */

   //  async createAProject(req, res) {
   //     const data = req.body;
   //     try {
   //        //console.log(data);
   //        await projectDatamapper.insert(data);
   //        return res.status(200).json(`le projet ${data.project_name} a bien été ajouté`);

   //     } catch (error) {
   //       //console.trace(error);
   //       if(error.detail === `Key (name)=(${data.project_name}) already exists.`){
   //       console.log('je suis dans le if de mon controller');
   //       return res.status(500).json(`"Le projet ${data.project_name} existe déjà, merci de saisir un autre nom"`);
   //       } 
   //       if(error.code === '23514'){
   //       console.log('je suis dans le 2e if de mon controller');
   //       return res.status(500).json(`"Le slug ${data.slug} n'est pas correct"`);
   //       } else {
   //          res.status(500).json(error.toString());
   //       }
   //       console.trace(error);
   //     }
   //  },

//! si j'utilise le isUnique du dataMapper :    
//     async create(req, res) {
//       const data = req.body;
//       const project = await projectDatamapper.isUnique(data);
//       if (project) {
//           let field;
//           if (project.name === req.body.name) {
//               field = 'project_name';
//           } 
//           if (project_photo.photo_name === req.body.name) {
//           field = 'photo_name'
//           } else {
//               field = 'slug';
//           console.error(`Category already exists with this ${field}`, { statusCode: 400 });
//       }

//       const savedProject = await projectDatamapper.insert(data);
//       return res.json(savedProject);
//   },


   //! terminer cette méthode du controller
    /**
     * Project controller to update a record
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */
    async update(req, res){
       try {
         const updateProject = await projectDatamapper.findByPk(req.params.id);
         if (!project) {
            res.status(401).json("error: The project you are looking for does not exists");
             //throw new ApiError('Post not found', { statusCode: 404 });
            //  res.send('project not found');
         } if(req.body.name || req.body.slug){
            const existingProject = await projectDatamapper.findByPk(req.body, req.params.id);
            if(existingProject){
               let field;
               if(existingProject.name === req.body.name){
                  field = 'name'
               } else {
                  field = slug;
               }
               res.status(401).json("error: The project you are looking for does not exists");
               //throw new ApiError('Project not found', { statusCode: 404 });
               //  res.send('project not found');
            }
         }
         const savedProject = await projectDatamapper.update(req.params.id, req.body)
         return res.json(savedProject);
       } catch (error) {
         console.trace(error);
         res.status(500).json(error.toString());
       }
    },

   //! Ne fonctionne pas pour le moment 
    /**
     * Project controller to delete a record
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */
    async delete(req, res) {
      const deleteProject = await projectDatamapper.findByPk(req.params.id);
      console.log("je suis dans le controller delete ", deleteProject)
      if (!deleteProject) {
         res.status(401).send("error: The project you are looking for does not exists");
         //throw new ApiError('This project does not exists', { statusCode: 404 });
      }
      await projectDatamapper.delete(req.params.id);
      // 204 : No Content
      return res.status(204).json();
  },
};

module.exports = projectController;