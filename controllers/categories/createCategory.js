const { Category } = require('../../models');

const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const existingCategory = await Category.findOne({ where: { name } });
        if (existingCategory) {
            return res.status(400).json({ error: `La categoría '${name}' ya existe.` });
        }
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        // Manejamos errores de unicidad
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: `La categoría '${name}' ya existe.` });
        }
        console.error(error);
        res.status(500).json({ error: 'Error del servidor.' });
    }
};

module.exports = createCategory;

