import express from "express";
import {
  createContact,
  deleteContact,
  getContact,
} from "../controllers/hod.js";
const route = express.Router();
route.post("/contact", createContact);
route.get("/contact", getContact);
route.delete("/contact/:id", deleteContact);

export default route;
