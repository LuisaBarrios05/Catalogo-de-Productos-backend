const express = require('express');
const router = express.Router();
const {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/categories');

router.post('/create', createCategory);

router.get('/', getCategories);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);

module.exports = router;
