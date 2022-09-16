import axios from "axios";
import config from "../config";
import {
  END_POINT_CREATE_SUBSCRIPTION,
  END_POINT_CUSTOMER_PORTAL,
  END_POINT_PRICES_SUBSCRIPTION,
  END_POINT_STATUS_SUBSCRIPTION,
  END_POINT_USER_SUBSCRIPTIONS,
} from "../routes/EndPoints";

export const getListPricesSubscription = async () => {
  return await axios.get(`${config.API_URL}${END_POINT_PRICES_SUBSCRIPTION}`);
};

export const createSubscription = async (priceId) => {
  return await axios.post(`${config.API_URL}${END_POINT_CREATE_SUBSCRIPTION}`, priceId);
};

export const getUserSubscriptions = async () => {
  return await axios.get(`${config.API_URL}${END_POINT_USER_SUBSCRIPTIONS}`);
};

export const getCustomerPortalSubscription = async () => {
  return await axios.get(`${config.API_URL}${END_POINT_CUSTOMER_PORTAL}`);
};

export const getStatusSubscription = async () => {
  return await axios.get(`${config.API_URL}${END_POINT_STATUS_SUBSCRIPTION}`);
};