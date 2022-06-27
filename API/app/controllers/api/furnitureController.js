const { updateOneFurniture } = require('../../models/furnitureDatamapper.js');
const furnitureDatamapper = require('../../models/furnitureDatamapper.js');


const furnitureController = {
  async getAllFurnitures(_, res) {
    try {
      const furnitures = await furnitureDatamapper.findAll();
      return res.json(furnitures);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  async getOne(req, res) {
    try {
      const furniture = await furnitureDatamapper.findByPk(req.params.id);
      //  if (!furniture) {
      //throw new ApiError('Post not found', { statusCode: 404 });
      //  res.send('furniture not found');
      // }
      return res.json(furniture);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  async delete(req, res) {
    const deleteFurniture = await furnitureDatamapper.findByPk(req.params.id);
    if (!deleteFurniture) {
      return res.status(404).json("error: The furniture you are looking for does not exist");
    }
    await furnitureDatamapper.delete(req.params.id);
    // 204 : No Content
    return res.status(204).json(toString('The furniture has been deleted'));
  },

  async deletePhoto(req, res) {
    const deleteThisPhoto = await furnitureDatamapper.findPhotoByPk(req.params.id);
    console.log("je suis dans le controller delete", deleteThisPhoto)
    if (!deleteThisPhoto) {
      return res.status(404).json("error: The photo you are looking for does not exists");
    }
    await furnitureDatamapper.deletePhoto(req.params.id);
    // 204 : No Content
    return res.status(204).json(toString('The photo has been deleted'));
  },

  async switchCoverPhotoFurniture(req, res) {
    try {
      //! I need id from photo clicked
      const id = Number(req.params.id);
      console.log(id);

      //? I want to check in my furniture the file with furniture_cover = true

      const currentFurnitureWithClickedPhoto = await furnitureDatamapper.findFurnitureByPkPhoto(id)
      // console.log('furniture + photo cliké = ', currentFurnitureWithClickedPhoto);

      const furniture_id = currentFurnitureWithClickedPhoto[0].furniture_id;
      // console.log('furniture_id =', furniture_id);

      const currentFurnitureWithAllPhoto = await furnitureDatamapper.findByPk(furniture_id)
      // console.log('current furniture + all photo =', currentFurnitureWithAllPhoto);
      const position = currentFurnitureWithAllPhoto.length;
      // console.log('position = ', position + 1);

      const findedCoverPhoto = currentFurnitureWithAllPhoto.find(element => element.cover_photo === true);
      console.log('findedCoverPhoto =', findedCoverPhoto);

      //? I want to swtich true to false on the furniture_photo found
      if (findedCoverPhoto) {
        console.log(' je suis dans if findedCoverPhoto et je lance turnOffCoverPhoto');
        const responseFindedCoverPhoto = await furnitureDatamapper.turnOffCoverPhoto(findedCoverPhoto.id, position);
        // //? I want to switch false to true on the furniture_photo i clicked
        responseFindedCoverPhoto && await furnitureDatamapper.turnONCoverPhoto(id);
      } else {
        await furnitureDatamapper.turnONCoverPhoto(id);
      }

      return res.status(200).json(`la photo de couverture a bien été modifiée`);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  async updateOneFurniture(req, res) {

    const id = Number(req.params.id)
    let newFurnitureName = req.body.furniture_name
    console.log('req.body', req.body);

    const furnitures = await furnitureDatamapper.findAll();
    console.log('furnitures', furnitures);

    const findSameFurnitureName = furnitures.find(element => element.furniture_name === req.body.furniture_name && element.furniture_id !== id)
    // console.log('findSameFurnitureName = ', findSameFurnitureName);

    let FurnitureNameBeforChange = furnitures.find(element => element.furniture_id === id)
    // console.log('FurnitureNameBeforChange = ', FurnitureNameBeforChange);

    if (newFurnitureName === "") {
      // console.log('Je suis dans IF newFurnitureName');
      newFurnitureName = FurnitureNameBeforChange.furniture_name
      console.log('newFurnitureName dans if =', newFurnitureName);
    }

    if (findSameFurnitureName !== undefined) {
      return res.status(404).json(`furniture ${req.body.furniture_name} already create`);
    }

    const furnitureToUpdate = await furnitureDatamapper.findByPk(id);
    if (!furnitureToUpdate) {
      return res.status(404).json('furniture not found');
    }

    console.log('newFurnitureName aprés if =', newFurnitureName);
    const spacingFurnitureName = newFurnitureName
      .replace(/(?!\w|\s)./g, '')
      .replace(/\s+/g, ' ')
      .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
    const slugFurnitureName = spacingFurnitureName.replace(/ +/g, "-").toLowerCase()
    console.log('slugFurnitureName slug =', slugFurnitureName);

    if (furnitureToUpdate) {

      const name = spacingFurnitureName;
      const slug = slugFurnitureName;
      const type = req.body.type;
      const designer = req.body.designer;
      const editor = req.body.editor;
      const date = req.body.date;
      const dimensions = req.body.dimensions;
      const condition = req.body.condition;
      const description = req.body.description;
      const availability = req.body.availability;
      const price = req.body.price;

      // console.log('id', id);

      const updateFurniture = await furnitureDatamapper.updateOneFurniture(id, name, slug, type, designer, editor, date, dimensions, condition, description, availability, price);
      console.log(updateFurniture);

      return res.status(200).json('Furniture has been updated');
    }
  },

};

module.exports = furnitureController;