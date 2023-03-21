const router = require("express").Router();
const products = require("./products");
const category = require("./categories");
const dropDown = require("./categoryDropDown");

const user = require("./userRoutes");
router.use("/products", products);
router.use("/", category);
router.use("/users", user);
router.use("/", dropDown);

module.exports = router;
