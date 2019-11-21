import axios from 'axios';
import { GET_ERRORS } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';
import qs from 'qs';
import { SET_CURRENT_USER} from './types';
import {SECRET_POST} from './types';
import { history } from '../helper';
import { Redirect }  from 'react-router';


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

export  const loginUser = (email,password) => dispatch => {
//server not accept json data so i use qs (form data urlencode)
   const auth= qs.stringify({email,password})
    axios.post('http://chinhanh.herokuapp.com/api/user/login',auth ,{ headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }}
  )

            .then(         
                res=>{
                    
                    if (!res.data==false) {
                         
                      
               
                sessionStorage.setItem('jwtToken', JSON.stringify(res.data.remember_token));
                setAuthToken(res.data.remember_token);
                const decoded = jwt_decode(res.data.remember_token);
                dispatch(setCurrentUser(decoded));
                history.push('/home');
            }
        }
            )
            

            
            .catch(res => {
                dispatch({
                    type: GET_ERRORS,
                    payload: {}
                });
            });
}
export const logoutUser=()=>dispatch=>{
    sessionStorage.removeItem('jwtToken');
    setCurrentUser.next(null);

}

export  const secretUser = (password) => dispatch => {
    //server not accept json data so i use qs (form data urlencode)
       const auth= qs.stringify({password})
        axios.post('http://chinhanh.herokuapp.com/api/user/secret',auth ,{ headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }}
      )
    
                .then(         
                    res=>{
                        if (!res.data==false) {
                            sessionStorage.setItem('secret',JSON.stringify(res.data));
                             history.push('/about');


                          //dispatch(secretPost(res_h.content));
                }
            }
                )}
                

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
 
}

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = setCurrentUser;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}
export const getAll=()=>{
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch('http://chinhanh.herokuapp.com/api/user',requestOptions).then(
        res=>{ return res.data}
    )
}