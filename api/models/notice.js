import mongoose from "mongoose";
const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const currentDay = year + "-" + month + "-" + day;
const schema = mongoose.Schema(
  {
    title: { type: String, require: true },
    desc: { type: String, require: true },
    day: { type: String, default: currentDay },
  },
  { timestamps: true }
);
const Notice = mongoose.model("notice", schema);
export default Notice;
