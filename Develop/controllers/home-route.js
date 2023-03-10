const router = require("express").Router();
const { Product, Category } = require("../models");
router.get("/", async (req, res) => {
  //   try {
  //   console.log("Hi");
  const products = await Product.findAll({
    include: [{ model: Category }],
  });
  // Serialize data so the template can read it
  const productsData = products.map((project) => project.get({ plain: true }));
  res.render("home", { products: productsData });
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
});

// router.get("/categories", async (req, res) => {
//   //   try {
//   console.log("Hi");
//   const products = await Product.findAll({
//     include: [{ model: Category }],
//   });
//   res.status(200).json(products);
//   //   } catch (error) {
//   //     res.status(500).send(error);
//   //   }
// });

// Has not been completed yet!
// router.get("/reviews", async (req, res) => {
//   //   try {
//   console.log("Hi");
//   const products = await Product.findAll({
//     include: [{ model: Category }],
//   });
//   res.status(200).json(products);
//   //   } catch (error) {
//   //     res.status(500).send(error);
//   //   }
// });

module.exports = router;
