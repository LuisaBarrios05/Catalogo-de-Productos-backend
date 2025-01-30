const { Product, Category } = require('../../models');

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id, { include: Category });
        if (!product) {
            return res.status(404).json({ message: '⚠️ Producto no encontrado' });
        }

        await product.destroy();
        res.json({ message: '✅ Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: '❌ Error al eliminar el producto', error });
    }
};

module.exports = deleteProduct;
