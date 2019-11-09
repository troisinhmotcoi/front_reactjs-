import React from 'react'
import { render } from 'react-dom'
import {   BrowserRouter   ,Router
}from 'react-router-dom'
import Main from'./components/Main';
import Header from './components/Header';
import './index.css'
import { history } from './helper';





    render((
        
      <BrowserRouter>   
        <Router history={history}>
    <Header/>
    
      <Main/>
      </Router>
    
    

      </BrowserRouter>    
), document.getElementById('root'));

