import { loadStripe } from "@stripe/stripe-js";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
