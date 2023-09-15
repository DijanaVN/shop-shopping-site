import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import helmet from "helmet";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: `${process.env.CLIENT_URL}`,
//     changeOrigin: true,
//   })
// );

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "", {
  apiVersion: "2023-08-16",
});
// app.get("/api/get-publishable-key", (req, res) => {
//   const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
//   res.json({ publishableKey });
// });

app.post("/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.lineItems,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.CLIENT_URL}/success`, //
      cancel_url: `${process.env.CLIENT_URL}/cancel`, //
    });
    return res.status(201).json(session);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return res.status(500).json(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// try {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID, //
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${process.env.CLIENT_URL}/success`, //
//     cancel_url: `${process.env.CLIENT_URL}/cancel`, //
//   });
//   res.json({ url: session.url });
// } catch (error) {
//   console.error("Error creating checkout session:", error);
//   res
//     .status(500)
//     .json({ error: "An error occurred while creating the session" });
// }
