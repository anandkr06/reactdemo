import { 
    GET_ALL_USER_SUCCESS, 
    GET_ALL_USER_FAILED, 
    GET_SEARCH_BY_FILTERMAP_FAILED,
    GET_SEARCH_BY_FILTERMAP_SUCCESS,
    SAVE_SEARCH_FILTER_TAGS,
    RESET_SEARCH_FILTER_TAGS 
} from "../constant/user-action-constant";
import UserApiService from '../component/table-view/api';
import { loaderOn, loaderOff } from '../../../../utilities/loader/action/loader-action';


export const getAllUser = () => {
    return dispatch => {
           dispatch(loaderOn());
        UserApiService.getUsers().then(response => {
            dispatch({ type: GET_ALL_USER_SUCCESS, payload: { usersList: response.data.data } });
            dispatch(loaderOff());
        }).catch((e) => {
            dispatch({ type: GET_ALL_USER_FAILED, payload: { error: e } });
            dispatch(loaderOff());
        })
    }
}

export const saveFilterTagsOnGrid = (filterTagsObj) => {
    return dispatch => {
        dispatch({ type: SAVE_SEARCH_FILTER_TAGS , payload: { searchFilterTagsOnViewUserGrid : filterTagsObj }});
    }
}

export const resetFilterTagsOnGrid = () => {
    return dispatch => {
        dispatch({ type: RESET_SEARCH_FILTER_TAGS });
    }
}

export const searchByFilter = (filterMap) => {
    return dispatch => {
        dispatch(loaderOn());
        UserApiService.getUsersByFilterMap(filterMap).then((response) => {
            dispatch({ type: GET_ALL_USER_SUCCESS , payload : { usersList : response.data.data }} );
            dispatch(loaderOff());
        }).catch((error) => {
            dispatch({ type: GET_ALL_USER_FAILED , payload : { error }} );
            dispatch(loaderOff());
        })
    }
}
