const { Product } = require('../../models');

const createProduct = async (req, res) => {
    try {

        const { title, price, image, description, categoryId, stock } = req.body;
        const newProduct = await Product.create({ title, price, image, description, categoryId, stock });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('❌ Error al crear producto:', error); // Loguea el error
        res.status(400).json({ message: '❌ Error al crear el producto', error });
    }
};

module.exports = createProduct;
