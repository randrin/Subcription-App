import User from "../models/userModel";
import { hashPassword, comparePassword } from "../helpers/authHelper";
import jwt from "jsonwebtoken";
const config = require("../config/config.js");
const stripe = require("stripe")(config.STRIPE_SECRET_KEY);

export const authRegister = async (req, res) => {
  try {
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be 6 characters long",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);

    // create account in stripe
    const customer = await stripe.customers.create({
      email,
    });
    // console.log("stripe customer created on signup", customer);

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
        stripe_customer_id: customer.id,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRED,
      });

      //   console.log(user);
      const { password, ...rest } = user._doc;
      return res.status(200).json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

export const authLogin = async (req, res) => {
  try {
    // check email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        error: "No user found",
      });
    }
    // check password
    const match = await comparePassword(req.body.password, user.password);
    if (!match) {
      return res.status(400).json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRED,
    });

    const { password, ...rest } = user._doc;

    res.status(200).json({
      token,
      user: rest,
    });
  } catch (err) {
    console.log(err);
  }
};
