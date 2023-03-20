const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", async (req, res) => {
  try {
    console.log("Hi");
    const category = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
