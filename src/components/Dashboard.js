
import React, { useEffect, useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

import MobileCard from './MobileCard'
import { MobileDBContext } from '../App'


export default function Dashboard() {
  const [value, setValue] = React.useState([0, 100]);
  const [searchText, setSearchText] = React.useState('');

  const mobiles = useContext(MobileDBContext);

  const priceHandleChange = (event, newValue) => {

    //  console.log(mobiles);

    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}$`;
  }

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  let getMobileListInRange = () => {
    console.log('price in price', value[0]);
    const mobileList = mobiles && mobiles.map((x) => {
      console.log('condition:', value[0], x.price, value[1]);
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

  let mobileList = (param) => {
    if (param == 'search') {

      return searchMobileList();
    } else if (param == 'price') {

      return getMobileListInRange();
    }
  }

  useEffect(() => {
    mobileList();

  }, [mobileList])



  return (
    <div>
      <h1>Mobiles</h1>

      <Grid container spacing={2}  >
        <Grid item xs={6}>
          <Box sx={{ width: 300 }}>
            <Slider

              getAriaLabel={() => 'price range'}
              value={value}
              onChange={priceHandleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={Math.min.apply(Math, mobiles.map(function (x) { return x.price; }))}
              max={Math.max.apply(Math, mobiles.map(function (x) { return x.price; }))}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TextField id="standard-basic" label="Search" variant="standard" value={searchText} onChange={onSearchChange} />
        </Grid>
        {
          mobileList('price')
        }
      </Grid>


    </div>
  )
}
