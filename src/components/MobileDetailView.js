import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});



export default function MobileDetailView(props) {
    const classes = useStyles();


    return (
        <>
            <Grid item xs={4}>
                <div className={classes.root}>
                    <img src={props.mobile.imageURL} />
                </div>
            </Grid>

            <Grid item xs={4}>
                <Typography gutterBottom variant="h2" component="h2">
                    {props.mobile.deviceName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.mobile.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.mobile.color}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.mobile.screemSize}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.mobile.os}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.mobile.ram}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.mobile.storage}
                </Typography>

            </Grid>

            <Grid item xs={4}>
                <Button variant="outlined">Add to Cart</Button>
            </Grid>
        </>
    );
}
