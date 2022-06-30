import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MobileCard from "./MobileCard";
import { MobileDBContext } from "../App";

export default function Dashboard() {
  const [value, setValue] = useState([0, 500]);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilter] = useState("search");

  const mobiles = useContext(MobileDBContext);
  let isAcending = true;

  const priceHandleChange = (event, newValue) => {
    setValue(newValue);

    setFilter("price");
  };

  function valuetext(value) {
    return `${value}$`;
  }

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
    setFilter("search");
  };

  let getMobileListInRange = () => {
    const mobileList =
      mobiles &&
      mobiles.map((x) => {
        if (value[0] <= x.price && x.price <= value[1]) {
          return <MobileCard key={x.id} mobile={x} />;
        }

        return null;
      });

    return mobileList;
  };

  let searchMobileList = () => {
    const mobileList =
      mobiles &&
      mobiles.map((x) => {
        if (x.deviceName.toLowerCase().includes(searchText.toLowerCase())) {
          return <MobileCard key={x.id} mobile={x} />;
        }

        return null;
      });

    return mobileList;
  };

  let sortByPrice = () => {
    isAcending = isAcending ? false : true;
    let mobileList = null;

    if (isAcending) {
      mobileList =
        mobiles &&
        mobiles.sort((a, b) => {
          return a.price - b.price;
        });
    } else {
      mobileList =
        mobiles &&
        mobiles.sort((a, b) => {
          return b.price - a.price;
        });
    }

    console.log(mobileList, "list");

    return (
      mobileList && mobileList.map((x) => <MobileCard key={x.id} mobile={x} />)
    );
  };

  const mobileList = (param) => {
    if (param === "search") {
      return searchMobileList();
    } else if (param === "price") {
      return getMobileListInRange();
    } else if (param === "sort") {
      return sortByPrice();
    }
  };

  return (
    <div>
      <h1>Mobiles</h1>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => "price range"}
              value={value}
              onChange={priceHandleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={Math.min.apply(
                Math,
                mobiles &&
                  mobiles.map(function (x) {
                    return x.price;
                  })
              )}
              max={Math.max.apply(
                Math,
                mobiles &&
                  mobiles.map(function (x) {
                    return x.price;
                  })
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => setFilter("sort")} variant="contained">
            Sort
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            value={searchText}
            onChange={onSearchChange}
          />
        </Grid>
        {mobileList(filterType)}
      </Grid>
    </div>
  );
}
