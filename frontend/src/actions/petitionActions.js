import axios from 'axios';

export const fetchPetitions = () => async dispatch => {
  const response = await axios.get('/api/petitions');
  dispatch({ type: 'FETCH_PETITIONS', payload: response.data });
};