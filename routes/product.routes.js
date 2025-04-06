// routes/product.routes.js
const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');
const validate = require('../middleware/validate');
const { createProductSchema } = require('../validators/product.validator');

router.post('/', validate(createProductSchema), controller.createProduct);

router.get('/', controller.getAllProducts);

module.exports = router;
