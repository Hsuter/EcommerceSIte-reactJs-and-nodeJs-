const express = require("express");
const cloudinary = require("../utils/cloudinary");
const { Product } = require("../models/product");

const router = express.Router();

//create a new product

router.post("/", async (req, res) => {
  const { name, desc, price, category, image } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "naxyshop",
      });
      if (uploadRes) {
        const newProduct = new Product({
          name,
          desc,
          price,
          category,
          image: uploadRes,
        });
        const savedProduct = await newProduct.save();
        res.status(200).send(savedProduct);
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
