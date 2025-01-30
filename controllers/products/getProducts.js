const { Product, Category } = require('../../models');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: Category });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: '❌ Error al obtener los productos', error });
    }
};

module.exports = getProducts;
