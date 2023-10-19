import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "", {
  apiVersion: "2023-10-16",
});

export const handlerFunction = async (event, context) => {
  try {
    const { body } = event;
    const lineItems = JSON.parse(body).lineItems;

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    return {
      statusCode: 201,
      body: JSON.stringify(session),
    };
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
