const express = require('express');
const furnitureController = require('./controllers/api/furnitureController');

// importer les controllers
const projectController = require('./controllers/api/projectController');

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

module.exports = router;