const { Category } = require('../../models')

const deteleCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByPk(id);
        if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });
        await category.destroy()
        res.status(200).json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error })
        console.error('Error en deleteCategory', error)
    }
}
module.exports = deteleCategory;