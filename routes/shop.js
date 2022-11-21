const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

/* /shop => GET */
router.get('/', productsController.getProduct);

module.exports = router;