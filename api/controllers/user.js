import { Application } from "../models/application.js";
import Notice from "../models/notice.js";
import { User } from "../models/user.js";

// get applciation
export const getApplication = async (req, res) => {
  try {
    const application = await Application.findOne({ userId: req.params.id });
    res.send({ application });
  } catch (error) {
    res.send({ error: error.message });
  }
};
// add application
export const addApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    const {
      name,
      course,
      category,
      lName,
      fName,
      gender,
      dob,
      nationality,
      tenUni,
      tenYear,
      tenPer,
      twelveUni,
      twelveYear,
      twelvePer,
      mathMark,
    } = req.body;
    console.log(req.body);

    if (
      !name ||
      !lName ||
      !fName ||
      !dob ||
      !nationality ||
      !tenUni ||
      !tenYear ||
      !tenPer ||
      !twelveUni ||
      !twelveYear ||
      !twelvePer
    ) {
      return res.send({ error: "please fill all the credentials" });
    }
    if (!gender) {
      return res.send({ error: "please select your gender" });
    } else if (!category) {
      return res.send({ error: "please select your caste" });
    } else if (!course) {
      return res.send({ error: "please select your course" });
    }
    if (course === "BScIT" && !mathMark) {
      return res.send({ error: "please select your course" });
    }
    if (twelvePer > 100 || tenPer > 100) {
      return res.send({ error: "please enter the proper percentage" });
    }

    const response = await application.save();
    res.send({
      message: "Send successfully",
      application: response,
    });
  } catch (error) {
    res.send(error.message);
  }
};

//upload documents
export const document = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (req.file) {
      user.doc.push(req.file.path);
    }
    await user.save();
    res.send({ message: "Uploaded successfully", user: user });
  } catch (error) {
    res.send({ error: error });
    console.log(error);
  }
};
// GET USER
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send({ message: "user found", user: user });
  } catch (error) {
    res.send({ error: error });
    console.log(error);
  }
};

// GET NOTICE
export const getNotice = async (req, res) => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const currentDay = year + "-" + month + "-" + day;
  try {
    const notice = await Notice.find({ day: currentDay });
    res.send(notice);
  } catch (error) {
    res.send({ error: error });
  }
};

// GET STATUS
export const getStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send({ status: user.status });
  } catch (error) {
    res.send({ error: error });
    console.log(error);
  }
};

// payment
export const payment = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: { payment: true },
    });
    res.send(user);
  } catch (error) {
    res.send({ error: error });
  }
};