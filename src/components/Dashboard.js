
import React, { useEffect, useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Button from '@mui/material/Button'

import MobileCard from './MobileCard'
import { MobileDBContext } from '../App'


export default function Dashboard() {
  const [value, setValue] = useState([0, 100]);
  const [searchText, setSearchText] = useState('');

  const mobiles = useContext(MobileDBContext);
  let isAcending = true;

  const priceHandleChange = (event, newValue) => {

    setValue(newValue);

    mobileList('price');
  };

  function valuetext(value) {
    return `${value}$`;
  }

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  let getMobileListInRange = () => {
    const mobileList = mobiles && mobiles.map((x) => {

      if (value[0] <= x.price && x.price >= value[1]) {

        return <MobileCard key={x.id} mobile={x} />
      }
    });

    return mobileList;
  }

  let searchMobileList = () => {
    const mobileList = mobiles && mobiles.map((x) => {
      if (x.deviceName.includes(searchText)) {

        return <MobileCard key={x.id} mobile={x} />
      }
    });

    return mobileList;
  }

  let sortByPrice = () => {
    isAcending = isAcending? false: true;
    let mobileList = null;

    if(isAcending){
       mobileList = mobiles && mobiles.sort((a, b) => {
          return a.price - b.price;
        });

        
    } else {
       mobileList = mobiles && mobiles.sort((a, b) => {
        return b.price - a.price;
      });
    }
    // console.log(mobileList.map((x) => <MobileCard key={x.id} mobile={x} />));
    //return mobileList.map((x) => <MobileCard key={x.id} mobile={x} />)
  }

  let mobileList = (param) => {
    
    if (param == 'search') {

      return searchMobileList();
    } else if (param == 'price') {

      return getMobileListInRange();
    } else if('sort'){
      
      return sortByPrice();
    }
  }

  useEffect(() => {
   mobileList();
  }, [mobileList])


  return (
    <div>
      <h1>Mobiles</h1>

      <Grid container spacing={2}  >
        <Grid item xs={4}>
          <Box sx={{ width: 300 }}>
            <Slider

              getAriaLabel={() => 'price range'}
              value={value}
              onChange={priceHandleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              // min={Math.min.apply(Math, mobiles.map(function (x) { return x.price; }))}
              // max={Math.max.apply(Math, mobiles.map(function (x) { return x.price; }))}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained"  >
              Sort
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField id="standard-basic" label="Search" variant="standard" value={searchText} onChange={onSearchChange} />
        </Grid>
          {
             mobileList('search')
          }
      </Grid>
    </div>
  )
}
