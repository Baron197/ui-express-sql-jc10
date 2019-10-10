import axios from 'axios';

import { LOGIN_SUCCESS, LOGOUT_USER } from "./types";

import { API_URL } from '../helpers/apiurl'

export const confirmLogin = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const checkKeepLogin = (token) => {
    return (dispatch) => {
        var options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.post(API_URL + '/user/keeplogin', null, options)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
            }).catch(err => {
                localStorage.removeItem('token')
                console.log(err.response.data)
            })
    }
}

export const logoutUser = () => {
    localStorage.removeItem('token')
    return {
        type: LOGOUT_USER
    }
}