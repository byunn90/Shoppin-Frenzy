// const express = require("express");
const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", async (req, res) => {
  //   try {
  console.log("Hi");
  const products = await Product.findAll({
    include: [{ model: Category }],
  });
  res.status(200).json(products);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("Hi");
    const products = await Product.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Category }],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
