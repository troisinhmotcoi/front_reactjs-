import React, { Component}  from 'react';
import {Switch, Route}  from 'react-router-dom';
import { history } from '../helper';

import SignUp from "./SignUp"
import './css/signup.css';
import store from '../store';
import { Provider } from 'react-redux';
import Login from './Login'
import Home from './Home';
import About from './About';
import Article from './Article';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
class Main extends Component {
    
    render() {
      return (
        <div>
          
          <Switch >
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          
          <Route path='/article' component={Article}/>
          <MuiThemeProvider> 
          <Provider store = { store }>
        <Route path='/signup' component={SignUp}/>
        <Route  path='/login' component={Login}/>
        </Provider>

               </MuiThemeProvider>
               
          </Switch>
        </div>
      );
    }
  }
 
  
  export default Main
     
