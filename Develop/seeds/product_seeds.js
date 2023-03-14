// const category_id = require("../Develop/models/categories");
// const Product = require("../Develop/models/Product");
const { Product } = require("../models/Product");

const productData = [
  {
    product_name: "Slim-Fit Jeans",
    price: 50.0,
    stock: 30,
    category_id: 1, // Category ID for Pants
    filename: "slim-fit-jeans.jpg",
    description:
      "They are designed to be form-fitting and are often made with a stretchy material for added comfort.",
  },
  {
    product_name: "Casual T-Shirt",
    price: 20.0,
    stock: 50,
    category_id: 2, // Category ID for T-Shirts
    filename: "casual-t-shirt.jpg",
    description:
      "cotton-blend fabric. It usually has short sleeves and a simple design or graphic, and is perfect for everyday wear.",
  },
  {
    product_name: "Running Shoes",
    price: 80.0,
    stock: 15,
    category_id: 4, // Category ID for Shoes
    filename: "running-shoes.jpg",
    description:
      "athletic footwear that are designed for running and other physical activities. They typically have features like cushioning.",
  },
  {
    product_name: "Baseball Cap",
    price: 15.0,
    stock: 100,
    category_id: 5, // Category ID for Hats
    filename: "cap.jpg",
    description:
      "casual accessory, particularly in outdoor or sports settings, and can be made from a variety of materials like cotton, wool, or synthetic fabrics.",
  },
  {
    product_name: "Cargo Shorts",
    price: 35.0,
    stock: 25,
    category_id: 3, // Category ID for Shorts
    filename: "cargo-shorts.jpg",
    description:
      "Cargo shorts They are typically made from durable materials like cotton or canvas, and are designed for outdoor activities or casual wear.",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
