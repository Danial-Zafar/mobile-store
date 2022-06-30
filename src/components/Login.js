import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function validateCredenitals() {
    try {
      const res = await axios.get("http://localhost:3000/users");

      const userNameIsValid = res.data.users.some(
        (obj) => obj.userName === userName
      );
      const passwordIsValid = res.data.users.some(
        (obj) => obj.password === password
      );

      if (userNameIsValid && passwordIsValid) {
        localStorage.setItem("user", userName);

        navigate("/dashboard");
        enqueueSnackbar("Login Successfully", { variant: "success" });
      } else {
        enqueueSnackbar("Username or password did not match", {
          variant: "error",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Grid justifyContent="center" container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Username"
            value={userName}
            onChange={onUsernameChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={onPasswordChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={() => validateCredenitals()}>
            Login
          </Button>
          <Button
            onClick={() => {
              setUserName("");
              setPassword("");
            }}
            variant="outlined"
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
