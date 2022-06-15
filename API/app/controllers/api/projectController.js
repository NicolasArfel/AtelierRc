
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
    },

    async createAProject(req, res) {
       const data = req.body;
       try {
          //console.log(data);
          await projectDatamapper.insert(data);
          return res.status(200).json(`le projet ${data.project_name} a bien été ajouté`);

       } catch (error) {
         //console.trace(error);
         if(error.detail === `Key (name)=(${data.project_name}) already exists.`){
         console.log('je suis dans le if de mon controller');
         return res.status(500).json(`"Le projet ${data.project_name} existe déjà, merci de saisir un autre nom"`);
         } 
         if(error.code === '23514'){
         console.log('je suis dans le 2e if de mon controller');
         return res.status(500).json(`"Le slug ${data.slug} n'est pas correct"`);
         } else {
            res.status(500).json(error.toString());
         }
         console.trace(error);
       }
    },




//! si j'utilise le isUnique du dataMapper :    
//     async create(req, res) {
//       const data = req.body;
//       const project = await projectDatamapper.isUnique(data);
//       if (project) {
//           let field;
//           if (project.name === req.body.name) {
//               field = 'project_name';
//           } else {
//               field = 'slug';
//           } if (project_photo.photo_name === req.body.name) {
//              field = 'photo_name'
//           }
//           console.error(`Category already exists with this ${field}`, { statusCode: 400 });
//       }

//       const savedProject = await projectDatamapper.insert(data);
//       return res.json(savedProject);
//   },



};

module.exports = projectController;