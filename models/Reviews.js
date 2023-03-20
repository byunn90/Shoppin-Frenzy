const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "product_id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "review",
  }
);

module.exports = Review;
