const express = require('express');

// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
const adminController = require('./controllers/api/adminController');
const { uploadCoverPhoto, uploadImageCover } = require('./controllers/api/updateCoverPhotoController');
const { uploadCoverPhotoFurniture, uploadImageCoverFurniture } = require('./controllers/api/updateCoverPhotoFurnitureController');
const { upload, uploadImage } = require('./controllers/api/uploadController'); 
const { uploadMany, multiUpload } = require('./controllers/api/uploadManyController');


const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});

/** Projects */
router.get('/api/projects', projectController.getAllProjects);
router.get('/api/project/:id', projectController.getOne);

/* Furnitures */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
router.get('/api/furniture/:id', furnitureController.getOne);

/* Login admin */
router.post('/api/login', loginController.login);

/* Admin interface */
router.put('/api/admin/profile/:id', adminController.updateAdminProfile);
router.put('/api/admin/project/:id', projectController.updateOneProject);
router.put('/api/admin/furniture/:id', furnitureController.updateOneFurniture);
router.put('/api/admin/project/:id/coverphoto', uploadImageCover, uploadCoverPhoto);
router.put('/api/admin/furniture/:id/coverphoto', uploadCoverPhotoFurniture, uploadImageCoverFurniture);

/* admin interface - create project and upoad images*/
router.post('/api/admin/add-project', uploadImage, upload);
router.post('/api/admin/add-images/:id', uploadMany, multiUpload);
router.delete('/api/admin/delete-images/:id', projectController.deletePhoto);


router.delete('/api/admin/project/:id', projectController.delete);
// router.post('/api/admin/furniture', furnitureController.createAFurniture);
router.delete('/api/admin/furniture/:id', furnitureController.delete);

/* Contact */
router.post('/api/contact', contactController.mail);


module.exports = router;