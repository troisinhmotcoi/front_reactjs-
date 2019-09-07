import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Article from './Article';
import Login from './Login';
import Signup from './Signup';

const main=()=>(
  
    <main>
  
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/page' component={About}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/article' component={Article}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
</Switch>
</main>

  )

  export default main;
