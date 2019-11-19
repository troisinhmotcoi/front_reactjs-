import React, { Component}  from 'react';
import {Switch, Route,Router}  from 'react-router-dom';
import {PrivateRoute} from '../helper/index';
import SignUp from "./SignUp"
import './css/signup.css';
import store from '../store';
import { Provider } from 'react-redux';
import Login from './Login'
import Home from './Home';
import About from './About';
import Article from './Article';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { height } from '@material-ui/system';
import { ActionHelp } from 'material-ui/svg-icons';

class Main extends Component {
    
    render() {
      return (
        <div>
          
          <Switch >

          
          <Route path='/article' component={Article}/>


          <Provider store = { store }>
          <Route path='/about' component={About}/>
          <MuiThemeProvider> 

        <Route path='/signup' component={SignUp}/>

        <Route  isexact path='/login' component={Login}/>
      <PrivateRoute path='/home' component={Home}/>

               </MuiThemeProvider>
               </Provider>
               


          </Switch>
        </div>
      );
    }
  }
 
  
  export default  (Main)
     
