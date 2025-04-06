// validators/product.validator.js
const Joi = require('joi');

const createProductSchema = Joi.object({
  name: Joi.string().min(1).required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
});

module.exports = {
  createProductSchema,
};
