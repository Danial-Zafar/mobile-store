import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";

import useLogin from "./hook";

export default function Login() {

  const { userName, password, setUserName, setPassword, onUsernameChange, onPasswordChange, validateCredenitals } = useLogin();
 
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
