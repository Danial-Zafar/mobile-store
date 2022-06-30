import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useNavigate } from "react-router-dom";

import LoggedInComponent from "./LoggedInComponent";

const ResponsiveAppBar = () => {
  
  let isCartEmpty = localStorage.getItem("cart") ? true : false;
  const navigate = useNavigate();

  const cartState = () => {
    if (isCartEmpty) {
      return (
        <ShoppingCartIcon
          onClick={() => navigate("/cart")}
          sx={{ display: { xs: "flex", md: "flex" }, p: 1 }}
        />
      );
    } else {
      return (
        <ShoppingCartTwoToneIcon
          onClick={() => navigate("/cart")}
          sx={{ display: { xs: "flex", md: "flex" }, p: 1 }}
        />
      );
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileFriendlyIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mobile Store
          </Typography>
          <MobileFriendlyIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mobile Store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 0 }}>
            <LoggedInComponent />
            {cartState()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
