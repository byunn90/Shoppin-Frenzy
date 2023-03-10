// const category_id = require("../Develop/models/categories");
// const Product = require("../Develop/models/Product");
const { Product } = require("../models/Product");

const productData = [
  {
    product_name: "Slim-Fit Jeans",
    price: 50.0,
    stock: 30,
    category_id: 1, // Category ID for Pants
  },
  {
    product_name: "Casual T-Shirt",
    price: 20.0,
    stock: 50,
    category_id: 2, // Category ID for T-Shirts
  },
  {
    product_name: "Running Shoes",
    price: 80.0,
    stock: 15,
    category_id: 4, // Category ID for Shoes
  },
  {
    product_name: "Baseball Cap",
    price: 15.0,
    stock: 100,
    category_id: 5, // Category ID for Hats
  },
  {
    product_name: "Cargo Shorts",
    price: 35.0,
    stock: 25,
    category_id: 3, // Category ID for Shorts
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
