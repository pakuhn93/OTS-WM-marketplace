const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config');

// initialize the class User and give it a class method
class User extends Model {
    checkPassword(password){
        return bcrypt.compareSync(password, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { // password must be at least 8 characters long
            len: [8]
        }
    }
},
{ 
    // before the password is made or updated, it will be encrypted so that the only person that knows its actual value is the user
    hooks: { 
        beforeCreate: async (data) => {
            data.password = await bcrypt.hash(data.password, 25);
            return data;
        },
        beforeUpdate: async (data) => {
            data.password = await bcrypt.hash(data.password, 25);
            return data;
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'user'
});

module.exports = User;