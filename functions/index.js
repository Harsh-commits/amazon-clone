const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I6bTCDEkoJxRrwcLv0LocPNYwfsm6fj5HvxToDExEqOA0ZYKCGXfprmH7pGsZmLuAkHYk9sCaIsUeFBwjVHpshA00tlJ9Vta9"
);

// API

// ~ App Config
const app = express();

// ~ Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// ~ API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  var totalAmount = Math.round(total);

  console.log(
    "Payment request recieved Boom!!! for this amount >>>",
    totalAmount
  );

  const paymentIntent = await stripe.paymentIntents.create({
    description: "Product payment",
    shipping: {
      name: "Harsh KUmar",
      address: {
        line1: "Janakpuri",
        postal_code: "822102",
        city: "Daltonganj",
        state: "Jharkhand",
        country: "India",
      },
    },
    amount: totalAmount, //subunits of currency
    currency: "INR",
    payment_method_types: ["card"],
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// ~ Listen command

exports.api = functions.https.onRequest(app);

// example
// http://localhost:5001/challenge-c8594/us-central1/api
