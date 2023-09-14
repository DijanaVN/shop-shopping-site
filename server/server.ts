import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import helmet from "helmet";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // This allows cookies to be sent cross-origin
  })
);
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: [
        "'self'",
        "http://localhost:3000", // Assuming your project is running locally
        "data:",
      ], // Add the URL to your font source here
      // Add other CSP directives as needed
    },
  })
);
app.use(
  "/api",
  createProxyMiddleware({ target: "http://localhost:3000", changeOrigin: true })
);

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "", {
  apiVersion: "2023-08-16",
});
app.get("/api/get-publishable-key", (req, res) => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY; // Replace with your actual environment variable name
  res.json({ publishableKey });
});

// Define a route to create a checkout session
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID, // Replace with the actual product price ID
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`, // Redirect URL after successful payment
      cancel_url: `${process.env.CLIENT_URL}/cancel`, // Redirect URL after payment cancellation
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the session" });
  }
});

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
