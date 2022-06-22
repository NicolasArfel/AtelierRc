const express = require('express');

// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
const adminController = require('./controllers/api/adminController');
const { uploadCoverPhoto, uploadImageCover } = require('./controllers/api/updateCoverPhotoController');
const { upload, uploadImage } = require('./controllers/api/uploadController'); 
const { uploadMany, multiUpload } = require('./controllers/api/uploadManyController');

// importer les middlewares
const authenticateToken = require('./middlewares/authenticateToken');

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
router.get('/api/project/:id', projectController.getOne);

/* Furnitures */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
router.get('/api/furniture/:id', furnitureController.getOne);

/* Login admin */
router.post('/api/login', loginController.login);

/* Admin interface - Update profile */
router.put('/api/admin/profile/:id', adminController.updateAdminProfile);

/* admin interface - create project and upload images*/
router.post('/api/admin/add-project', uploadImage, upload);
router.post('/api/admin/add-images/:id', uploadMany, multiUpload);
// Ajouté par Véro 22/06/2022
router.get('/api/status', projectController.getStatus);

/* Admin interface - modify project and images */
router.put('/api/admin/project/:id', projectController.updateOneProject);
router.put('/api/admin/project/:id/coverphoto', uploadImageCover, uploadCoverPhoto);

/* Admin interface - delete project and images */
// ajouté par Véro 22/06/2022
router.delete('/api/admin/delete-images/:id', projectController.deletePhoto);
router.delete('/api/admin/project/:id', authenticateToken(), projectController.delete);
/* Contact form */
router.post('/api/contact', contactController.mail);


/*  Admin */
// router.patch('/api/admin/profile/:id', adminController.profile);

module.exports = router;