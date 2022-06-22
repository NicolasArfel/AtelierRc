const furnitureDatamapper  = require('../../models/furnitureDatamapper.js');


const furnitureController = {
    async getAllFurnitures(_, res) {
       try {
            const furnitures = await furnitureDatamapper.findAll();
            return res.json(furnitures);
    
       } catch(error) {
          console.trace(error);
          res.status(500).json(error.toString());
        }
    },

    async getOne(req, res) {
       try {
            const furniture = await furnitureDatamapper.findByPk(req.params.id);
          if (!furniture) {
            res.send('furniture not found');
          }
            return res.json(furniture);
        } catch(error) {
           console.trace(error);
           res.status(500).json(error.toString());
        }
    },

   
    async delete(req, res) {
      const deleteFurniture = await furnitureDatamapper.findByPk(req.params.id);
      if (!deleteFurniture) {
         res.status(404).send("error: The furniture you are looking for does not exist");
      }
      await furnitureDatamapper.delete(req.params.id);
      // 204 : No Content
      return res.status(204).json(toString('The furniture has been deleted'));
  },

  async deletePhoto(req, res) {
    const deleteThisPhoto = await furnitureDatamapper.findPhotoByPk(req.params.id);
    console.log("je suis dans le controller delete", deleteThisPhoto)
    if (!deleteThisPhoto) {
       return res.status(404).send("error: The photo you are looking for does not exists");
    }
    await furnitureDatamapper.deletePhoto(req.params.id);
    // 204 : No Content
    return res.status(204).json(toString('The photo has been deleted'));
 },

 async updateOneFurniture(req, res) {
  const furnitureToUpdate = await furnitureDatamapper.findByPk(req.params.id);
  if (!furnitureToUpdate) {
      res.send('furniture not found');
  }
  
  if(furnitureToUpdate) {

      // const spacingFurnitureName = req.body.name.replace(/  +/g, " ")
      // const slugFurnitureName = spacingFurnitureName.replace(/ +/g, "-").toLowerCase()
     

      const id = req.params.id;
      const name = req.body.name;
      const slug = req.body.slug;
      const type = req.body.type;
      const designer = req.body.designer;
      const editor = req.body.editor;
      const date = req.body.date;
      const width= req.body.width;
      const height = req.body.height;
      const length = req.body.length;
      const condition = req.body.condition;
      const description = req.body.description;
      const availability = req.body.availability;
      const price = req.body.price;


      const updateFurniture = await furnitureDatamapper.updateOneFurniture(id, name, slug, type, designer, editor, date, width, height, length, condition, description, availability, price);
      res.send('Furniture has been updated');
      console.log(updateFurniture);
  }
      },

};

module.exports = furnitureController;