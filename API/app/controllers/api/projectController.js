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


    /**
     * Project controller to create a record
     * @param {*} req Express req.object (not used)
     * @param {*} res Express response object
     * @returns Route API JSON response
     */

     async createAProject(req, res) {
       const data = req.body;
       const allProjects = await projectDatamapper.findAll();
       console.log('all projects : ', allProjects);
       const checkIfProjectExists = allProjects.find(element => element.project_name === data.project_name);
       console.log('Existing project :', checkIfProjectExists);
       
       const checkIfphotoExist = allProjects.find(element  => element.photo_name === data.photo_name);
       if (checkIfphotoExist !== undefined){
        return res.status(500).json(`"La photo ${data.project_name} existe déjà, merci de saisir un autre nom"`);
       } else {
         // ici la logique photo

       }

       try {
        // const slugRegex = data.slug;
        // const regex = '^[a-z0-9]+(?:-[a-z0-9]+)*$';

        if(data.photo_name === ""){
            return res.status(500).json(`Merci de remplir le champs photo_name`);
            
            // Je doit comparer la value data.project_name qui vient du req.body avec la base de donnée.
            // Je fait un appel au datamapper exemple : const allProject = await projectDatamapper.findAll();

            // Console.log(allProject) pour visualiser la structure de la reponse.
            // const resultallProjectName = allProject.find(element => element.name === project_name)
            // } if (resultallProjectName) {

          } if (checkIfProjectExists !== undefined) {
            return res.status(500).json(`"Le projet ${data.project_name} existe déjà, merci de saisir un autre nom"`);
          } 
          
          else {
            const photoName = file.originalname;
            await projectDatamapper.insert(data,photoName);
            return res.status(200).json(`le projet ${data.project_name} a bien été ajouté`);
          }
          
       } catch (error) {
         //console.trace(error);
         if(error.detail === `Key (name)=(${data.project_name}) already exists.`){
         //console.log('je suis dans le if de mon controller');
         return res.status(500).json(`"Le projet ${data.project_name} existe déjà, merci de saisir un autre nom"`);
         } 
         // if(error.code === '23514'){
         // console.log('je suis dans le 2e if de mon controller');
         // return res.status(500).json(`"Le slug ${data.slug} n'est pas correct"`);
         // } 
         else {
            res.status(500).json(error.toString());
         }
         console.trace(error);
       }
    },

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