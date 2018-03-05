import  { 
  GET_ALL_USER_FAILED ,
  GET_ALL_USER_SUCCESS ,
  SAVE_SEARCH_FILTER_TAGS ,
  RESET_SEARCH_FILTER_TAGS 
 } from '../constant/user-action-constant';

const initialUserListState = {
usersList: null,
userListError : null
}

const initialUserViewState  = {
filterTagsData : {
 id: "",
 firstName : "",
 lastName : "",
 email:"",
 status:""
},
resetFilterTag : true
}



export const userListReducer = (state = initialUserListState, action) => {
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

export const saveFiltersTagsOnGridReducer = (state = initialUserViewState,action) => {
switch (action.type) {
 case SAVE_SEARCH_FILTER_TAGS :
   return {
     ...state,
     filterTagsData : action.payload.searchFilterTagsOnViewUserGrid,
     resetFilterTag : false
   }

 case RESET_SEARCH_FILTER_TAGS :
   return {
     ...state,
     filterTagsData : {
         id: "",
         firstName : "",
         lastName : "",
         email:"",
         status:""
   },
   resetFilterTag : true
   }

 default:
   return state
}
} 

//   export const searchByFilterMapReducer = (state = initialUserViewState, action) => {
//     switch (action.type) {
//       case SAVE_SEARCH_FILTER_TAGS :
//         return {
//           ...state,
//           usersList : action.payload.usersList
//         }

//       case RESET_SEARCH_FILTER_TAGS :
//         return {
//           ...state,
//           userListError : action.payload.error
//         }

//       default:
//         return state
//     }
//   }
