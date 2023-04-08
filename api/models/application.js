import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema(
  {
    profile: { type: String, require: true },
    userId: { type: String, require: true, unique: true },
    email: { type: String },
    name: { type: String, require: true },
    course: { type: String, require: true },
    category: { type: String, require: true },
    lName: { type: String },
    fName: { type: String },
    gender: { type: String, require: true },
    dob: { type: Date, require: true },
    nationality: { type: String, require: true },
    address: { type: String },
    tenUni: { type: String },
    tenYear: { type: String },
    tenPer: { type: String },
    twelveUni: { type: String },
    twelveYear: { type: String },
    twelvePer: { type: String },
    status: { type: String, default: "pending" },
    mathMark: { type: Number },
    ssc: { type: String },
    hsc: { type: String },
    aadhar: { type: String },
  },
  { timestamps: true }
);
export const Application = mongoose.model("application", applicationSchema);
