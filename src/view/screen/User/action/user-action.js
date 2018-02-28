import { GET_ALL_USER_SUCCESS,GET_ALL_USER_FAILED } from "../constant/user-action-constant";
import UserApiService from '../component/table-view/api';
import { loaderOn, loaderOff } from '../../../../utilities/loader/action/loader-action';


export const getAllUser = () => {
    return dispatch => {
           dispatch(loaderOn());
           debugger;
        UserApiService.getUsers().then(response => {
            debugger;
            dispatch(loaderOff());
            dispatch({ type: GET_ALL_USER_SUCCESS, payload: { usersList: response.data.data } });
        }).catch((e) => {
            dispatch(loaderOff());
            dispatch({ type: GET_ALL_USER_FAILED, payload: { error: e } });
        })
    }
}