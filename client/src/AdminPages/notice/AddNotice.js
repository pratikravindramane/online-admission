import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Layout from "../../utils/Layout";
import "../course/course.css";
function AddNotice() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const addHandler = async (e) => {
    e.preventDefault();
    try {
      const send = await axios.post("http://localhost:5000/admin/notice", {
        title: title,
        desc,
      });
      alert("Item Added");
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log({ title, desc });
  return (
    <Layout>
      <div className="add-course">
        <div className="add-course-container">
          <h3>Add Notice</h3>
          <form onSubmit={addHandler}>
            <TextField
              id="title"
              label="title"
              placeholder="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            <TextField
              id="desc"
              label="desc"
              placeholder="desc"
              rows={4}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <Button type="submit">Add</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddNotice;
