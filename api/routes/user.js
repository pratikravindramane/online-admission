import multer from "multer";
import express from "express";
import {
  addApplication,
  document,
  getApplication,
  getNotice,
  getStatus,
  getUser,
  payment,
} from "../controllers/user.js";
import { User } from "../models/user.js";
import { Application } from "../models/application.js";
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.post("/aadhar/:id", upload.single("doc"), async (req, res) => {
  res.send(req.file);
  try {
    if (req.file) {
      const application = await Application.findOne({ userId: req.params.id });
      application.aadhar = req.file.path;
      const update = await application.save();
      res.send(update);
    }
  } catch (error) {
    // res.send(error.message);
    console.log(error.message);
  }
});
router.post("/ssc/:id", upload.single("doc"), async (req, res) => {
  res.send(req.file);
  try {
    if (req.file) {
      const application = await Application.findOne({ userId: req.params.id });
      application.ssc = req.file.path;
      const update = await application.save();
      res.send(update);
    }
  } catch (error) {
    // res.send(error.message);
    console.log(error.message);
  }
});
router.post("/hsc/:id", upload.single("doc"), async (req, res) => {
  res.send(req.file);
  try {
    if (req.file) {
      const application = await Application.findOne({ userId: req.params.id });
      application.hsc = req.file.path;
      const update = await application.save();
      res.send(update);
    }
  } catch (error) {
    // res.send(error.message);
    console.log(error.message);
  }
});
router.get("document/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const aadhar = user.aadhar;
    const hsc = user.hsc;
    const ssc = user.ssc;
    res.send({ hsc, ssc, aadhar });
  } catch (error) {}
});
router.post("/add-application", upload.single("doc"), addApplication);
router.get("/application/:id", getApplication);
router.post("/document/:id", upload.single("doc"), document);
router.get("/:id", getUser);
router.get("/notice", getNotice);
router.get("/status/:id", getStatus);
router.get("/payment/:id", payment);
export default router;
