<<<<<<< HEAD
import { combineReducers } from 'redux';
import getUserMenuOption from './navigationList';
import {reducer as formReducer } from 'redux-form';
import { loginReducer } from '../components/login/reducer/login-reducer';
import { loaderReducer } from '../utilities/loader/reducer/loader-reducer';
import { headerReducer } from '../view/header/reducer/header-action-reducer';
import { userListReducer,saveFiltersTagsOnGridReducer } from '../view/screen/User/reducer/user-reducer';

const integratedReducer = combineReducers({
   options : getUserMenuOption,
   form : formReducer,
   userLoginInfo : loginReducer,
   loader : loaderReducer,
   header: headerReducer,
   user : userListReducer
})
export default integratedReducer
=======
import { combineReducers } from 'redux';
import getUserMenuOption from './navigationList';
import {reducer as formReducer } from 'redux-form';
import { loginReducer } from '../components/LoginScreen/reducer/login-reducer';
import { loaderReducer } from '../utilities/loader/reducer/loader-reducer';
import { headerReducer } from '../view/header/reducer/header-action-reducer';
import { userListReducer,saveFiltersTagsOnGridReducer } from '../view/screen/User/reducer/user-reducer';

const integratedReducer = combineReducers({
   options : getUserMenuOption,
   form : formReducer,
   userLoginInfo : loginReducer,
   loader : loaderReducer,
   header: headerReducer,
   user : userListReducer,
  viewUserSearchFilterTags : saveFiltersTagsOnGridReducer
});
export default integratedReducer;
>>>>>>> 5f129db8a17d3e9d50119f48d65d4e9e93520c3e
