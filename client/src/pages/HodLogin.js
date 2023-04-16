import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function HODLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:5000/auth/hod", data);

      if (response.data.hod) {
        localStorage.setItem("hod", JSON.stringify(response.data.hod));
        alert("Login successful");
        navigate("/hod-contact");
      }
      console.log(response.data.hod);
      if (response.data.error) {
        setError(response.data.error);
      }
      console.log(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Nav />
      <Container component="main" maxWidth="xs">
        <div className="box-signin">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <LockOutlinedIcon /> */}
            <Typography component="h1" variant="h5">
              Co-ordinator Login
            </Typography>
            <Box
              component="form"
              onSubmit={submitHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>{error}</p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/login" variant="body2">
                    {"Student"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/admin-login" variant="body2">
                    {"Admin"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
      <Footer />
    </>
  );
}
