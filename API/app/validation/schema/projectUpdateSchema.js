const Joi = require('joi');

module.exports = Joi.object({
    project_name: Joi.string(),
    slug: Joi.string()
        .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    location: Joi.string(),
    date: Joi.string(),
    program: Joi.string(),
    surface_area: Joi.string(),
    type: Joi.string(),
    client: Joi.string(),
    design: Joi.string(),
    photo_credit: Joi.string(),
    labelValue: Joi.number(),
}).min(1).required();