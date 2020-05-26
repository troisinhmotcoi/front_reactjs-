import React from 'react'
import { Link } from 'react-router-dom'



class Header extends React.Component {
  constructor() {
    super();
    this.state = {showMe: true
    }
    
  }

  operation() {
    this.setState ({
      showMe: !this.state.showMe
    })
  }

  render() {
    return (
      <div >
        <label onClick={()=>this.operation()}>
         <top></top><middle></middle><bottom></bottom>
        </label>
        {
          this.state.showMe?
          <div>
            <div className="navbar-link">
    <li ><Link to="/home">Home</Link></li>
    

    
      
        

      

      <li><Link to="/article">Posts</Link></li>
      {/* <li><Link to="/signup">Signup</Link></li>
      <li className="active"><Link to="/login">Login</Link></li>
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Language
        <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="#">English</a></li>
          <li><a href="#">Vietnamese</a></li>
          
          </ul>
        </li> */}
        </div>
      
         </div>:null        }
      </div>
    );
  }
}


  
  export default Header
  