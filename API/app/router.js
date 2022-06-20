const express = require('express');

// controllers imports
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
// const adminController = require('./controllers/api/adminController');
const { upload, uploadImage } = require('./controllers/api/uploadController'); 
const { uploadMany, multiUpload } = require('./controllers/api/uploadManyController');

const { Router } = require('express');


const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});

/** Projects */
router.get('/api/projects', projectController.getAllProjects);
router.get('/api/project/:id', projectController.getOne);
router.get('/api/status', projectController.getStatus);

/* Furnitures */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
router.get('/api/furniture/:id', furnitureController.getOne);

/* Login admin */
router.post('/api/login', loginController.login);

/* admin interface - create project and upoad images*/
router.post('/api/admin/add-project', uploadImage, upload);
router.post('/api/admin/add-images/:id', uploadMany, multiUpload);


// router.patch('/api/admin/project/:id', projectController.update)
router.delete('/api/admin/project/:id', projectController.delete);

/* Contact */
router.post('/api/contact', contactController.mail);

/* Upload images */


/*  Admin */
// router.patch('/api/admin/profile/:id', adminController.profile);

module.exports = router;