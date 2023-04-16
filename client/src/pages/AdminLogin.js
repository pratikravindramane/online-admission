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
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function AdminLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/admin",
        data
      );

      if (response.data.admin) {
        localStorage.setItem("admin", true);
        alert("Login successful");
        navigate("/dashboard");
      }
      console.log(response.data.admin);
      if (response.data.error) {
        setError(response.data.error);
      }
      console.log(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      <Nav />
      <Container component="main" maxWidth="xs" className="singin-page">
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
              Admin Login
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
                name="email"
                autoComplete="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
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
                  <Link to="/hod-login" variant="body2">
                    {"Co-ordinator"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
