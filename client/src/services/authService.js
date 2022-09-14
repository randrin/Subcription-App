import axios from "axios";
import config from "../config";
import { END_POINT_LOGIN, END_POINT_REGISTER } from "../routes/EndPoints";

export const loginSubscription = async (userLogin) => {
  return await axios.post(`${config.API_URL}${END_POINT_LOGIN}`, userLogin);
};

export const registerSubscription = async (userRegistered) => {
  return await axios.post(
    `${config.API_URL}${END_POINT_REGISTER}`,
    userRegistered
  );
};
