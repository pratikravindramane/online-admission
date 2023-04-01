import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    message: { type: String, require: true },
  },
  { timestamps: true }
);
const Contact = mongoose.model("contact", schema);
export default Contact;
