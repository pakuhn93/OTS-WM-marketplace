// import Model, DataTypes; sequelize 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config'); // our connection to our mySQL database

// initialize our class Item
class MagicItem extends Model {} 

// initialize MagicItem in mySQL
MagicItem.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rarity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING
    },
    page: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'magic-item'
});

module.exports = MagicItem;