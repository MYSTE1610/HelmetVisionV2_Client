import axios from 'axios';

export const fetchInstances = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/instances');
    dispatch({ type: 'SET_INSTANCES', payload: response.data });
  } catch (error) {
    console.error('Error fetching instances:', error);
  }
};

export const fetchChallans = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/challans');
    dispatch({ type: 'SET_CHALLANS', payload: response.data });
  } catch (error) {
    console.error('Error fetching challans:', error);
  }
};
