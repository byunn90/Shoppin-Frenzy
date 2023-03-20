const { Category } = require("./categories");
const { Product } = require("./Product");
const User = require("./User");

//Categories
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "cascade",
});

module.exports = { Category, Product, User };
