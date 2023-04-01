import * as React from "react";
import Button from "@mui/material/Button";
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
import { AuthContext } from "../context/User";
import Footer from "../components/Footer";
export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        data
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Login successful");
        navigate("/profile");
      }
      if (response.data.error) {
        setError(response.data.error);
      }
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      console.log(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  // setTimeout(() => {
  //   localStorage.clear();
  // }, 1000);
  React.useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <Nav />
      <Container component="main" maxWidth="xs" className="singin-page">
        <div className="box-signin">
          {/* <CssBaseline /> */}
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
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
                type="email"
                id="email"
                label="Email Address"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
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
                  <Link to="/signup" variant="body2">
                    {"Sign Up"}
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
