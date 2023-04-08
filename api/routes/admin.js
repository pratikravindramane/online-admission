import express from "express";
import {
  addCourse,
  addNotice,
  allApplication,
  createHod,
  deleteCourse,
  deleteHod,
  deleteNotice,
  getApproved,
  getCourse,
  getHod,
  getNotice,
  getOneApp,
  getPending,
  getRejected,
  getSelected,
  putStatus,
} from "../controllers/admin.js";
const router = express.Router();
router.get("/all-application", allApplication);
router.get("/application/:id", getOneApp);
router.get("/pending", getPending);
router.put("/status/:id", putStatus);
router.get("/selected", getSelected);
router.get("/rejected", getRejected);
router.get("/approved", getApproved);
router.get("/course", getCourse);
router.post("/course", addCourse);
router.delete("/course/:id", deleteCourse);
router.get("/notice", getNotice);
router.post("/notice", addNotice);
router.delete("/notice/:id", deleteNotice);
router.get("/hod", getHod);
router.post("/hod", createHod);
router.delete("/hod/:id", deleteHod);

export default router;
