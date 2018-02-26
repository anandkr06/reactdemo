import { LOGIN_REQUESTED, LOGIN_FAILED, LOGIN_SUCCESS } from '../constant/action-type';
import LoginApiService from '../api';
import { push } from 'react-router-redux';
import { loaderOn , loaderOff  } from '../../shared-utilities/loader/action/loader-action';

export function login(loginCredentialObject) {
    return (dispatch,getState) => {
        dispatch(loaderOn()); 
        makeLoginRequest(loginCredentialObject)
        .then(respnse => {
            afterLoginSuccess(respnse)(dispatch);
        })
        .catch(e => {
            afterLoginFailure(e)(dispatch);
        })
    }
}

export const afterLoginSuccess = (response) => {
    return dispatch => {
        dispatch({ type: LOGIN_SUCCESS, payload: { loginUser: { email: response.email }, navigationMenu: response.privil } })
        dispatch(push('/view'));
        dispatch(loaderOff()); 
    }
}

export const afterLoginFailure = (error) => {
    return dispatch => dispatch({ type: LOGIN_FAILED, payload: { error } });
}

export const makeLoginRequest = (obj) => {
    return LoginApiService.getLogin(obj).then(response => {
        return response.data.data;
    });
}
