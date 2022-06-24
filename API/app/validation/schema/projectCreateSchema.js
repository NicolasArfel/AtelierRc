const Joi = require('joi');

module.exports = Joi.object({
    project_name: Joi.string().required(),
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
    user_id: Joi.number(),
    status_id: Joi.number(),
    photo_name: Joi.string(),
    position: Joi.number().required(),
    photo_credit: Joi.string(),
    cover_photo: Joi.boolean(),
}).required();