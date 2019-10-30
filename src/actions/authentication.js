import axios from 'axios';
import { GET_ERRORS } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';
import qs from 'qs';
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
//server not accept json data so i use qs (form data urlencode)
   const auth= qs.stringify({email,password})
    axios.post('http://neunhuladinhmenh.herokuapp.com/api/user/login',auth ,{ headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }}
  )
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