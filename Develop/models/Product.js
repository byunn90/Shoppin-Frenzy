//const  {model } = require('sequelize);

//const sequelize = require('../config/connection');

//class Product extends Model {}

Product.init(
    {
        id:{
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: String,
            allowNull: false,
        },
        price: {
            type: DECIMAL,
            allowNull: false,
        },
        stock: {
            type: INTEGER,
            allowNull: false,
        },
        category_id:{
            type: INTEGER,
            references: {
                model: 'categories',
                key: 'category_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user',
    }
);

module.exports = User;