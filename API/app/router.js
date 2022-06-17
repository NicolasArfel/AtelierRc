const express = require('express');

// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
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

/* Login */
router.post('/api/login', loginController.login);

/* admin interface */
// router.post('/api/admin/project', projectController.createAProject);
// router.post('/api/admin/project', projectController.create);
// router.patch('api/admin/project/:id')
router.delete('api/project/:id', projectController.delete);


module.exports = router;