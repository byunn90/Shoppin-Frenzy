const { Category } = require("../models/categories");

const categoryData = [
  {
    category_name: "T-Shirts",
    filename: 't-shirt-gf49f72788_1280.png',
  },
  {
    category_name: "Shorts",
    filename: 'shorts-g4740d9de1_1920.jpg',
  },
  {
    category_name: "Pants",
    filename: 'jeans-ge44b3301f_1920.jpg',
  },
  {
    category_name: "Hats",
    filename: 'woman-g64ef1baa2_1920.jpg',
  },
  {
    category_name: "Shoes",
    filename: 'shoes-g16ac1d026_1920.jpg',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
