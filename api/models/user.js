import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, unique: true },
  phone: { type: String, require: true },
  gender: { type: String },
  dob: { type: Date },
  payment: { type: Boolean, default: false },
  fees: { type: Boolean, default: false },
});
export const User = mongoose.model("user", userSchema);
