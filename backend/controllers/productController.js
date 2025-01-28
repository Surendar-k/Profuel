const Product = require("../models/productModels");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

exports.getProductByGoal = async (req, res) => {
  try {
    const goal = req.params.goal;
    const products = await Product.find({ goal: goal });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products by goal" });
  }
};
