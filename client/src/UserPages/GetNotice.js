import { CardContent } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../utils/Layout";

function GetNotice() {
  const [error, setError] = useState();
  const [notice, setNotice] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get(`http://localhost:5000/admin/notice/`);
        if (data.data.error) {
          setError(data.data.error);
        }
        const notices = data.data;
        setNotice(notices);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <Layout>
      <div className="course-container">
        {notice &&
          notice.map((data) => (
            <div key={data._id} className="course-cards">
              <h2 className="notice-title">Title - {data.title}</h2>
              <p className="notice-desc">{data.desc}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default GetNotice;
