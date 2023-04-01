import express from "express";
import {
  register,
  login,
  logout,
  adminLogin,
  hodLogin,
} from "../controllers/authentication.js";
const route = express.Router();
route.post("/register", register);
route.post("/login", login);
route.post("/admin", adminLogin);
route.post("/hod", hodLogin);

export default route;
