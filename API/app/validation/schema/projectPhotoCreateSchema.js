const Joi = require('joi');

module.exports = Joi.object({
    photo_name: Joi.string().required(),
    position: Joi.number().required(),
    photo_credit: Joi.string(),
    cover_photo: Joi.boolean(),
}).required();