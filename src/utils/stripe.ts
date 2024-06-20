import { Stripe } from "stripe";

// Function to get Stripe instance
function getStripe() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); // replace with your actual secret key
  return stripe;
}

export { getStripe };
