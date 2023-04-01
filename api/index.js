import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authentication.js";
import adminRoute from "./routes/admin.js";
import userRoute from "./routes/user.js";
import paymentRouter from "./routes/payment.js";
import hodRoute from "./routes/hod.js";
dotenv.config();
const app = express();

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO);
    mongoose.connection.on("connected", () => {
      console.log("connected to db");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("disconnected to db");
    });
  } catch (error) {
    console.log(error.message);
  }
};
mongoose.set("strictQuery", false);
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/hod", hodRoute);
app.use("/uploads", express.static("./uploads"));
app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/payment", paymentRouter);
// app.use("/mail", mailRouter);

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
  connect();
});
