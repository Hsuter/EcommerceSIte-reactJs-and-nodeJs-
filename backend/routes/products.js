const express = require("express");
const cloudinary = require("../utils/cloudinary");
const { Product } = require("../models/product");
const { isAdmin } = require("../middleware/auth");

const router = express.Router();

//create a new product

router.post("/", isAdmin, async (req, res) => {
  const { name, desc, price, image, category, gender, age } = req.body;

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
          gender,
          age,
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
  const { category, gender, age } = req.query;
  let query = {};

  if (category) {
    query.category = category;
  }

  if (gender) {
    query.gender = gender;
  }

  if (age) {
    query.age = age;
  }

  try {
    const products = await Product.find(query);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
