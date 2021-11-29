import axios from 'axios';
import { API_BASE_URL, PERMISSSIONS_URL, ROLES_URL } from '.';


export const createPermission = permission => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    
    const data = JSON.stringify(permission)
    await axios.post(`${API_BASE_URL}${PERMISSSIONS_URL}`, data, config);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export const listPermission = () => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    
    const res = await axios.get(`${API_BASE_URL}${PERMISSSIONS_URL}`, config);
    return res.data.permission;
  } catch (error) {
    console.log(error);
    return [];
  }
}


export const updatePermission = (permission, permId) => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    
    const data = JSON.stringify(permission)
    await axios.put(`${API_BASE_URL}${PERMISSSIONS_URL}/${permId}`, data, config);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export const deletePermission = permId => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    

    await axios.delete(`${API_BASE_URL}${PERMISSSIONS_URL}/${permId}`, config);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export const createRoles = role => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    
    const data = JSON.stringify(role)
    await axios.post(`${API_BASE_URL}${ROLES_URL}`, data, config);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export const listRoles = () => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    
    const res =  await axios.get(`${API_BASE_URL}${ROLES_URL}`, config);
    return res.data.role;
  } catch (error) {
    console.log(error);
    return [];
  }
}


export const updateRoles = (role, roleId) => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    
    const data = JSON.stringify(role)
    await axios.put(`${API_BASE_URL}${PERMISSSIONS_URL}/${roleId}`, data, config);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const deleteRole = roleId => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState()
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    

    await axios.delete(`${API_BASE_URL}${PERMISSSIONS_URL}/${roleId}`, config);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}