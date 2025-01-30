const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Product = require('./Product')(sequelize, DataTypes);
const Category = require('./Category')(sequelize, DataTypes);
const User = require('./User')(sequelize, DataTypes);

// Relaciones
Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

module.exports = {
    sequelize,
    Product,
    Category,
    User,
};
