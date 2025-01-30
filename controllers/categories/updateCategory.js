const { Category } = require('../../models');

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const category = await Category.findByPk(id);
        if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });

        category.name = name || category.name;
        await category.save();

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
};

module.exports = updateCategory;
