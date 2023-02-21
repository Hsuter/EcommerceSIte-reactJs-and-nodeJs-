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
    },
  });
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "kes",
        product_data: {
          name: item.name,
          images: [item.image.url],
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
    payment_method_types: ["card"],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.CART_URL}/checkout-success`,
    cancel_url: `${process.env.CART_URL}/cart`,
  });

  // res.redirect(303, session.url);
  res.send({ url: session.url });
});

//create order
const createOrder = async (customer, data, lineItems) => {
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: lineItems.data,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    payment_status: data.payment_status,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order:", savedOrder);
  } catch (err) {
    console.log(err);
  }
};

//stripe webhook

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;

//endpointSecret =
//"whsec_032b673bd7d503d628fb73c86fc372b964b577793f3400339e56de16070c2b18";

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
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the event

    if (eventType === "checkout.session.completed") {
      console.log("completed");
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          stripe.checkout.sessions.listLineItems(
            data._id,
            console.log("data._id", data._id),
            {},
            function (err, lineItems) {
              console.log("lineItems", lineItems);
              createOrder(customer, data, lineItems);
            }
          );
        })
        .catch((err) => console.log(err.message));
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send().end();
  }
);

module.exports = router;
