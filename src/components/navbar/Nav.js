import React from 'react'
import { Link } from 'react-router-dom'

const Nav=()=>(
<div className="navbar-link">
    <li className="active"><Link to="/">Home</Link></li>
    

    
      
        

      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Language
        <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="#">English</a></li>
          <li><a href="#">Vietnamese</a></li>
          
        </ul>
      </li>
      
    
    </div>
)
export default Nav;


