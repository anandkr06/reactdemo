import  { GET_ALL_USER_FAILED , GET_ALL_USER_SUCCESS } from '../constant/user-action-constant';


const initialState = {
    usersList: null,
    userListError : null
  }

export const userListReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_USER_SUCCESS :
        return {
          ...state,
          usersList : action.payload.usersList
        }
  
      case GET_ALL_USER_FAILED :
        return {
          ...state,
          userListError : action.payload.error
        }
  
      default:
        return state
    }
  }
  