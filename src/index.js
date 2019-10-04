import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from'./components/navbar/Main';
import Header from './components/navbar/Header';
import './index.css'



   

    render((
        
     <BrowserRouter >
    
    <Header/>
    
      <Main/>
      
    
    

    </BrowserRouter>
    
), document.getElementById('root'));

