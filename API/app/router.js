const express = require('express');

// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
const adminController = require('./controllers/api/adminController');
// const adminController = require('./controllers/api/adminController');
const { upload, uploadImage } = require('./controllers/api/uploadController');
const { uploadFurniture, uploadImageFurniture } = require('./controllers/api/uploadFurnitureController');
const { uploadMany, multiUpload } = require('./controllers/api/uploadManyController');
const { uploadManyFurniture, multiUploadFurniture } = require('./controllers/api/uploadManyFurnitureController');

// importer les middlewares
const authenticateToken = require('./middlewares/authenticateToken');

// import the validator and schemas
validator = require('./validation/validator');
/** createSchema */
const projectCreateSchema = require('./validation/schema/projectCreateSchema');
const projectPhotoCreateSchema = require('./validation/schema/projectPhotoCreateSchema');

/** updateSchema */
//const projectUpdateSchema = require('./validation/schema/projectUpdateSchema');
const userUpdateSchema = require('./validation/schema/userUpdateSchema');

const router = express.Router();

// test server
router.get('/', (req, res) => {
  res.send('hello');
});

/** Projects */
/**
 * GET /api/projects
 * @summary Get all projects
 * @tags Projects
 */
router.get('/api/projects', projectController.getAllProjects);

/**
 * GET /api/getOnlyProjects
 * @summary Get projects only
 * @tags Projects
 */
router.get('/api/getOnlyProjects', projectController.findAllProjects)

/**
 * GET /api/project/{id}
 * @summary Get project by his id
 * @tags Projects
 */
router.get('/api/project/:id', projectController.getOne);

/* Furnitures */

/**
 * GET /api/furnitures
 * @summary Get all furnitures
 * @tags Furnitures
 */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
/**
 * GET /api/furniture/{id}
 * @summary Get furnitures by their id
 * @tags Furnitures
 */
router.get('/api/furniture/:id', furnitureController.getOne);

/* Login admin */

/**
 * POST /api/login
 * @summary user (admin) loggin access
 * @tags Login
 */
router.post('/api/login', loginController.login);

/* Admin interface - Update profile */

/**
 * PUT /api/admin/profile/{id}
 * @summary user (admin) can modify his profile info (fistname, lastname, email, password)
 * @tags Login
 */
router.put('/api/admin/profile/:id',authenticateToken(), validator('body', userUpdateSchema), adminController.updateAdminProfile); 


/* admin interface - create project and upload images*/

/**
 * POST /api/admin/add-project
 * @summary user (admin) if identify can create a project with a cover photo
 * @tags Admin (back-office)
 */
// /**
//  * @swagger
//  * /api/admin/add-project:
//  * post:
//  *  description: Create a new project
//  *  parameters:
//  *  - name: project_name
//  *  description: name of the project
//  *  in: formData
//  *  required: true
//  *  type:String
//  *  responses:
//  *    200:
//  *    description: Success 
//  * 
//  */
router.post('/api/admin/add-project', authenticateToken(), uploadImage, validator('body', projectCreateSchema), validator('file', projectPhotoCreateSchema), upload);  // 

/**
 * POST /api/admin/add-images/{id}
 * @summary user (admin) if identify can add many images to a created project
 * @tags Admin (back-office)
 */
router.post('/api/admin/add-images/:id', authenticateToken(), uploadMany, multiUpload); //

/**
 * GET /api/status
 * @summary get all the status
 * @tags Admin (back-office)
 */
router.get('/api/status', projectController.getStatus); // Add by Véro 22/06/2022

/* Admin interface - modify project and images */

/**
 * PUT /api/admin/project/{id}
 * @summary user (admin) if identify can update and modify project's informations
 * @tags Admin (back-office)
 */
router.put('/api/admin/project/:id', authenticateToken(), projectController.updateOneProject); // 

//! All routes checked before here
/**
 * PUT /api/admin/project/{id}/coverphoto
 * @summary user (admin) if identify can change the cover photo of a project
 * @tags Admin (back-office)
 */
router.put('/api/admin/project/:id/coverphoto', authenticateToken(), projectController.switchCoverPhotoProject);

/* Admin interface - delete project and images */

/**
 * DELETE /api/admin/delete-images/{id}
 * @summary user (admin) if identify can delete images of a project
 * @tags Admin (back-office)
 */
router.delete('/api/admin/delete-images/:id', authenticateToken(), projectController.deletePhoto); // ajouté par Véro 22/06/2022

/**
 * DELETE /api/admin/project/{id}
 * @summary user (admin) if identify can delete a project
 * @tags Admin (back-office)
 */
router.delete('/api/admin/project/:id', projectController.delete); // authenticateToken()

/* Contact form */

/**
 * POST /api/contact
 * @summary visitor can contact the admin through the contact form on the contact page
 * @tags Contact form
 */
router.post('/api/contact', contactController.mail);

/*Admin interface - create furniture and upload images */

/**
 * POST /api/admin/add-furniture
 * @summary user (admin) if identify can add a furniture with a cover photo
 * @tags Admin (back-office)
 */
router.post('/api/admin/add-furniture', uploadImageFurniture, uploadFurniture);

/**
 * POST /api/admin/add-images-furniture/{id}
 * @summary user (admin) if identify can add many images to a furniture
 * @tags Admin (back-office)
 */
router.post('/api/admin/add-images-furniture/:id', uploadManyFurniture, multiUploadFurniture);

/* Admin interface - modify project and images */

/**
 * PUT /api/admin/furniture/{id}
 * @summary user (admin) if identify can update and modify furnitures's informations
 * @tags Admin (back-office)
 */
router.put('/api/admin/furniture/:id', furnitureController.updateOneFurniture);

/**
 * PUT /api/admin/furniture/{id}/coverphoto
 * @summary user (admin) if identify can change the cover photo of a furniture
 * @tags Admin (back-office)
 */
router.put('/api/admin/furniture/:id/coverphoto', furnitureController.switchCoverPhotoFurniture);

/* Admin interface - delete furniture and images */

/**
 * DELETE /api/admin/delete-images-furniture/{id}
 * @summary user (admin) if identify can delete images of a furniture
 * @tags Admin (back-office)
 */
router.delete('/api/admin/delete-images-furniture/:id', furnitureController.deletePhoto);

/**
 * DELETE /api/admin/furniture/{id}
 * @summary user (admin) if identify can delete a furniture
 * @tags Admin (back-office)
 */
router.delete('/api/admin/furniture/:id', furnitureController.delete);

/*  Admin */
// router.patch('/api/admin/profile/:id', adminController.profile);

module.exports = router;
