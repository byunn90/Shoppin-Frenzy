// const express = require("express");
const router = require("express").Router();
const { Category, Product } = require("../../models");
// const { Product } = require("../../models/Product");
// Define the route for rendering the main.handlebars file
// router.get("/", (req, res) => {
//   res.render("empty");
// });

router.get("/", async (req, res) => {
  //   try {
  console.log("Hi");
  const category = await Category.findAll({
    include: [{ model: Product }],
  });
  res.status(200).json(category);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
});
module.exports = router;
