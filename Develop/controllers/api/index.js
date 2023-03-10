const router = require("express").Router();
const products = require("./products");

router.use("/products", products);

module.exports = router;
