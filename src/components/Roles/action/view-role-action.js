import { 
    GET_ROLES_RECORDS_FAILURE,
    GET_ROLES_RECORDS_SUCCESS
} from '../constant/action-type';

import { loaderOn , loaderOff  } from '../../../utilities/loader/action/loader-action';
import RoleApi from '../api';

/**
 * @author: shivangi_upadhyay
 * @description: get all roles records in table grid.
 * @argument: no arguments.
 */

export function allRolesRecords() {
    return (dispatch,getState) => {
        dispatch(loaderOn()); 
        getAllRolesRecords(getState().userLoginInfo)
        .then(respnse => {
            afterAllRolesRecordsSuccess(respnse)(dispatch);
        })
        .catch(e => {
            afterAllRolesRecordsFailure(e)(dispatch);
        })
    }
}

export const getAllRolesRecords = (obj) => {
    return RoleApi.getAllRolesRecords(obj).then(response => {
        return response;
    });
}

export const afterAllRolesRecordsSuccess = (response) => {
    return dispatch => {
        console.log('afterAllRolesRecordsSuccess',response);
        dispatch(loaderOff()); 
        dispatch({ type:  GET_ROLES_RECORDS_SUCCESS, payload: { roles : response.data.data } }); 
    }
}

export const afterAllRolesRecordsFailure = (error) => {
    console.log('Error in get all Roles Records action');
    return dispatch => { 
        dispatch(loaderOff());
        dispatch({ type: GET_ROLES_RECORDS_FAILURE, payload: { error } }); 
    }
}



