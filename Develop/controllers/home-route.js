const router = require("express").Router();
const { Product, Category } = require("../models");
router.get("/", async (req, res) => {
  try {
    console.log("Hi");
    const products = await Product.findAll({
      include: [{ model: Category }],
    });
    // Serialize data so the template can read it
    const productsData = products.map((project) =>
      project.get({ plain: true })
    );
    res.render("home", {
      products: productsData,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
