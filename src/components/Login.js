import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";

import useLogin from "./hook";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// import { AppConstant } from "../constants/constants"


export default function Login() {

  const { userName, password, setUserName, setPassword, onUsernameChange, onPasswordChange, validateCredenitals } = useLogin();
  // const navigate = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();
  
//   async function validateCredenitals() {
//     try {
//         const res = await axios.get(AppConstant.fakeApi.users);

//         const userNameIsValid = res.data.users.some(
//             (obj) => obj.userName === userName
//         );
//         const passwordIsValid = res.data.users.some(
//             (obj) => obj.password === password
//         );

//         if (userNameIsValid && passwordIsValid) {
//             localStorage.setItem("user", userName);

//             navigate(AppConstant.navigation.dashboard);

//             enqueueSnackbar("Login Successfully", { variant: "success" });
//         } else {
//             enqueueSnackbar("Username or password did not match", {
//                 variant: "error",
//             });
//         }
//     } catch (err) {
//         enqueueSnackbar("Something went wrong", {
//             variant: "error",
//         });
//     }
// }
  return (
    <>
      <h1>Login</h1>
      <Grid justifyContent="center" container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Username"
            id="username"
            value={userName}
            onChange={onUsernameChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            label="Password"
            id="password"
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
