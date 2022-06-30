import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CartDetail() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [saveCartItems, setSaveCartItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const handleClickVariant = () => () => {
    if (saveCartItems && saveCartItems.length > 0) {
      enqueueSnackbar("Your order is placed successfully!", {
        variant: "success",
      });
      setSaveCartItems(localStorage.removeItem("cart"));
    } else {
      enqueueSnackbar("Cart is emppty", { variant: "error" });
    }
  };

  const removeCartItem = (id) => {
    setSaveCartItems(saveCartItems.filter((x) => x.id !== id));
    localStorage.setItem("cart", JSON.stringify(saveCartItems));
  };

  const totalAmount = () => {
    const amount =
      saveCartItems &&
      saveCartItems.reduce(function (acc, obj) {
        return acc + obj.price * obj.quantity;
      }, 0);

    return amount;
  };

  const cartItems = () => {
    const totalAmountRow =
      saveCartItems && saveCartItems.length > 0 ? (
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell align="right">{totalAmount()}</TableCell>
        </TableRow>
      ) : (
        <> </>
      );

    return (
      <>
        {saveCartItems &&
          saveCartItems?.map((x) => {
            return (
              <TableRow key={x.id}>
                <TableCell>
                  <img src={x.imageURL} alt="mobile" />
                </TableCell>
                <TableCell align="left">{x.deviceName}</TableCell>
                <TableCell align="left">
                  <TextField type="number" value={x.quantity} />
                </TableCell>
                <TableCell align="left">{x.price}</TableCell>
                <TableCell align="left">
                  {" "}
                  <Button
                    variant="outlined"
                    onClick={() => removeCartItem(x.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        {totalAmountRow}
      </>
    );
  };

  const cartDetail = () => {
    const cartPage = (saveCartItems && saveCartItems.length>0) ?  
    <>
    <h1>Cart Detail</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Device</TableCell>
            <TableCell align="left">Model</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{cartItems()}</TableBody>
      </Table>
    </TableContainer>
    <>
      <Button onClick={handleClickVariant()}>Place Order</Button>
    </>
  </> : <h1>Cart is empty</h1>
    return (
      cartPage
    )
  }

  return (
   cartDetail()
  );
}
