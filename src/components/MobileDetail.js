import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function MobileDetail() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
            <Grid  item>
              <div className={classes.root}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRJMyUYcHh_wl8WsryyEtESNp6MdcLdrT8e6yZsCa8bubKMPDbsZvjesiwruwILR5zIA&usqp=CAU"  />
              </div>
            </Grid>

            <Grid  item>
            <div className={classes.root}>
                
            </div>
            </Grid>

            <Grid  item>
              <Button variant="outlined">Add to Cart</Button>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}