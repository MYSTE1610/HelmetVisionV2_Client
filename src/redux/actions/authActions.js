import axios from 'axios';

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const response = await axios.post('/api/login', user);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data.message });
  }
};

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });

  try {
    await axios.post('/api/register', user);
    dispatch({ type: 'REGISTER_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data.message });
  }
};
