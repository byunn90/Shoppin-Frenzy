const router = require("express").Router();
const products = require("./products");
const category = require("./categories");
const categoryDropdown = require("./categoryDropdown");

const user = require("./userRoutes");
router.use("/products", products);
router.use("/category", category);
router.use("/users", user);
router.use("/categoryDropdown", categoryDropdown);

module.exports = router;
