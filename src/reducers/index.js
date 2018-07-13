import { combineReducers } from 'redux';
import HeaderReducer from './HeaderReducer';

export default combineReducers({
    header: HeaderReducer,
  });