import axios from "axios";
import config from "../config";

export const getListPricesSubscription = async () => {
  return await axios.get(`${config.API_URL}/prices`);
};
