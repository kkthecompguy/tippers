import axios from 'axios';
import Cookie from 'js-cookie';
import { API_BASE_URL, USERS_LOGIN_URL } from '.';
import * as actionTypes from '../types/auth';


export const userslogin = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.AUTH_START_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = JSON.stringify(formData);

    const res = await axios.post(`${API_BASE_URL}${USERS_LOGIN_URL}`, data, config);
    dispatch({
      type: actionTypes.AUTH_LOGIN_SUCCESS,
      payload: { token: res.data.token, user: res.data.user}
    });
    const { auth: { token, user } } = getState();
    Cookie.set('token', token);
    Cookie.set('user', JSON.stringify(user));

    return {success:true, message: 'successful login'}
  } catch (error) {
    console.log(error);
    dispatch({ type: actionTypes.AUTH_LOGIN_FAIL });
    return {success:false, message: 'invalid credentials'}
  }
}


export const logout = () => dispatch => {
  dispatch({type: actionTypes.USER_LOGOUT})
  Cookie.remove('token');
  Cookie.remove('user');
  window.location.href = '/';
}

export const rolesChecker = (userRole, qualifiedRole) => {
  if (userRole === qualifiedRole) {
    return  true
  } else {
    return false
  }
}

export const permissionChecker = (expectedPermission=undefined, userPermissions=[]) => {
  let found = userPermissions.includes(expectedPermission)
  if (found) {
    return true
  } else {
    return false
  }
}