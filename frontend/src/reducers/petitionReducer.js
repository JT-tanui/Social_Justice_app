const initialState = [];

const petitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PETITIONS':
      return action.payload;
    default:
      return state;
  }
};

export default petitionReducer;