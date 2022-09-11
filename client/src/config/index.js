import dotenv from "dotenv";

dotenv.config();

const config = {
  API_URL: process.env.REACT_APP_API_URL,
  STRIPE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
  API_CURRENCIES: process.env.REACT_APP_API_CURRENCIES,
};
export default config;
