const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email()
        .pattern(/^[a-zA-Z0-9.!#$%&''*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
    firstname: Joi.string(),
    lastname: Joi.string(),
    password: Joi.string(),
}).min(1).required();
