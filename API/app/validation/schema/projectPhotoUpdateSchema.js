const Joi = require('joi');

module.exports = Joi.object({
    fieldname: Joi.string(),
    originalname: Joi.string(),
    encoding: Joi.string(),
    mimetype: Joi.string(),
    destination: Joi.string(),
    filename: Joi.string(),
    path: Joi.string(),
    size: Joi.number(),
}).min(1).required();