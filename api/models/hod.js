import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);
const Hod = mongoose.model("hod", schema);
export default Hod;
