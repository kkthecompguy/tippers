import * as actionTypes from '../types/auth';
import Cookie from 'js-cookie';

const token = Cookie.get('token') || null;
const userCookie = Cookie.get('user') || null;


let user = JSON.parse(userCookie)
let permissions;
try {
  permissions = JSON.parse(user.permission.replace('"', ''))
} catch (error) {
  permissions = []
}
console.log({user})
console.log({permissions})

const initialState = {
  isAuthenticated: token ? true: false,
  user: user ? user : null,
  role: user ? user.role : null,
  permissions: permissions ? permissions : [],
  token: token ? token : null,
  loading: false
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
        isAuthenticated: true
      }
    case actionTypes.AUTH_LOGIN_FAIL:
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      }
    default:
      return state;
  }
} 

export default authReducer;