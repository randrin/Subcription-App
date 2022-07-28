import express from "express";

const subscriptionRouter = express.Router();

import {
  prices,
  createSubscription,
  subscriptionStatus,
  subscriptions,
  customerPortal,
} from "../controllers/subcriptionContoller";
import { requireSignin } from "../middlewares";

subscriptionRouter.get("/prices", prices);
subscriptionRouter.post("/create-subscription", requireSignin, createSubscription);
subscriptionRouter.get("/subscription-status", requireSignin, subscriptionStatus);
subscriptionRouter.get("/subscriptions", requireSignin, subscriptions);
subscriptionRouter.get("/customer-portal", requireSignin, customerPortal);

module.exports = subscriptionRouter;
