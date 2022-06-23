const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email()
        .pattern(/^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
    firstname: Joi.string(),
    lastname: Joi.string(),
    password: Joi.string(),
    adress: Joi.string(),
    zip_code: Joi.number().integer()
        .pattern(/'^0[1-9]\d{3}$'/,
                /'^20[1-2]\d{2}$|^20300$'/,
                /'^[13-8]\d{4}$'/,
                /'^97[1-6]\d{2}$'/,
                /'^98[4678]\d{2}$'/,
                /'^9{5}$'/,
                /'^9[0-6]\d{3}$'/)
                .required(),
    city: Joi.string(),
    phone_number: Joi.string()
        .pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/),
}).min(1).required();