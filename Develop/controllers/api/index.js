const router = require("express").Router();
const products = require("./products");
const category = require("./categories")

router.use("/products", products);
router.use("/category", category);

module.exports = router;
