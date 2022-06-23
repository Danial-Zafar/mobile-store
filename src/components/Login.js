import * as React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';

export default function Login() {

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');


  const onUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function validateCredenitals () {
     try{
         const res = await axios.get('http://localhost:3000/users')
     
       const userNameIsValid= res.data.users.some(obj => obj.userName === userName)
       console.log(userNameIsValid);
        
     } catch (err){
     
         console.log(err);
     }
    
  };



  return (
    <>
      <h1>Login</h1>
      <Grid justifyContent="center" container spacing={2}>
        <Grid  item xs={12}>
          <TextField id="outlined-basic" label="Username" value={userName} onChange={onUsernameChange} variant="outlined" />
        </Grid>
        <Grid  item xs={12}>
          <TextField id="outlined-basic" type="password" label="Password" value={password} onChange={onPasswordChange} variant="outlined" />
        </Grid>
      </Grid>
      <Grid container 
            justifyContent="center"
            alignItems="center"  
            spacing={4}
        >
        <Grid  item xs={12}>
          <Button variant="outlined" onClick={validateCredenitals}>Login</Button>
          <Button variant="outlined">Reset</Button>
        </Grid>
       
      </Grid>
    </>
  );
}
