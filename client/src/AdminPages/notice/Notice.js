import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import "../course/course.css";
function Notice() {
  const [notice, setNotice] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const notice = await axios.get("http://localhost:5000/admin/notice");
        setNotice(notice.data);
        // console.log(notice.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [notice]);
  const deleteHandler = async (e) => {
    try {
      const deleteItem = await axios.delete(
        `http://localhost:5000/admin/notice/${e.target.value}`
      );
      console.log(deleteItem);
      alert("Deleted Item");
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="course-container">
        {notice &&
          notice.map((data) => (
            <div key={data._id} className="course-cards">
              <h2 className="notice-title">Title - {data.title}</h2>
              <p className="notice-desc">{data.desc}</p>
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

export default Notice;
