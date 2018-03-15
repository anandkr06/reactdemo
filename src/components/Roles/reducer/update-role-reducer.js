import {
    SET_ROLE_EDIT_FORM_DATA,
    UPDATE_ROLE_FAILURE,
    UPDATE_ROLE_SUCCESS
} from '../constant/action-type';

const initialState = {
    editRoleFormData : {},
    error:{}
}

export const setEditRoleFormReducer = ( state = initialState ,action) => {
    switch (action.type) {
      case   SET_ROLE_EDIT_FORM_DATA:
        return {
          ...state,
          editRoleFormData : action.payload.editRoleFormData
        }
  
      default:
        return state
    }
}

export const updateRoleReducer = ( state = initialState ,action) => {
    switch (action.type) {
  
      case  UPDATE_ROLE_FAILURE:
        return {
          ...state,
          error : action.payload.error
        }
  
      default:
        return state
    }
  }



