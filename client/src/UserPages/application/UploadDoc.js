import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/User";
import Layout from "../../utils/Layout";

function UploadDoc() {
  const [aadhar, setAadhar] = useState();
  const [ssc, setSsc] = useState();
  const [hsc, setHsc] = useState();
  const [profile, setProfile] = useState();
  const { user } = useContext(AuthContext);
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
  return (
    <Layout>
      <Box>
        <form
          onSubmit={profileSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          {/* <label>profile</label> */}
          <TextField
            type="file"
            helperText="Profile"
            onChange={(e) => setProfile(e.target.files[0])}
          />
          <Button type="submit">Submit</Button>
        </form>
        <form
          onSubmit={aadharSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            type="file"
            helperText="Addhar Card"
            onChange={(e) => setAadhar(e.target.files[0])}
          />
          <Button type="submit">Submit</Button>
        </form>
        <form
          onSubmit={sscSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            type="file"
            helperText="Ssc Certificate"
            onChange={(e) => setSsc(e.target.files[0])}
          />
          <Button type="submit">Submit</Button>
        </form>
        <form
          onSubmit={hscSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            type="file"
            helperText="Hsc Certificate"
            onChange={(e) => setHsc(e.target.files[0])}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Layout>
  );
}

export default UploadDoc;
