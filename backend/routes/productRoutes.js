const express = require("express");
const router = express.Router();
const { getAllProducts, getProductByGoal } = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/:goal", getProductByGoal);

module.exports = router;
