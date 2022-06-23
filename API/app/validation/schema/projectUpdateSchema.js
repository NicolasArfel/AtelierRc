const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string(),
    slug: Joi.string()
        .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    location: Joi.string(),
    date: Joi.string(),
    program: Joy.string(),
    surface_area: Joy.string(),
    type: Joy.string(),
    client: Joy.string(),
    design: Joy.string(),
    photo_credit: Joy.string(),
}).min(1).required();