import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/navbar/App';

import './index.css'



            

    render((
  <BrowserRouter >
  <div >
    <App />
    </div>
  </BrowserRouter>
), document.getElementById('root'));

