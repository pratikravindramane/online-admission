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
  const [amount, setAmount] = useState();
  const [text, setText] = useState();
  const [feeText, setFeeText] = useState(false);
  const [installment, setInstallment] = useState();
  const [installName, setInstallName] = useState();
  const [fetchUser, setFetchUser] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const users = await axios.get(`http://localhost:5000/user/${user._id}`);
        setFetchUser(users.data.user);
        console.log(users.data.user.finstall);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
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
        if (!application) {
          setTheme("warning");
          setText("Please Fill the Application to get your Status");
        }
        if (application.status === "pending") {
          setTheme("warning");
        } else if (application.status === "selected") {
          // setPay(true);
          setTheme("success");
        } else if (application.status === "rejected") {
          setTheme("error");
        } else if (application.status === "approved") {
          setFeeText(true);
          if (application.course === "BScIT") {
            if (!user.finstall) {
              setInstallment("First");
              setInstallName("finstall");
              setAmount("15000");
            } else if (!user.sinstall) {
              setInstallment("Second");
              setInstallName("sinstall");
              setAmount("10000");
            } else if (!user.tinstall) {
              setInstallment("Third");
              setInstallName("tinstall");
              setAmount("7500");
            } else {
              setFees(true);
              setFeeText(false);
            }
            // setAmount("32570");
          } else if (application.course === "BScCS") {
            if (!user.finstall) {
              setInstallName("finstall");
              setInstallment("First");
              setAmount("15000");
            } else if (!user.sinstall) {
              setInstallName("sinstall");
              setInstallment("Second");
              setAmount("9900");
            } else if (!user.tinstall) {
              setInstallment("Third");
              setInstallName("tinstall");
              setAmount("9000");
            } else {
              setFeeText(false);
              setFees(true);
            }
            // setAmount("33900");
          } else if (application.course === "BMS") {
            if (!user.finstall) {
              setInstallName("finstall");
              setInstallment("First");
              setAmount("18000");
            } else if (!user.sinstall) {
              setInstallment("Second");
              setInstallName("sinstall");
              setAmount("8000");
            } else if (!user.tinstall) {
              setInstallment("Third");
              setInstallName("tinstall");
              setAmount("7200");
            } else {
              setFeeText(false);
              setFees(true);
            }
          } else if (application.course.include("BAF")) {
            if (!user.finstall) {
              setInstallName("finstall");
              setInstallment("First");
              setAmount("13000");
            } else if (!user.sinstall) {
              setInstallName("sinstall");
              setInstallment("Second");
              setAmount("8760");
            } else if (!user.tinstall) {
              setInstallment("Third");
              setInstallName("tinstall");
              setAmount("5340");
            } else {
              setFeeText(false);
              setFees(true);
            }
          }
          setPay(true);
          setTheme("success");
        }
        setApp(application);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [amount, user.finstall, user.sinstall, user.tinstall, user._id]);
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_Eq3gnPcqCuq0H8",
      amount: amount,
      currency: "INR",
      name: "Payment Gateway",
      description: "Test Transaction",
      // image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          const payment = await axios.put(
            `http://localhost:5000/user/install/${user._id}`,
            { install: installName }
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
      const { data } = await axios.post(orderUrl, { amount: amount });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Layout>
      <Alert severity={theme}>
        Your appliation is {app ? app.status : "pending"}
      </Alert>
      {feeText && (
        <h1>
          {app
            ? `Your Amount to pay is ${amount}rs for ${installment} installment`
            : text}
        </h1>
      )}
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
