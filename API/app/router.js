const express = require('express');


// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const projectPhotoController = require('./controllers/api/projectPhotoController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});

/** Projects */
router.get('/api/projects', projectController.getAllProjects);
router.get('/api/project/:id', projectController.getOne);

/** Photos */
router.get('/api/photos/', projectPhotoController.getAllPhotos);
router.get('/api/photo/:id', projectPhotoController.getOne);

/* Furnitures */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
router.get('/api/furniture/:id', furnitureController.getOne);

module.exports = router;