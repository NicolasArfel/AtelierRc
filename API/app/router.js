const express = require('express');

// controllers imports
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
// const adminController = require('./controllers/api/adminController');
const { upload, uploadImage } = require('./controllers/api/uploadController');

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

/* admin interface */
router.post('/api/admin/add-project', uploadImage, upload);

// router.patch('/api/admin/project/:id', projectController.update)
router.delete('/api/admin/project/:id', projectController.delete);

/* Contact */
router.post('/api/contact', contactController.mail);

/* Upload images */
// router.post('/api/admin/upload-projects-images', );

/*  Admin */
// router.patch('/api/admin/profile/:id', adminController.profile);

module.exports = router;