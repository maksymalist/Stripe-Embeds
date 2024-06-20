import { Stripe } from "stripe";

// Function to get Stripe instance
function getStripe() {
  const stripe = new Stripe(""); // replace with your actual secret key
  return stripe;
}

export { getStripe };
