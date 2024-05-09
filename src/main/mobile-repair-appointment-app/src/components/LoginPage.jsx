import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  let error = false;

  const handleLogin = (e) => {
    e.preventDefault();
    UserService.getUser(email)
      .then((res) => {
        alert("user fetch " + res.data.uName);
        localStorage.setItem("userId", res.data.uId);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem("login", true);
        navigate(`/home`);
      })
      .catch((err) => console.log(err));
  };

  const handleBlur = () => {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3,4}$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      error = true;
    } else {
      setEmailError("");
    }
    if (!error) {
      // Handle login logic here
    }
  };

  //   console.log(Boolean([]));
  //   console.log(Boolean({}));
  //   console.log(Boolean(""));
  //   console.log(Boolean(0));

  return (
    <Container
      maxWidth="sm"
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" align="center">
          User Login
        </Typography>
      </Box>
      <Box
        sx={{ maxWidth: 400, p: 4, border: "1px solid #ddd", borderRadius: 2 }}
      >
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                error={!!emailError}
                helperText={emailError}
                value={email}
                onBlur={handleBlur}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter email"
                // required
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                required
              />
            </Grid> */}
            <Grid item xs={12}>
              <Button fullWidth variant="contained" type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
