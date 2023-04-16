import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/User";
import Layout from "../../utils/Layout";

function UploadDoc() {
  const [aadhar, setAadhar] = useState();
  const [ssc, setSsc] = useState();
  const [hsc, setHsc] = useState();
  const [profile, setProfile] = useState();
  const [payment, setPayment] = useState(false);
  const { user } = useContext(AuthContext);
  const [aadharInput, setAadharInput] = useState(false);
  const [hscInput, setHscInput] = useState(false);
  const [sscInput, setSscInput] = useState(false);
  const [profileInput, setProfileInput] = useState(false);
  const [mes, setMes] = useState();
  const [payMes, setPayMes] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchUser = await axios.get(
          `http://localhost:5000/user/${user._id}`
        );
        if (fetchUser.data.user.payment) {
          setPayMes("Already Paid the Application fees");
          setPayment(true);
        }
      } catch (error) {}
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchApp = await axios.get(
          `http://localhost:5000/user/application/${user._id}`
        );
        const forApp = fetchApp.data.application;
        if (forApp.porifle || forApp.hsc || forApp.ssc || forApp.aadhar) {
          setMes("You have successfully uploaded all the documents");
        }
        if (fetchApp.data.application.profile) {
          setProfileInput(true);
          // console.log("hello");
        }
        if (fetchApp.data.application.aadhar) {
          setAadharInput(true);
          console.log("hello");
        }
        if (fetchApp.data.application.hsc) {
          setHscInput(true);
        }
        if (fetchApp.data.application.hsc) {
          setSscInput(true);
        }
        console.log(fetchApp.data.application);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [aadharInput, hscInput, sscInput, user._id, user]);
  const aadharSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("doc", aadhar);
      const res = await axios.post(
        `http://localhost:5000/user/aadhar/${user._id}`,
        formData
      );
      alert("successfull uploaded");

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const sscSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("doc", ssc);
      const res = await axios.post(
        `http://localhost:5000/user/ssc/${user._id}`,
        formData
      );
      alert("successfull uploaded");

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const hscSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("doc", hsc);
      const res = await axios.post(
        `http://localhost:5000/user/hsc/${user._id}`,
        formData
      );
      alert("successfull uploaded");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const profileSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profile", profile);
      const res = await axios.post(
        `http://localhost:5000/user/profile/${user._id}`,
        formData
      );
      alert("successfull uploaded");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_Eq3gnPcqCuq0H8",
      amount: 250,
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
          const payment = await axios.get(
            `http://localhost:5000/user/payment/${user._id}`
          );
          console.log(payment.data);
          localStorage.setItem("payment", true);
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
      const { data } = await axios.post(orderUrl, { amount: 250 });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Layout>
      <Box>
        {mes && <h2 style={{ textAlign: "center" }}>{mes}</h2>}
        {payMes && (
          <h2 style={{ textAlign: "center", color: "green" }}>{payMes}</h2>
        )}
        {!profileInput && (
          <form
            onSubmit={profileSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            {/* <label>profile</label> */}
            <h3>Proflie Image</h3>
            <TextField
              type="file"
              onChange={(e) => setProfile(e.target.files[0])}
            />
            <Button type="submit">Submit</Button>
          </form>
        )}
        {!aadharInput && (
          <form
            onSubmit={aadharSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <h3>Addhar Card</h3>
            <TextField
              type="file"
              onChange={(e) => setAadhar(e.target.files[0])}
            />
            <Button type="submit">Submit</Button>
          </form>
        )}
        {!sscInput && (
          <form
            onSubmit={sscSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <h3>SSC Certificate</h3>
            <TextField
              type="file"
              onChange={(e) => setSsc(e.target.files[0])}
            />
            <Button type="submit">Submit</Button>
          </form>
        )}
        {!hscInput && (
          <form
            onSubmit={hscSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <h3>HSC Certificate</h3>
            <TextField
              type="file"
              onChange={(e) => setHsc(e.target.files[0])}
            />
            <Button type="submit">Submit</Button>
          </form>
        )}
        {!payment && (
          <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
            <button onClick={handlePayment} className="buy_btn">
              Pay Now
            </button>
          </div>
        )}
      </Box>
    </Layout>
  );
}

export default UploadDoc;
