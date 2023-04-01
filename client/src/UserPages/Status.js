import { Alert } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/User";
import Layout from "../utils/Layout";

function Status() {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState();
  const [app, setApp] = useState();
  const [theme, setTheme] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/user/application/${user._id}`
        );
        if (data.data.error) {
          setError(data.data.error);
        }
        const application = data.data.application;
        if (application.status === "pending") {
          setTheme("warning");
        } else if (application.status === "selected") {
          setTheme("success");
        } else if (application.status === "rejected") {
          setTheme("error");
        }
        setApp(application);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <Layout>
      <Alert severity={theme}>Your appliation is {app && app.status}</Alert>
    </Layout>
  );
}

export default Status;
