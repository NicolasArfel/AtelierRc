const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required()
        .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
        .required(),
    type: Joi.string(),
    designer: Joi.string(),
    date: Joi.string(),
    program: Joi.string(),
    surface_area: Joi.string(),
    type: Joi.string(),
    client: Joi.string(),
    design: Joi.string(),
    photo_credit: Joi.string(),
}).required();