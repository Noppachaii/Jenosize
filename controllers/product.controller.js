// controllers/product.controller.js
const Product = require('../models/product.model');
const { successResponse } = require('../utils/response');

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, stock } = req.body;
    const product = await Product.create({ name, price, stock });
    return successResponse(res, 'Product created successfully', product);
  } catch (err) {
    next(err);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ order: [['price', 'ASC']] });
    return successResponse(res, 'Products retrieved', products);
  } catch (err) {
    next(err);
  }
};
