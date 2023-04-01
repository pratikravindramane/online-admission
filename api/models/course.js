import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  { timestamps: true }
);
const Course = mongoose.model("course", schema);
export default Course;
