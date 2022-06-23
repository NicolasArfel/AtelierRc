const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string().required(),
}).required();