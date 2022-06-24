import React from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MobileCard(props) {
  const classes = useStyles();

  const navigate = useNavigate();

  function addToCart() {
    if(!JSON.parse(localStorage.getItem("cart"))){
      
      localStorage.setItem('cart', JSON.stringify([props.mobile]));
    } else {
      let obj = JSON.parse(localStorage.getItem("cart"));
     
      obj.push(props.mobile)
     
      localStorage.setItem('cart', JSON.stringify(obj));
     
    }
  }

  return (
    <Grid item xs={3}>
      <Card className={classes.root}>

        <CardActionArea>
          <CardMedia
            component="img"
            alt="Mobile title"
            height="140"
            image={props.mobile.imageURL}
            title="Mobile title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.mobile.deviceName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.mobile.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => navigate(`/mobile-details/${props.mobile.id}`)}>
            View Details
          </Button>
          <Button size="small" color="primary" onClick={addToCart.bind()}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
