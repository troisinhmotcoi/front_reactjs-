import axios from 'axios';
import { GET_ERRORS } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER } from './types';


export const registerUser = (user, history) => dispatch => {
    axios.post('http:localhost:8000/api/user/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: {}
                });
            });
}

export const loginUser = (email,password) => dispatch => {
   // const payload = {
     //   email:'email',
       // password:'password' 
      //};const userStr = JSON.stringify(user)
const  auth= {
       email:email,
     password: password
    }
    //let auth={email}
   // auth.email=email
    //auth.password=password
    axios.post('https://neunhuladinhmenh.herokuapp.com/api/user/login', JSON.stringify(auth),
    {
        headers: {         "Content-Type":"application/json",
    
          }
    })
            .then(res => {
                const { token } = res.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(res => {
                dispatch({
                    type: GET_ERRORS,
                    payload: {}
                });
            });
}
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}