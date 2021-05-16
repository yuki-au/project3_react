import React from "react";
import Adminlogin from './routes/adminlogin';
import './App.css';
import Dashboard from './routes/dashboard';
import Product from './routes/product';
import User from './routes/user';
import Logout from './routes/logout';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App () {

  return (
    <Router>
      <div className = "App">
          <Switch>
            <Route exact from ="/" component ={Adminlogin}/>
            <Route exact path="/adminlogin" component ={Adminlogin}/>
            <Route exact path="/dashboard" component ={Dashboard}/>
            <Route exact path="/product" component ={Product}/>
            <Route exact path="/user" component ={User}/>
            <Route exact path="/logout" component ={Logout}/>
          </Switch>
        </div>
    </Router>
     
  );
}


export default App;
