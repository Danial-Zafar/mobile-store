// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { SnackbarProvider } from "notistack";

import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/nav-bar";
import Login from "./components/Login";
import MobileDetail from "./components/MobileDetail";
import CartDetail from "./components/CartDetail";
import Home from "./components/Home";
import {AppConstant} from "./constants/constants"

export const MobileDBContext = React.createContext();

function App() {
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(AppConstant.fakeApi.mobiles);

        setMobileData(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <NavBar />
        <MobileDBContext.Provider value={mobileData.mobiles}>
          <Container maxWidth="xl">
            <Routes>
              <Route path={AppConstant.navigation.home} element={<Home />} />
              <Route path={AppConstant.navigation.login} element={<Login />} />
              <Route path={AppConstant.navigation.dashboard} element={<Dashboard />} />
              <Route path={AppConstant.navigation.mobiledetails()} element={<MobileDetail />} />
              <Route path={AppConstant.navigation.cart} element={<CartDetail />} />
            </Routes>
          </Container>
        </MobileDBContext.Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
