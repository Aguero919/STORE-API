const express = require("express");
const router = express.Router();

const { getAllProductsStatic, getAllProducts } = require("../controllers/products");

router.route("/static").post(getAllProductsStatic);
router.route("/").post(getAllProducts);

module.exports = router;