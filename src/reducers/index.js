import { combineReducers } from 'redux';
import weather from './weatherReducer';
import zipCode from './zipCodeReducer';

export default combineReducers({
  weather,
  zipCode
});
