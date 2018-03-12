import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import { loginReducer } from '../components/LoginScreen/reducer/login-reducer';
import { loaderReducer } from '../utilities/loader/reducer/loader-reducer';
import { headerReducer } from '../view/header/reducer/header-action-reducer';
import { createUserReducer, getCelebrityListReducer, getAllUserListReducer, getViewUserColumnsReducer, getAllLocaleListReducer, loadEditUserDataReducer } from '../components/User/reducer/UserReducer';
import  getUserMenuOption  from './userMenuOptions';

const integratedReducer = combineReducers({
   options : getUserMenuOption,
   form : formReducer,
   userLoginInfo : loginReducer,
   loader : loaderReducer,
   header: headerReducer,
   createUserReducer : createUserReducer,
   celebrityList : getCelebrityListReducer,
   allUserList : getAllUserListReducer,
   viewUserColumns : getViewUserColumnsReducer,
   allLocaleList : getAllLocaleListReducer,
   editFormData : loadEditUserDataReducer
});
export default integratedReducer;