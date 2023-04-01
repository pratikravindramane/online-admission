import { Button, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/application";
import Layout from "../../utils/Layout";
import emailjs from "@emailjs/browser";
import "./ViewApp.css";
function ViewApp() {
  const { id } = useContext(AppContext);
  const [app, setApp] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const form = useRef();
  useEffect(() => {
    const fetch = async () => {
      try {
        const fetching = await axios.get(
          `http://localhost:5000/admin/application/${id}`
        );
        setApp(fetching.data);

        if (fetching.data.error) {
          alert(fetch.data.error);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, [id]);

  const submitHandler = async (e) => {
    try {
      const data = await axios.put(`http://localhost:5000/admin/status/${id}`, {
        status: status,
      });
      emailjs
        .sendForm(
          "service_7xopafq",
          "template_rvnusg5",
          form.current,
          "qE3vKuQtV9hkmjpEk"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log(data.data);
      alert("successfully Updated");
      navigate("/all-application");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(form.current);
  console.log(status);
  return (
    <Layout>
      {app && (
        <form className="view-app" onSubmit={submitHandler}>
          <div className="container">
            <div>
              <h5>Full Name</h5>
              <p>
                {app.name} {app.fName} {app.lName}
              </p>
            </div>
            <div>
              <h5>Course</h5>
              <p>
                {app.course}
                {app.mathMark && <p>Math = {app.mathMark}</p>}
              </p>
            </div>
            <div>
              <h5>Category</h5>
              <p>{app.category}</p>
            </div>
          </div>
          <div className="container">
            <div>
              <h5>Gender</h5>
              <p>{app.gender}</p>
            </div>
            <div>
              <h5>Date of Birth</h5>
              <p>{app.dob}</p>
            </div>
            <div>
              <h5>address</h5>
              <p>{app.address}</p>
            </div>
          </div>
          <div className="container">
            <div>
              <h5>10 University</h5>
              <p>{app.tenUni}</p>
            </div>
            <div>
              <h5>10 Year</h5>
              <p>{app.tenYear}</p>
            </div>
            <div>
              <h5>10 Percentage</h5>
              <p>{app.tenPer} %</p>
            </div>
          </div>
          <div className="container">
            <div>
              <h5>12 University</h5>
              <p>{app.twelveUni}</p>
            </div>
            <div>
              <h5>12 Year</h5>
              <p>{app.twelveYear}</p>
            </div>
            <div>
              <h5>12 Percentage</h5>
              <p>{app.twelvePer} %</p>
            </div>
          </div>
          <div className="img-container">
            <div>
              <h5>Aadhar Card</h5>
              <img
                src={`http://localhost:5000/${app.aadhar}`}
                alt={app.aadhar}
              />
            </div>
            <div>
              <h5>Ssc result</h5>
              <img src={`http://localhost:5000/${app.ssc}`} alt={app.ssc} />
            </div>
            <div>
              <h5>Hsc result</h5>
              <img src={`http://localhost:5000/${app.hsc}`} alt={app.hsc} />
            </div>
          </div>
          <div>
            <p>Status</p>
            <TextField
              id="status"
              select
              label={app.status}
              helperText="Please select your Race"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              className="select"
            >
              <MenuItem value="selected" id="selected">
                Selected
              </MenuItem>
              <MenuItem value="rejected" id="rejected">
                Rejected
              </MenuItem>
              <MenuItem value="Pending" id="Pending">
                Pending
              </MenuItem>
            </TextField>
            <form ref={form} className="form-hide">
              <label>Name</label>
              <input type="text" name="user_name" value={app && app.name} />
              <label>Email</label>
              <input type="email" name="user_email" value={app && app.email} />
              <label>Message</label>
              <textarea
                name="message"
                value={`Your application is ${status}`}
              />
            </form>
            <Button onClick={submitHandler}>Edit</Button>
          </div>
        </form>
      )}
    </Layout>
  );
}

export default ViewApp;
