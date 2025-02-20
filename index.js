const express = require('express');
const session = require("express-session");
const passport = require('passport');
const dotenv = require('dotenv');
const dbConnection = require('./models/dbConnection');
const importedRoutes = require('./routes/routes');
const registerControllers = require('./controllers/registerController');
const controllers = require('./controllers/controllers');
const localStrategy = require('./strategy/local-strategy');
const matchHistoryController = require('./controllers/matchHistoryController')
const galleryController = require('./controllers/galleryController');
const deleteController = require('./controllers/deleteController');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SESSION_SECRET || "mySecret",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

dbConnection();

app.use(importedRoutes);
app.use(registerControllers);
app.use(controllers);
app.use(matchHistoryController);
app.use(galleryController);
app.use(deleteController);

const razorpay = new Razorpay({
  key_id: process.env.keyId,
  key_secret: process.env.keySecret,
});

// Create order
app.post("/create-order", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const options = {
      amount: amount * 100, // Razorpay requires amount in paise
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});


// Verify payment
app.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const secret = process.env.keySecret;
  const generated_signature = crypto
    .createHmac("sha256", secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature === razorpay_signature) {
    res.json({ status: "ok" });
  } else {
    res.status(400).json({ status: "failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
