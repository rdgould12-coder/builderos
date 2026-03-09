import Stripe from "stripe";

function getStripeInstance(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key === "sk_test_PLACEHOLDER" || !key.startsWith("sk_")) {
    return null;
  }
  return new Stripe(key, {
    apiVersion: "2024-12-18.acacia" as Stripe.LatestApiVersion,
    typescript: true,
  });
}

export const stripe = getStripeInstance();
