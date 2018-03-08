import { LOGIN_REQUESTED, LOGIN_FAILED, LOGIN_SUCCESS } from '../constant/action-type';
import LoginApiService from '../api';
import { push } from 'react-router-redux';
import { loaderOn , loaderOff  } from '../../../utilities/loader/action/loader-action';

export function login(loginCredentialObject, route) {
    return (dispatch,getState) => {
        dispatch(loaderOn()); 
        makeLoginRequest(loginCredentialObject)
        .then(respnse => {
            afterLoginSuccess(respnse, route)(dispatch);
        })
        .catch(e => {
            afterLoginFailure(e)(dispatch);
        })
    }
}

export const afterLoginSuccess = (response, route) => {
    return dispatch => {
        dispatch({ type: LOGIN_SUCCESS, 
            payload: 
                   { 
                       loginUser: { 
                                    email: response.email,
                                    name: `${response.fstNme}  ${response.lstNme}` 
                                  } ,
                       navigationMenu: response.privil 
                   } 
            })
        // dispatch(push('/home'));
        dispatch(loaderOff()); 
        route.push('/home');
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
