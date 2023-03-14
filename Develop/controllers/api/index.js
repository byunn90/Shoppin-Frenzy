const router = require("express").Router();
const products = require("./products");
const category = require("./categories");

const user = require("./userRoutes");
router.use("/products", products);
router.use("/category", category);
router.use("/users", user);

module.exports = router;
