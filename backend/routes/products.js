const express = require("express");
const cloudinary = require("../utils/cloudinary");
const { Product } = require("../models/product");

const router = express.Router();

//create a new product

router.post("/", async (req, res) => {
  const { name, desc, price, image, category } = req.body;

  try {
    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image, {
        upload_preset: "naxyshop",
      });

      if (uploadedResponse) {
        const product = new Product({
          name,
          desc,
          price,
          image: uploadedResponse,
          category,
        });

        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.findById();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
