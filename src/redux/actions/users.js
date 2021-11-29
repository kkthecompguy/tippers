import axios from "axios";
import { API_BASE_URL, USERS_URL } from ".";


export const createuser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = JSON.stringify(formData);
    await axios.post(`${API_BASE_URL}${USERS_URL}`, data, config);
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}


export const listUsers = () => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    
    const res = await axios.get(`${API_BASE_URL}${USERS_URL}`,config);
    console.log(res.data);
    return res.data.users
  } catch (error) {
    console.log(error)
    return []
  }
}

