import { loaderOn , loaderOff  } from '../../../utilities/loader/action/loader-action';
import { 
      CREATE_ROLE_REQUEST,
      CREATE_ROLE_FAILURE,
      CREATE_ROLE_SUCCESS,

      ROLE_RESOURCES_SUCCESS,
      ROLE_RESOURCES_FAILURE,
      
      ROLE_SCOPES_FAILURE,
      ROLE_SCOPES_SUCCESS,
    
      ROLE_SELECTED_SCOPES,
      ROLE_RESET_SCOPES,

      ROLE_SELECTED_RESOURCES,
      ROLE_RESET_RESOURCES

    } from '../constant/action-type';
import RoleApi from '../api';
import { alertHide , alertShow } from '../../../utilities/alert/action/alert-action';
import { reset } from 'redux-form';



/**
 * @author: shivangi_upadhyay
 * @description: making a call and store a response in redux for role.
 * @argument: form data
 */
export function createRoleInfoAction(data) {
    console.log('create role data ',data);
    return (dispatch,getState) => {
        console.log('create getState data ',getState().userLoginInfo);
        dispatch(loaderOn()); 
        makeRoleCreationRequest(prepareRoleObject(data,getState))
        .then(respnse => {
            afterRoleCreationSuccess(respnse)(dispatch);
            resetSelectedResources()(dispatch);
            resetSelectedScopes()(dispatch);
        })
        .catch(e => {
            afterRoleCreationFailure(e)(dispatch);
        })
    }
}

const prepareRoleObject = (data,getState) => {
    let obj = { 
        'roleNme' : data.roleName,
        'store': getState().selectedRoleScopes.selectedScopes.length > 0 ? getState().selectedRoleScopes.selectedScopes : [{ 'children' : [ { 'storeId' : -1 } ] }],
        'privilege':  getState().selectedRoleResources.selectedResources > 0 ? getState().selectedRoleResources.selectedResources : [{ 'privilId' :-1 }] ,
        'createdBy' : getState().userLoginInfo.loginUser.id || 15,
        'updatedBy' : 0
    };
    // let obj =  {
    //     "roleNme": data.roleName,
    //     "store": [
    //       {
    //         "cntryId": 1,
    //         "children": [
    //           {
    //             "storeId": 1
    //           }
    //         ]
    //       }
    //     ],
    //     "privilege": [
    //            {
    //               "privilId": 3,
    //               "children": []
    //           },
    //           {
    //               "privilId": 4,
    //               "children": []
    //           }
    //       ],
    //     "createdBy": 15,
    //     "updatedBy": 0
    //   } 
    console.log('create role sending json',Jobj);
    return obj;
}


export const makeRoleCreationRequest = (obj) => {
    return RoleApi.addNewRole(obj).then(response => {
        return response;
    });
}


export const afterRoleCreationSuccess = (response, route) => {
    return dispatch => {
        console.log('afterRoleCreationSuccess',response);
        dispatch(reset('roleInfo'));
        dispatch(alertShow({messageType:'Success',content:'Role created successfully.'}));
        dispatch(loaderOff()); 
        setTimeout(
            function(){ 
                dispatch(alertHide());
            }, 3000
        )
    }
}

export const afterRoleCreationFailure = (error) => {
    console.log('Error in role creation action',error);
    return dispatch => { 
        dispatch(reset('roleInfo'));
        dispatch(alertShow({messageType:'Error',content:'Error in role creation action'}));
        dispatch(loaderOff());
        dispatch({ type: CREATE_ROLE_FAILURE, payload: { error } });
        setTimeout(
            function(){ 
                dispatch(alertHide());
            }, 3000
        ) 
    }
}


/**
 * @author: shivangi_upadhyay
 * @description: get privilege data as resource for resource multiselect - tree.
 * @argument: no arguments.
 */

export function nestedResourcesData() {
    return (dispatch,getState) => {
        dispatch(loaderOn()); 
        getResourceData()
        .then(respnse => {
            afterRoleResourcesSuccess(respnse)(dispatch);
        })
        .catch(e => {
            afterRoleResourcesFailure(e)(dispatch);
        })
    }
}

export const getResourceData = () => {
    return RoleApi.getResourceData().then(response => {
        return response;
    });
}

export const afterRoleResourcesSuccess = (response) => {
    return dispatch => {
        console.log('afterRoleResourcesSuccess',response);
        dispatch(loaderOff()); 
        dispatch({ type: ROLE_RESOURCES_SUCCESS, payload: { resources : response.data.data } }); 
    }
}

export const afterRoleResourcesFailure = (error) => {
    console.log('Error in role resources action');
    return dispatch => { 
        dispatch(loaderOff());
        dispatch({ type: ROLE_RESOURCES_FAILURE, payload: { error } }); 
    }
}



/**
 * @author: shivangi_upadhyay
 * @description: get scope data model for scope tree structure.
 * @argument: no arguments.
 */
export function nestedScopesData() {
    return (dispatch,getState) => {
        dispatch(loaderOn()); 
        getScopeData()
        .then(respnse => {
            afterScopesSuccess(respnse)(dispatch);
        })
        .catch(e => {
            afterScopesFailure(e)(dispatch);
        })
    }
}

export const getScopeData = () => {
    return RoleApi.getScopeData().then(response => {
        return response;
    });
}

export const afterScopesSuccess = (response) => {
    return dispatch => {
        console.log('afterScopesSuccess',response);
        dispatch(loaderOff()); 
        dispatch({ type: ROLE_SCOPES_SUCCESS, payload: { scopes : response.data.data } }); 
    }
}

export const afterScopesFailure = (error) => {
    console.log('Error in role scopes action');
    return dispatch => { 
        dispatch(loaderOff());
        dispatch({ type: ROLE_SCOPES_FAILURE, payload: { error } }); 
    }
}

/**
 * @author:shivangi upadhyay.
 * @description:set selected scope data for role.
 */

export function saveSelectedScopes(data) {
    return (dispatch,getState) => {
        dispatch({ type: ROLE_SELECTED_SCOPES, payload: { selectedScopes : data } }); 
    }
}

/**
 * @author:shivangi upadhyay.
 * @description:set selected resources data for role.
 */

export function saveSelectedResources(data) {
    return (dispatch,getState) => {
        dispatch({ type: ROLE_SELECTED_RESOURCES, payload: { selectedResources: data } }); 
    }
}

/**
 * @author:shivangi upadhyay.
 * @description:reset selected resource data to empty object.
 */

export function resetSelectedResources() {
    return (dispatch) => {
        dispatch({ type: ROLE_RESET_RESOURCES }); 
    }
}

/**
 * @author:shivangi upadhyay.
 * @description:reset selected scope data to empty object.
 */

export function resetSelectedScopes() {
    return (dispatch) => {
        dispatch({ type: ROLE_RESET_SCOPES }); 
    }
}

/**
 * @author:shivangi upadhyay
 * @description:reset alert messages and loaders.
 */

export function initAction() {
    return (dispatch) => {
        dispatch(alertHide());
        dispatch(loaderOff());          
    }
}

 




