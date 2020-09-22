import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // Import des composants nécessaires depuis react Router Dom
import Home from "./Home" ;
import Shop from "./Shop" ;
import Basket from "./Basket" ;
import Account from "./Account" ;
import Menu from "./Menu";
import Sign from "./Sign";
import Splash from "./Splash";





function App() {
  return (
    //Mise en place de la navigation entre composants via React Router Dom
    // La route "/" renvoie au composant Home
    //La route "/shop" renvoie au composant Shop etc...
    <Router>
      <Switch>
        <Route path="/" exact component={Splash} /> 
        <Route path="/home" exact component={Home} />    
        <Route path="/shop" exact component={Shop} />
        <Route path="/basket" exact component={Basket} />
        <Route path="/account" exact component={Account} />
        <Route path ="/menu" exact component={Menu}/>
        <Route path ="/sign" exact component={Sign}/>
      </Switch>
    </Router>

  );
}

export default App;
