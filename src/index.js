import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/navbar/App';

import './index.css'


var rootStyle = {backgroundColor:"#2a2c2e",color:
"#ffffff",}
            

    render((
  <BrowserRouter >
  <div style={rootStyle}>
    <App />
    </div>
  </BrowserRouter>
), document.getElementById('root'));

