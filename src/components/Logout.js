import React,{Component}from 'react'
import { Switch, Route } from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
import {getProfileFetch} from './redux/getProfileFetch';
import {logoutUser} from '../actions/authentication';
import {connect} from 'react-redux';

// The Roster component matches one of two different routes
// depending on the full pathname
class Logout extends Component {
    componentDidMount = () => {
    this.props.getProfileFetch()
  }

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    sessionStorage.removeItem("jwtToken")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }
  render() {
    return (
      <div>

  <Switch>
                <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
  </Switch>
  {this.props.currentUser.username
            ? <button onClick={this.handleClick}>Log Out</button>
            : null
          }
  </div>
);
}
}
const mapStateToProps = state => ({
currentUser: state.currentUser
})
const mapDispatchToProps = dispatch => ({
getProfileFetch: () => dispatch(getProfileFetch()),
logoutUser: () => dispatch(logoutUser())

})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
 



