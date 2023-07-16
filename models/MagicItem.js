// import Model, DataTypes; sequelize 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config'); // our connection to our mySQL database

// initialize our class Item
class MagicItem extends Model {
    // returns a random number between the max and min price
    // 25% up or down from base price
    generatePrice(){
        const minPrice = this.price - (this.price * 0.25);
        const maxPrice = this.price + (this.price * 0.25);
        return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    }

    // set a discount to the base price
    // takes in a parameter 'discount' as a whole percentage (75) and converts it to a decimal (0.75)
    generateDiscountPrice(discount){
        discount /= 100;
        return this.price - (this.price * discount);
    }

    // returns an array of magic items
    generateMagicItemShop(){

    }
} 

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
    // v base price v
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