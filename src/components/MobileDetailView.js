import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MobileDetailView(props) {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

   function addToCart() {
    if (localStorage.getItem("user")) {
      if (!JSON.parse(localStorage.getItem("cart"))) {
        const mobile = { ...props.mobile, quantity: 1 };

        localStorage.setItem("cart", JSON.stringify([mobile]));
      } else {
        let cartItems = JSON.parse(localStorage.getItem("cart"));

        if (cartItems.some((x) => x.id === props.mobile.id)) {
          cartItems = cartItems.map((x) => {
            if (x.id === props.mobile.id) {
              x = { ...x, quantity: x.quantity + 1 };

              return x;
            } else {
              return x;
            }
          });
        } else {
          const mobile = { ...props.mobile, quantity: 1 };
          cartItems.push(mobile);
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));
      }

      enqueueSnackbar("Item added to the cart", { variant: "success" });
    } else {
      enqueueSnackbar("Plase login to place an order", { variant: "error" });
    }
  }

  return (
    <>
      <Grid item xs={4}>
        <div className={classes.root}>
          <img src={props.mobile?.imageURL}  alt="mobile" />
        </div>
      </Grid>

      <Grid item xs={4}>
        <Typography gutterBottom variant="h2" component="h2">
          {props.mobile?.deviceName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.mobile?.price}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.mobile?.color}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.mobile?.screemSize}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.mobile?.os}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.mobile?.ram}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.mobile?.storage}
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Button variant="outlined" onClick={() => addToCart()}>Add to Cart</Button>
      </Grid>
    </>
  );
}
