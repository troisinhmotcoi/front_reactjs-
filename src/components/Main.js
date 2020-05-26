import React, { Component}  from 'react';
import {Switch, Route,Redirect}  from 'react-router-dom';
import {PrivateRoute} from '../helper/index';
import SignUp from "./SignUp"
import './css/signup.css';
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
          <Redirect exact from='/' to='/login'/>
          <PrivateRoute  path='/home' component={Home}/>
          <MuiThemeProvider> 
          {/* <Route  path='/signup' component={SignUp}/>
          <Route   path='/login' component={Login}/> */}
          <Route  path='/article' component={Article}/>

          <Route  path='/about' component={About}/>

          </MuiThemeProvider>


           
         </Switch>
        </div>
      );
    }
  }
 export default  (Main)
     
