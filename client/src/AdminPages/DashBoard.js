import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Example from "../utils/example";
import Layout from "../utils/Layout";
import "./Dashboard.css";
function DashBoard() {
  return (
    <Layout>
      <div className="dashboard">
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://storage-prtl-co.imgix.net/endor/articles/2980/images/1633441351_shutterstock_101441320.jpg?max-w=660&max-h=532&fit=crop&auto=format,compress&q=40"
            alt=""
          />
          <div className="card-content">
            <h3>All Application</h3>
            <Link to="/all-application">View</Link>
          </div>
        </div>
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://thumbs.dreamstime.com/b/happy-student-thumbs-up-classroom-looking-you-classmates-background-96531919.jpg"
            alt=""
          />
          <div className="card-content">
            <h3>Selected</h3>
            <Link to="/selected">View</Link>
          </div>
        </div>

        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://uploads-ssl.webflow.com/595674410b929045cbbf9368/6062e681d4b77b2556af2aa8_Website%20Featured%20image.png"
            alt=""
          />
          <div className="card-content">
            <h3>Rejected</h3>
            <Link to="/rejected">View</Link>
          </div>
        </div>
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://th-i.thgim.com/public/news/national/937b47/article66137267.ece/alternates/FREE_1200/US_Visa_Day_3.jpg"
            alt=""
          />
          <div className="card-content">
            <h3>Pending</h3>
            <Link to="/pending">View</Link>
          </div>
        </div>
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://manavrachna.edu.in/wp-content/uploads/2019/03/mainpic.jpg"
            alt=""
          />
          <div className="card-content">
            <h3>Course</h3>
            <Link to="/course">View</Link>
          </div>
        </div>
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://media.istockphoto.com/id/1147069746/photo/teacher-hand-is-holding-pen-for-checking-student-homework-assignments-on-desk-in-school.jpg?s=612x612&w=0&k=20&c=LzWqksLfbgWU2GnX-jsSvgZ7IfOMhwZ_ijWwxV_DVHI="
            alt=""
          />
          <div className="card-content">
            <h3>Add Course</h3>
            <Link to="/add-course">View</Link>
          </div>
        </div>
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://media.istockphoto.com/id/824257280/photo/two-teenage-girls-in-high-school-hall-during-break.jpg?s=612x612&w=0&k=20&c=xQ1lQVdW2CPq-I21Zq7QvSJ0ntWaRiy8pVnrI2rVrL4="
            alt=""
          />
          <div className="card-content">
            <h3>Notice</h3>
            <Link to="/notice">View</Link>
          </div>
        </div>
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://thumbs.dreamstime.com/b/hard-working-teacher-busy-muslim-sitting-table-preparing-lesson-148337588.jpg"
            alt=""
          />
          <div className="card-content">
            <h3>Add Notice</h3>
            <Link to="/add-notice">View</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashBoard;
