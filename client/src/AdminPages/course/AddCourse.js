import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Layout from "../../utils/Layout";

function AddCourse() {
  const [course, setCourse] = useState();

  // const [msg, setMsg] = useState();
  const addHandler = async (e) => {
    e.preventDefault();
    try {
      const send = await axios.post("http://localhost:5000/admin/course", {
        title: course,
      });
      alert("Course Added");
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="add-course">
        <div className="add-course-container">
          <h3>Add Course</h3>
          <form onSubmit={addHandler}>
            <TextField
              id="title"
              label="course"
              placeholder="course"
              onChange={(e) => setCourse(e.target.value)}
            />
            <Button type="submit">Add</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddCourse;
