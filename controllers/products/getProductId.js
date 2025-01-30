const { Product, Category } = require("../../models")

const getProductId = async (req, res) => {
    const { id } = req.params

    try {
        const productId = await Product.findByPk(id, { include: Category })
        console.log(productId)
        if (!productId) {
            return res.status(404).json({ message: "Producto no encontrado." })
        }
        res.json(productId)
    } catch (error) {
        res.status(500).json({ message: '❌ Error al obtener el producto.', error: error.message })
        console.error('Error en GETPRODUCTID:', error);
    }
}
module.exports = getProductId;