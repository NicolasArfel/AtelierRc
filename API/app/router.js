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

// import the validator schema
const validator = require('./validation/validator');

// import the validators on by one
/** createSchema */
const projectCreateSchema = require('./validation/schema/projectCreateSchema');
const projectPhotoCreateSchema = require('./validation/schema/projectPhotoCreateSchema');

/** updateSchema */
// const projectUpdateSchema = require('./validation/schema/projectUpdateSchema');
const userUpdateSchema = require('./validation/schema/userUpdateSchema');

const router = express.Router();

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
router.get('/api/getOnlyProjects', projectController.findAllProjects);
router.get('/api/project/:id', projectController.getOne);

/* Furnitures */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
router.get('/api/furniture/:id', furnitureController.getOne);

/* Login admin */
router.post('/api/login', loginController.login);

/* Admin interface - Update profile */
router.put('/api/admin/profile/:id', authenticateToken(), validator('body', userUpdateSchema), adminController.updateAdminProfile);

/* admin interface - create project and upload images */
router.post('/api/admin/add-project', authenticateToken(), uploadImage, validator('body', projectCreateSchema), validator('file', projectPhotoCreateSchema), upload); //
router.post('/api/admin/add-images/:id', authenticateToken(), uploadMany, multiUpload); //
// Ajouté par Véro 22/06/2022
router.get('/api/status', projectController.getStatus);

/* Admin interface - modify project and images */
router.put('/api/admin/project/:id', authenticateToken(), projectController.updateOneProject); //
//! All routes checked before here
router.put('/api/admin/project/:id/coverphoto', authenticateToken(), projectController.switchCoverPhotoProject);

/* Admin interface - delete project and images */
// ajouté par Véro 22/06/2022
router.delete('/api/admin/delete-images/:id', authenticateToken(), projectController.deletePhoto);
router.delete('/api/admin/project/:id', authenticateToken(), projectController.delete); // authenticateToken()

/* Contact form */
router.post('/api/contact', contactController.mail);

/* Admin interface - create furniture and upload images */
router.post('/api/admin/add-furniture', authenticateToken(), uploadImageFurniture, uploadFurniture);
router.post('/api/admin/add-images-furniture/:id', authenticateToken(), uploadManyFurniture, multiUploadFurniture);

/* Admin interface - modify project and images */
router.put('/api/admin/furniture/:id', authenticateToken(), furnitureController.updateOneFurniture);
router.put('/api/admin/furniture/:id/coverphoto', authenticateToken(), furnitureController.switchCoverPhotoFurniture);

/* Admin interface - delete furniture and images */
router.delete('/api/admin/delete-images-furniture/:id', authenticateToken(), furnitureController.deletePhoto);
router.delete('/api/admin/furniture/:id', authenticateToken(), furnitureController.delete);

/*  Admin */
// router.patch('/api/admin/profile/:id', adminController.profile);

module.exports = router;
