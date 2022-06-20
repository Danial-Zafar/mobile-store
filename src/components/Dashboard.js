import React from 'react'
import Grid from '@material-ui/core/Grid';

import MobileCard from './MobileCard'
import { MobileDBContext } from '../App'


export default function Dashboard() {
  return (
    <div>
      {/* <MobileDBContext.Consumer>
        {
          mobiles => {
            return mobiles
          }
        }
      </MobileDBContext.Consumer> */}
       <Grid container spacing={3} >
            {mobileCard()}
        </Grid> 
    </div>
  )
}

function mobileCard(){
  var elements = [];
  for(let i =0; i < 5; i++){
       elements.push(<MobileCard />);
   }

   return elements;
}
