import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";

import { MobileDBContext } from "../App";
import MobileDetailView from "./MobileDetailView";

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
  const classes = useStyles();
  const { id } = useParams();
  const mobiles = useContext(MobileDBContext);
  const x = mobiles ? mobiles.find((x) => x.id == id) : null;

  return (
    <Grid container className={classes.root} spacing={2}>
      <h1>Mobile Details</h1>

      <Grid container spacing={3}>
        {<MobileDetailView mobile={x} />}
      </Grid>
    </Grid>
  );
}
