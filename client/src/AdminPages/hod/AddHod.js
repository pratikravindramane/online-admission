import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Layout from "../../utils/Layout";
import "../course/course.css";
function AddHod() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      const send = await axios.post("http://localhost:5000/admin/hod", {
        name,
        email,
        password: pass,
      });
      if (send.data.error) {
        setError(send.data.error);
      }
      console.log(send);
      if (!send.data.error) {
        alert("HOD Added");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log({ name, email, pass });
  return (
    <Layout>
      <div className="add-course">
        <div className="add-course-container">
          <h3>Add Coordinator</h3>
          {error && error}
          <form onSubmit={addHandler}>
            <div className="lable-input">
              <input
                id="name"
                label="name"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="lable-input">
              <input
                id="email"
                label="email"
                placeholder="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
                rows={4}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="lable-input">
              <input
                id="password"
                label="password"
                placeholder="password"
                type={"password"}
                rows={4}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <Button type="submit">Add</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddHod;
