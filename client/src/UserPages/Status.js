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
  const [fees, setFees] = useState(false);
  const [pay, setPay] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        if (localStorage.getItem("fees")) {
          setFees(true);
        }
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
          // setPay(true);
          setTheme("success");
        } else if (application.status === "rejected") {
          setTheme("error");
        } else if (application.status === "approved") {
          setPay(true);
          setTheme("success");
        }
        setApp(application);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [user._id]);
  useEffect(() => {
    if (user.fees) {
      setFees(true);
    }
  }, [setFees, user.fees]);
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_Eq3gnPcqCuq0H8",
      amount: 30000,
      currency: "INR",
      name: "Anshuman",
      description: "Test Transaction",
      // image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          const payment = await axios.put(
            `http://localhost:5000/user/fees/${user._id}`
          );
          console.log(payment.data);
          setFees(true);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const orderUrl = "http://localhost:5000/payment/";
      const { data } = await axios.post(orderUrl, { amount: 30000 });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Layout>
      <Alert severity={theme}>Your appliation is {app && app.status}</Alert>
      <h1>Fees for 1st Year 30000rs</h1>
      {pay && !fees && (
        <>
          <button onClick={handlePayment} className="buy_btn">
            Pay Now
          </button>
        </>
      )}
      {pay && fees && <h3 style={{ color: "green" }}>Fees Paid</h3>}
    </Layout>
  );
}

export default Status;
