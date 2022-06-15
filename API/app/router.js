const express = require('express');


// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const projectPhotoController = require('./controllers/api/projectPhotoController');
const loginController = require('./controllers/api/loginController');

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

module.exports = router;