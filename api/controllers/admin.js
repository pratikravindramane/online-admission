import { Application } from "../models/application.js";
import Course from "../models/course.js";
import Notice from "../models/notice.js";
import bcrypt from "bcrypt";
import Hod from "../models/hod.js";
export const allApplication = async (req, res) => {
  try {
    const application = await Application.find({});
    res.status(200).json(application);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};
// get perticular appliation
export const getOneApp = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    res.status(200).json(application);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};
// get pending request
export const getPending = async (req, res) => {
  try {
    const application = await Application.find({ status: "pending" });
    res.status(200).json(application);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};
// get selected request
export const getSelected = async (req, res) => {
  try {
    const application = await Application.find({ status: "selected" });
    res.status(200).json(application);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};
// get rejected request
export const getRejected = async (req, res) => {
  try {
    const application = await Application.find({ status: "rejected" });
    res.status(200).json(application);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};
// get approved request
export const getApproved = async (req, res) => {
  try {
    const application = await Application.find({ status: "approved" });
    res.status(200).json(application);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};
// update status
export const putStatus = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    application.status = req.body.status;
    const data = await application.save();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

// create Notice
export const addNotice = async (req, res) => {
  try {
    const notice = new Notice(req.body);
    const save = await notice.save();
    res.send(save);
  } catch (error) {
    res.send({ message: error });
  }
};

// get notice
export const getNotice = async (req, res) => {
  try {
    const notice = await Notice.find({});
    res.send(notice);
  } catch (error) {
    res.send({ message: error });
  }
};
// delete Notice
export const deleteNotice = async (req, res) => {
  const day = new Date().getDate() - 1;
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const prevDay = year + "-" + month + "-" + day;
  try {
    const notice = await Notice.deleteMany({ day: prevDay });
    const deleteItem = await Notice.findByIdAndDelete(req.params.id);
    res.send(notice);
  } catch (error) {
    res.send({ message: error });
  }
};

// create course
export const addCourse = async (req, res) => {
  try {
    const add = new Course(req.body);
    const save = await add.save();
    res.send(save);
  } catch (error) {
    res.send({ message: error });
  }
};

// get Course
export const getCourse = async (req, res) => {
  try {
    const course = await Course.find({});
    res.send(course);
  } catch (error) {
    res.send({ message: error });
  }
};

// delete course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.send(course);
  } catch (error) {
    res.send({ message: error });
  }
};

// create Hod
export const createHod = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send({ error: "please enter all the credentials" });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  // already a user
  const user = await Hod.findOne({ email });
  if (user) {
    return res.send({ error: "Email already in use" });
  }
  try {
    const newHod = new Hod({
      ...req.body,
      password: hash,
    });
    const data = await newHod.save();
    res.send(data);
  } catch (error) {
    res.send({ error });
  }
};
// delete hod
export const deleteHod = async (req, res) => {
  try {
    const deleteHod = await Hod.findByIdAndDelete(req.params.id);
    res.send(deleteHod);
  } catch (error) {
    res.send({ error });
  }
};
// get all hod
export const getHod = async (req, res) => {
  try {
    const getHod = await Hod.find();
    res.send(getHod);
  } catch (error) {
    res.send({ error });
  }
};
