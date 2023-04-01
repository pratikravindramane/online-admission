import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../utils/Layout.js";
import "../AdminPages/course/course.css";
function HodContact() {
  const [conatct, setContact] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const conatcts = await axios.get("http://localhost:5000/hod/contact");
        setContact(conatcts.data);
        // console.log(conatcts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [conatct]);
  const deleteHandler = async (e) => {
    try {
      const deleteItem = await axios.delete(
        `http://localhost:5000/hod/contact/${e.target.value}`
      );
      // console.log(deleteItem);
      alert("Deleted Item");
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="course-container">
        {conatct ? (
          conatct.map((data) => (
            <div key={data._id} className="course-cards">
              <div>
                {/* <label htmlFor="">Name</label> */}
                <CardContent>Name: {data.name}</CardContent>
              </div>
              <div>
                {/* <label htmlFor="">Email</label> */}
                <CardContent>Email: {data.email}</CardContent>
              </div>
              <div>
                {/* <label htmlFor="">message</label> */}
                <CardContent>message: {data.message}</CardContent>
              </div>
              <CardActions>
                <Button size="small" value={data._id} onClick={deleteHandler}>
                  Delete
                </Button>
              </CardActions>
            </div>
          ))
        ) : (
          <p>no Querys</p>
        )}
      </div>
    </Layout>
  );
}

export default HodContact;
