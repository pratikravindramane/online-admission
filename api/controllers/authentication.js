import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import Hod from "../models/hod.js";

export const register = async (req, res) => {
  const { name, email, password, phone, gender, dob } = req.body;
  if (!email || !password || !phone || !dob || !gender || !name) {
    return res.send({ error: "please fill all the details" });
  }
  console.log(gender);
  if (gender === "null") {
    return res.send({ error: "please select the proper gender" });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  if (phone.length !== 10) {
    return res.send({ error: "Phone number should be 10 digits" });
  }
  // already a user
  const user = await User.findOne({ email });
  const userByPhone = await User.findOne({ phone });
  if (user || userByPhone) {
    return res.send({ error: "Email or Phone already in use" });
  }
  try {
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const data = await newUser.save();
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.send({ error: "no user found" });
    }
    const verifyPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!verifyPassword) {
      return res.send({ error: "wrong password" });
    }
    if (verifyPassword) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          id: user._id,
        },
        process.env.JWT
      );
      return res.send({ status: "ok", token, user });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const adminLogin = async (req, res) => {
  try {
    if (req.body.password != "admin") {
      return res.send({ error: "wrong password" });
    }
    if (req.body.email == "admin@gmail.com" || req.body.email == "admin") {
      res.send({ admin: true });
    } else {
      res.send({ error: "wrong email or password" });
    }
  } catch (error) {}
};

export const hodLogin = async (req, res) => {
  try {
    const hod = await Hod.findOne({
      email: req.body.email,
    });
    if (!hod) {
      return res.send({ error: "no hod found" });
    }
    const verifyPassword = await bcrypt.compare(
      req.body.password,
      hod.password
    );
    if (!verifyPassword) {
      return res.send({ error: "wrong password" });
    }
    if (verifyPassword) {
      const token = jwt.sign(
        {
          name: hod.name,
          email: hod.email,
          id: hod._id,
        },
        process.env.JWT
      );
      return res.send({ status: "ok", token, hod });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
