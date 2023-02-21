const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    customerId: { type: String },
    payment_Intent: { type: String },
    products: [],
    subtotal: { type: Number, require: true },
    total: { type: Number, require: true },
    payment_status: { type: String, require: true },
    delivery_status: { type: String, require: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;
