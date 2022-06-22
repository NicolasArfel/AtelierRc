const express = require('express');

// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
const adminController = require('./controllers/api/adminController');
const { Router } = require('express');

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
router.post('/api/admin/project', projectController.createAProject);
// router.post('/api/admin/project', projectController.create);
router.put('/api/admin/project/:id', projectController.updateOneProject)
router.delete('/api/admin/project/:id', projectController.delete);
// router.post('/api/admin/furniture', furnitureController.createAFurniture);
// router.put('/api/admin/furniture/:id', furnitureController.updateOneFurniture)
router.delete('/api/admin/furniture/:id', furnitureController.delete);

/* Contact */
router.post('/api/contact', contactController.mail);


module.exports = router;