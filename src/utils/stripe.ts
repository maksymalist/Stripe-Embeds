import { Stripe } from "stripe";
import { env } from "../env";

// Function to get Stripe instance
function getStripe() {
  const stripe = new Stripe(env.STRIPE_SECRET_KEY); // replace with your actual secret key
  return stripe;
}

export { getStripe };
