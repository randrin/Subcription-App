import { expressjwt } from "express-jwt";
const config = require("../config/config.js");

export const requireSignin = expressjwt({
  secret: config.JWT_SECRET,
  algorithms: ["HS256"],
});
