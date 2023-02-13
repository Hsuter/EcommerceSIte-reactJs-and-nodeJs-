const express = require("express");
const Stripe = require("stripe");
const { Order } = require("../models/order");

require("dotenv").config();

const router = express.Router();

const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "kes",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.desc,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cartQuantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    line_items,
    mode: "payment",
    success_url: `${process.env.CART_URL}/checkout-success`,
    cancel_url: `${process.env.CART_URL}/cart`,
  });

  res.send({ url: session.url });
});

//create order
createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: customer.id,
    payment_Intent: data.payment_intent,
    products: Items,
    subtotal: data.amount_total / 100,
    total: data.amount_total / 100,
    payment_status: data.payment_status,
    delivery_status: data.delivery_status,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Proccessed Order", savedOrder);
    //email
  } catch (err) {
    console.log(err.message);
  }
};

//stripe webhook

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;

endpointSecret =
  "whsec_032b673bd7d503d628fb73c86fc372b964b577793f3400339e56de16070c2b18";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    let data;
    let eventType;

    if (endpointSecret) {
      let event;

      try {
        event = stripe.webhooks.constructEvent(
          req.rawBody,
          sig,
          endpointSecret
        );
        console.log("Webhook received:", event.id);
      } catch (err) {
        console.log(
          `⚠️  Webhook signature verification failed. ${err.message}`
        );

        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }

      data = event.data.object;
      eventType = event.type;
    } else {
      console.log(
        "No endpoint secret provided, skipping signature verification"
      );
    }

    // Handle the event

    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          console.log(customer);
          console.log("data:", data);
          createOrder(customer, data);
        })
        .catch((err) => console.log(err.message));
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send().end();
  }
);

module.exports = router;
