import React, { useContext, useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import { decodeToken } from "react-jwt";
import axios from "axios";
import { AuthContext } from "../../context/User";
import { Link } from "react-router-dom";
function Profile() {
  // const [user, setUser] = useState();
  const { user } = useContext(AuthContext);
  return (
    <Layout>
      <div className="dashboard">
        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://storage-prtl-co.imgix.net/endor/articles/2980/images/1633441351_shutterstock_101441320.jpg?max-w=660&max-h=532&fit=crop&auto=format,compress&q=40"
            alt=""
          />
          <div className="card-content">
            <h3> Application</h3>
            <Link to="/application">View</Link>
          </div>
        </div>

        <div sx={{ maxWidth: 345 }} className="dash-card">
          <img
            src="https://media.istockphoto.com/id/1147069746/photo/teacher-hand-is-holding-pen-for-checking-student-homework-assignments-on-desk-in-school.jpg?s=612x612&w=0&k=20&c=LzWqksLfbgWU2GnX-jsSvgZ7IfOMhwZ_ijWwxV_DVHI="
            alt=""
          />
          <div className="card-content">
            <h3>Documents</h3>
            <Link to="/document">View</Link>
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
            <h3>Status</h3>
            <Link to="/status">View</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
