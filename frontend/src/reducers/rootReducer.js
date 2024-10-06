import { combineReducers } from 'redux';
import petitionReducer from './petitionReducer';

const rootReducer = combineReducers({
  petitions: petitionReducer
});

export default rootReducer;