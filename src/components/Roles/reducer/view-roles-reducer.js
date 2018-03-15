import { 
    GET_ROLES_RECORDS_FAILURE,
    GET_ROLES_RECORDS_SUCCESS
} from '../constant/action-type';

const initialState = {
    roleRecords : [],
    error : {},
    viewRolesColumns : [{
        Header: 'Id',
        accessor: 'roleId' // String-based value accessors!
      },{
        Header: 'Role',
        accessor: 'roleNme' // String-based value accessors!
        ,id : 'role'
      },{
        id : 'allowedScope',
        Header: 'Allowed Scope',
        accessor: b => b.store[0].mapChilds[0].storeId ? 'All' : 'Custom' // String-based value accessors!
      }]
}

export const roleRecordsReducer = ( state = initialState ,action) => {
    switch (action.type) {
      case  GET_ROLES_RECORDS_SUCCESS:
        return {
          ...state,
          roleRecords : action.payload.roles
        }
  
      case  GET_ROLES_RECORDS_FAILURE:
        return {
          ...state,
          roleRecords : [],
          error : action.payload.error
        }
  
      default:
        return state
    }
  }

