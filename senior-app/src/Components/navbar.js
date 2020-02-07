import React, { Component } from 'react';
import Home from '../Pages/home';
import signup from './signup';
import Dashboard from '../Pages/Dashboard';
import './../CSS/home.css';
import{BrowserRouter as Router ,
    Route,  
    Link,
    Switch,
    Redirect
  } from "react-router-dom";

  class navbar extends Component{
     render(){
         return(
        <div className ="App">
            <div className="home">
            <div className="background-image">
            <Router>
            <div className="nav-bar">
            <div className="nav-items">
              <a href ="Home" className="nav-bar-padding"><Link to="/">Home</Link>
              </a>
              <a href="Dashboard" className="nav-bar-padding"><Link to = "/dashboard">Dashboard</Link>
              </a>
              <a href="signup" className="nav-bar-padding"><Link to = "/signup">Sign up</Link></a>
              <a href="signin" className="nav-bar-padding"><Link to ="/signin">Sign in</Link></a>
              </div>            
            </div>
            <Switch>
              
              <Route path="/signup" component={signup}/>
            </Switch>
            </Router>
            </div>
            </div>
        </div>
         );
     }
  }
  export default navbar