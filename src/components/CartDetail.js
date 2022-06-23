import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';



const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CartDetail() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();


  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
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
        <TableBody>
       
            <TableRow>
              <TableCell><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRJMyUYcHh_wl8WsryyEtESNp6MdcLdrT8e6yZsCa8bubKMPDbsZvjesiwruwILR5zIA&usqp=CAU"  /></TableCell>
              <TableCell align="left">abc 123</TableCell>
              <TableCell align="left"><TextField type="number" /></TableCell>
              <TableCell align="left">400</TableCell>
              <TableCell align="left"> <Button variant="outlined">Remove</Button></TableCell>
            </TableRow>
        

          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>Place Order</Button>
    </React.Fragment>
    </>
  );
}