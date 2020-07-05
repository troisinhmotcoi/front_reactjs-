import React from 'react'
import { render } from 'react-dom'
import {   BrowserRouter   ,Router
}from 'react-router-dom'
import Main from'./components/Main';
import Header from './components/Header';
import './index.css'
import { history } from './helper';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import store from './store';




    render((
      <BrowserRouter>   
        <Router history={history}>
        <Header/>
        <Provider store = { store }>

      <Main/>
      </Provider>

      </Router>
    
    

      </BrowserRouter>    

), document.getElementById('root'));

