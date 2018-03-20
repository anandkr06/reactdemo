import Service from '../Service';
import { loaderOn , loaderOff  } from '../../../utilities/loader/action/loader-action';
import {constants} from '../constant/constants';
import {USER_CREATE_SUCCESS, USER_CREATE_FAILED, FETCH_LIST_SUCCESS, FETCH_LIST_FAILED, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILED, FETCH_LOCALE_LIST_SUCCESS, FETCH_LOCALE_LIST_FAILED, RELOAD_FORM_FOR_EDIT} from '../constant/constants';
import {reset} from 'redux-form';
import { alertHide , alertShow } from '../../../utilities/alert/action/alert-action';

export function createUserAction(data) {
    //adding some mock fields 
    data["role"] = parseInt(data.role.val);
    data["createdBy"] =  124;
	data["createdAt"] =  "Monday, 16-Feb-18 10:30:44 IST";
	data["updatedBy"] =  125;
    data["updatedAt"] = "Monday, 16-Feb-18 10:30:44 IST";
    data["status"] = parseInt(data.status.id);
    delete data["passwordConfirm"];
//    delete data["userPassword"];
    
    return (dispatch, getState) => {
        //dispatch(loaderOn());
        new Service().createUser(data, getState().userLoginInfo).then(response => {
            console.log(response.data);
            dispatch(alertShow({messageType:'Success',content:"User created successfully."}));
            dispatch(reset('userForm'));
            setTimeout(
                function(){ 
                    dispatch(alertHide());
                }, 3000
            )
        })
        .catch(e => {
            console.log("Error in creating user");
            dispatch(alertShow({messageType:'Error',content:'Error in creating user'}));
            setTimeout(
                function(){ 
                    dispatch(alertHide());
                }, 3000
            )
        })
    }
}

export function updateUserAction(data){
    delete data["passwordConfirm"];
//    delete data["userPassword"];
    data["role"] = (data.role.val) ? parseInt(data.role.val) : parseInt(data.role);
    data["status"] = (data.status.id) ? parseInt(data.status.id) : parseInt(data.status);
    return (dispatch, getState) => {
        //dispatch(loaderOn());
        new Service().updateUser(data, getState().userLoginInfo).then(response => {
            console.log(response.data);
            dispatch(alertShow({messageType:'Success',content:'User updated successfully'}));
            dispatch(editUserFormAction([]))
            setTimeout(
                function(){ 
                    dispatch(alertHide());
                }, 3000
            )
        })
        .catch(e => {
            dispatch(alertShow({messageType:'Error',content:'Error in updating user'}));
            console.log("Error in creating user");
            setTimeout(
                function(){ 
                    dispatch(alertHide());
                }, 3000
            )
        })
    }
}

export function fetchCelebrityListAction() {
    return (dispatch, getState) => {
        //dispatch(loaderOn());
        new Service().getCelebrityList(getState().userLoginInfo).then(response => {
            dispatch({ type: FETCH_LIST_SUCCESS, payload: { celebrityList : response.data.data} });
            console.log(response.data);
        })
        .catch(e => {
            console.log("Error in fetching list");
        })
    }
}

export function fetchAllLocaleListAction() {
    return (dispatch, getState) => {
        //dispatch(loaderOn());
        new Service().getAllLocaleList(getState().userLoginInfo).then(response => {
            dispatch({ type: FETCH_LOCALE_LIST_SUCCESS, payload: { localeList : response.data.data} });
            console.log(response.data);
        })
        .catch(e => {
            console.log("Error in fetching list");
        })
    }
}


export function viewAllUsersAction() {
    return (dispatch, getState) => {
        //dispatch(loaderOn());
        new Service().getAllUserList(getState().userLoginInfo).then(response => {
            dispatch({ type: FETCH_USER_LIST_SUCCESS, payload: { allUserList : response.data.data} });
            console.log(response);
        })
        .catch(e => {
            console.log("Error in fetching user list");
        })
    }
}

export function editUserFormAction(data) {
    //data.languagePref = [data.languagePref];
    return (dispatch) => {
          dispatch({ type: RELOAD_FORM_FOR_EDIT, payload: { editFormData : data} });
    }
}

export function fetchAllRoleListAction() {
    return (dispatch, getState) => {
        //dispatch(loaderOn());
        new Service().getAllRoleList(getState().userLoginInfo).then(response => {
            dispatch({ type: "FETCH_ROLE_LIST_SUCCESS", payload: { allRoleList : response.data.data} });
            console.log(response.data);
        })
        .catch(e => {
            console.log("Error in fetching list");
        })
    }
}
