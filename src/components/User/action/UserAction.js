import Service from '../Service';
import { loaderOn , loaderOff  } from '../../../utilities/loader/action/loader-action';
import {constants} from '../constant/constants';
import {USER_CREATE_SUCCESS, USER_CREATE_FAILED, FETCH_LIST_SUCCESS, FETCH_LIST_FAILED, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILED, FETCH_LOCALE_LIST_SUCCESS, FETCH_LOCALE_LIST_FAILED} from '../constant/constants';
import {reset} from 'redux-form';

export function createUserAction(data) {
    //adding some mock fields 
    data["role"] = 1;
    data["createdBy"] =  124;
	data["createdAt"] =  "Monday, 16-Feb-18 10:30:44 IST";
	data["updatedBy"] =  125;
    data["updatedAt"] = "Monday, 16-Feb-18 10:30:44 IST";
    data["status"] = parseInt(data.status.id);
    delete data["passwordConfirm"];
    delete data["userPassword"];
    
    return (dispatch) => {
        //dispatch(loaderOn());
        new Service().createUser(data).then(response => {
            console.log(response.data);
            dispatch(reset('userForm'));
        })
        .catch(e => {
            console.log("Error in creating user");
        })
    }
}

export function fetchCelebrityListAction() {
    return (dispatch) => {
        //dispatch(loaderOn());
        new Service().getCelebrityList().then(response => {
            dispatch({ type: FETCH_LIST_SUCCESS, payload: { celebrityList : response.data.data} });
            console.log(response.data);
        })
        .catch(e => {
            console.log("Error in fetching list");
        })
    }
}

export function fetchAllLocaleListAction() {
    return (dispatch) => {
        //dispatch(loaderOn());
        new Service().getAllLocaleList().then(response => {
            dispatch({ type: FETCH_LOCALE_LIST_SUCCESS, payload: { localeList : response.data.data} });
            console.log(response.data);
        })
        .catch(e => {
            console.log("Error in fetching list");
        })
    }
}


export function viewAllUsersAction() {
    return (dispatch) => {
        //dispatch(loaderOn());
        new Service().getAllUserList().then(response => {
            dispatch({ type: FETCH_USER_LIST_SUCCESS, payload: { allUserList : response} });
            console.log(response);
        })
        .catch(e => {
            console.log("Error in fetching user list");
        })
    }
}

