import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../utils/Layout";
import "./course.css";
function Course() {
  const [course, setCourse] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get("http://localhost:5000/admin/course");
        setCourse(data.data);
        // console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [course]);

  const deleteHandler = async (e) => {
    try {
      const deleteItem = await axios.delete(
        `http://localhost:5000/admin/course/${e.target.value}`
      );
      console.log(deleteItem);
      alert("Deleted Successfullty");
      navigate("/course");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="course-container">
        {course &&
          course.map((data) => (
            <div key={data._id} className="course-cards">
              <CardContent>{data.title}</CardContent>
              <CardActions>
                <Button size="small" value={data._id} onClick={deleteHandler}>
                  Delete
                </Button>
              </CardActions>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default Course;
