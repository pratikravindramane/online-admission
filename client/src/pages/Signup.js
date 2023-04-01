import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { Link, useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function SignUp() {
  const [gender, setGender] = useState("");
  const [cred, setCred] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        ...cred,
        gender: gender,
      });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandler = (e) => {
    setCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(cred);
  };
  React.useEffect(() => {
    if (localStorage.getItem("token") || localStorage.getItem("admin")) {
      localStorage.clear();
    }
  }, []);
  console.log(gender);
  return (
    <>
      <Nav />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="box-signin">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div>
                <div className="form-flex">
                  <div className="lable-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={changeHandler} />
                  </div>
                  <div className="lable-input">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      id="phone"
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="lable-input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    onChange={changeHandler}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
                  />
                </div>
                <div className="lable-input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-flex">
                  <div className="lable-input">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                      defaultValue=""
                    >
                      <option selected value="null">
                        Select Your Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="lable-input">
                    <label htmlFor="dob">Date of brith</label>
                    <input
                      type="date"
                      max="2003-01-01"
                      id="dob"
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>
              <button type="submit">Sign Up</button>
              <Link to="/login">Already have an account? Sign in</Link>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
