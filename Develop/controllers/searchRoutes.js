const router = require("express").Router();
const { Op } = require("sequelize");
const { Category, Product } = require("../models");

router.get("/", async (req, res) => {
  const { query } = req.query;

  try {
    const products = await Product.findOne({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      },
      include: [Category],
    });

    res.render("search-results", { products, query });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
