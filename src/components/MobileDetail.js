import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';

import { MobileDBContext } from '../App'
import MobileCard from './MobileCard'
import MobileDetailView from './MobileDetailView'


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
  const { id } = useParams();



  return (
    
    <Grid container className={classes.root} spacing={2}>
      <h1>Mobile Details</h1>
        <MobileDBContext.Consumer>
          {
              mobiles => {
              const  x=mobiles ? mobiles.find(x=>x.id==id):null;
           
              return (
                <Grid container spacing={3} >
                   {
                      <MobileDetailView mobile={x}/>  
                   }
                </Grid> 
                )
              } 
          }
        </MobileDBContext.Consumer>
        </Grid>
  );
}