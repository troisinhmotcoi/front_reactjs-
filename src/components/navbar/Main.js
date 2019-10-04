import React, { Component}  from 'react';
import {Switch, Route}  from 'react-router-dom';

import SignUpContainer from "./SignUpContainer"
import './css/signup.css';

import Home from './Home';
import About from './About';
import Article from './Article';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
class Main extends Component {
    
    render() {
      return (
        <div>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          
          <Route path='/article' component={Article}/>
          <MuiThemeProvider> 
        <Route path='/signup' component={SignUpContainer}/>
               </MuiThemeProvider>
          </Switch>
        
        </div>
      );
    }
  }
 
  
  export default Main
     
