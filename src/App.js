// import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { SnackbarProvider } from 'notistack';


import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from'./components/nav-bar'
import Login from './components/Login'
import MobileDetail from './components/MobileDetail'
import CartDetail from './components/CartDetail'
import Home from './components/Home';

export const MobileDBContext = React.createContext()



function App() {
  const [mobileData, setMobileData]= useState([])
  

  useEffect(() => {
    async function fetchData() {
      try{
         const res = await axios.get('http://localhost:3000/mobiles')
     
          setMobileData(res.data)
     } catch (err){
     
         console.log(err);
     }
    }

    fetchData()
   }, [])

  return (
      <div className="App">
        
        <NavBar />
        <SnackbarProvider maxSnack={3}>
        <MobileDBContext.Provider value={mobileData.mobiles}>
          <Container maxWidth="xl">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='dashboard' element={<Dashboard  />} />
              <Route path='mobile-details/:id' element={<MobileDetail />} />
              <Route path='cart' element={<CartDetail />} />
            </Routes>
          </Container>
        </MobileDBContext.Provider>
        </SnackbarProvider>
    </div>
  ); 
}



export default App;
