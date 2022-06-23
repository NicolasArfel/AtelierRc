const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    password: Joi.string(),
}).min(1).required();