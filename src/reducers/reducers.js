import { combineReducers } from 'redux';
import getUserMenuOption from './navigationList';
import {reducer as formReducer } from 'redux-form';

const integratedReducer = combineReducers({
   options : getUserMenuOption,
   form : formReducer
})
export default integratedReducer