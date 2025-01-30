const express = require('express');
const { createProduct, updateProduct, deleteProduct, getProducts, getProductId } = require('../controllers/products');
const authAdmin = require('../middlewares/authAdmin');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductId)
router.post('/create', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
