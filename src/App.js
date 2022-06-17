// import logo from './logo.svg';
import './App.css';

import NavBar from'./components/nav-bar'
import Login from './components/Login'
import MobileCard from './components/MobileCard'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MobileDetail from './components/MobileDetail'
import CartDetail from './components/CartDetail'

function mobileCard(){
  var elements = [];
  for(let i =0; i < 5; i++){
       elements.push(<MobileCard />);
   }

   return elements;
}

function App() {
  return (
      <div className="App">
        <NavBar />
        <Container maxWidth="xl">
          
          <Login />
          <Grid container spacing={3} >
            {mobileCard()}
          </Grid>
          <MobileDetail />
          <CartDetail />
        </Container>
    </div>
  ); 
}

export default App;
