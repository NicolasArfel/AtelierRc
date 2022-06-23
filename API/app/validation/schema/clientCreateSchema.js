const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email(),
    firstname: Joi.string().required(),
    lastname: Joi.string(),
    password: Joi.string().required(),
    adress: Joi.string(),
    zip_code: Joi.number().integer().required()
        .pattern(/'^0[1-9]\d{3}$'/
                /'^20[1-2]\d{2}$|^20300$'/ 
                /'^[13-8]\d{4}$'/ 
                /'^97[1-6]\d{2}$'/ 
                /'^98[4678]\d{2}$'/ 
                /'^9{5}$'/
                /'^9[0-6]\d{3}$'/)
        .required(),
    city: Joi.string(),
    phone_number: Joi.string()
        .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
        .required(),
}).required();