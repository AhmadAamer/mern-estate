import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //   console.log(req.body);
  const { username, password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword, email });
  try {
    await newUser.save();
    res.status(201).json("user created successfully ");
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const signin = async (req, res, next) => {
  //to get email and password from the body ..
  const { email, password } = req.body;
  //to check if this email exists..
  const validUser = await User.findOne({ email });
  if (!validUser) next(errorHandler(404, "user not found"));
  //now to compare password ...
  const validPass = bcrypt.compareSync(password, validUser.password);
  if (!validPass) next(errorHandler(401, "wrong credentials"));
  const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
  const { password: pass, ...rest } = validUser._doc;
  res
    .cookie("access-token", token, { httpOnly: true })
    .status(200)
    .json({ rest });
  try {
  } catch (error) {
    next(error);
  }
};
