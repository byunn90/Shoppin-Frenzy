const { Category } = require("../models/categories");

const categoryData = [
  {
    category_name: "T-Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Pants",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
