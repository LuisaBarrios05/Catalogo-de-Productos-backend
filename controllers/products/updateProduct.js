const { Product, Category } = require('../../models');

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price, image, description, categoryId, stock } = req.body;

        const product = await Product.findByPk(id, { inlcude: Category });
        if (!product) {
            return res.status(404).json({ message: '⚠️ Producto no encontrado' });
        }

        await product.update({ title, price, image, description, categoryId, stock });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: '❌ Error al actualizar el producto', error });
        console.error('Error en UPDATEPRODUCT:', error);
    }
};

module.exports = updateProduct;
