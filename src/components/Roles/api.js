import axios from 'axios';
import Setting from '../../dev-setting/dev-config';

class RoleApiService {
    constructor() {
        if (!RoleApiService.instance) {
            RoleApiService.instance = this;
        }
        return RoleApiService.instance;
    }


    addNewRole(obj) {
        return axios.post(`${Setting.dev2.url}bq/v1/role/create`,obj);
        // return new Promise((resolve, reject) => resolve(
        //     {
        //         "status": {
        //             "httpStatusCode": 200,
        //             "success": true,
        //             "errors": null
        //         }
        //     }
        // ));
    }

    getResourceData() {
        return axios.get(`${Setting.dev2.url}bq/v1/privil/fetch/`);
        // return new Promise((resolve, reject) => resolve(
        //     {
        //         "status": {
        //             "httpStatusCode": 200,
        //             "success": true,
        //             "errors": null
        //         },
        //         "data": [
        //             {
        //                 "privilId": 1,
        //                 "privilNme": "Dashboard",
        //                 "subHeading": "Permissions",
        //                 "refUrl": "/dashboard",
        //                 "children": []
        //             },
        //             {
        //                 "privilId": 2,
        //                 "privilNme": "System",
        //                 "subHeading": "Permissions",
        //                 "refUrl": "/system",
        //                 "children": [
        //                     {
        //                         "privilId": 3,
        //                         "privilNme": "Create Roles",
        //                         "subHeading": "Create role",
        //                         "refUrl": "/system/createRole",
        //                         "children": []
        //                     },
        //                     {
        //                         "privilId": 4,
        //                         "privilNme": "Fetch Roles",
        //                         "subHeading": "View all roles",
        //                         "refUrl": "/system/viewRole",
        //                         "children": []
        //                     },
        //                     {
        //                         "privilId": 6,
        //                         "privilNme": "Create User",
        //                         "subHeading": "",
        //                         "refUrl": "/system/createUser",
        //                         "children": []
        //                     },
        //                     {
        //                         "privilId": 7,
        //                         "privilNme": "View User",
        //                         "subHeading": "",
        //                         "refUrl": "/system/viewUser",
        //                         "children": []
        //                     }
        //                 ]
        //             },
        //             {
        //                 "privilId": 8,
        //                 "privilNme": "Sales",
        //                 "subHeading": "Sales page",
        //                 "refUrl": "/sales",
        //                 "children": []
        //             },
        //             {
        //                 "privilId": 9,
        //                 "privilNme": "Product",
        //                 "subHeading": "Product page",
        //                 "refUrl": "/prodict",
        //                 "children": []
        //             }
        //         ],
        //         "_metaData": {
        //             "urlParams": {},
        //             "apiMetaData": {}
        //         }
        //     }

        // ));
    }

    getScopeData() {
        return axios.get(`${Setting.dev2.url}bq/v1/store/fetch/`);
        // return new Promise((resolve, reject) => resolve(
        //     {
        //         "status": {
        //             "httpStatusCode": 200,
        //             "success": true,
        //             "errors": null
        //         },
        //         "data": [
        //             {
        //                 "cntryId": 11,
        //                 "cntryNme": "Kuwait",
        //                 "children": [
        //                     {
        //                         "storeId": 121,
        //                         "storeNme": "Main Website store"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "cntryId": 13,
        //                 "cntryNme": "Qatar",
        //                 "children": [
        //                     {
        //                         "storeId": 121,
        //                         "storeNme": "Qatar store"
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // )
        // )
    }

    getAllRolesRecords() {
        return axios.get(`${Setting.dev2.url}bq/v1/role/fetch/`);
        // return new Promise((resolve, reject) => resolve(
        //     {
        //         "status": {
        //             "httpStatusCode": 200,
        //             "success": true,
        //             "errors": null
        //         },
        //         "data": [
        //             {
        //                 "roleId": 1,
        //                 "roleNme": "Superviser",
        //                 "store": [
        //                     {
        //                         "cntryId": 1,
        //                         "cntryNme": "Kuwait",
        //                         "mapChilds": [
        //                             {
        //                                 "storeId": 1,
        //                                 "storeNme": "Main Website store"
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         "cntryId": 2,
        //                         "cntryNme": "Qatar",
        //                         "mapChilds": [
        //                             {
        //                                 "storeId": 2,
        //                                 "storeNme": "Qatar Main Website Store"
        //                             }
        //                         ]
        //                     }
        //                 ],
        //                 "privilage": null
        //             },
        //             {
        //                 "roleId": 2,
        //                 "roleNme": "Sub-superviser",
        //                 "store": [
        //                     {
        //                         "cntryId": 1,
        //                         "cntryNme": "Kuwait",
        //                         "mapChilds": [
        //                             {
        //                                 "storeId": 1,
        //                                 "storeNme": "Main Website store"
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         "cntryId": 2,
        //                         "cntryNme": "Qatar",
        //                         "mapChilds": [
        //                             {
        //                                 "storeId": 2,
        //                                 "storeNme": "Qatar Main Website Store"
        //                             }
        //                         ]
        //                     }
        //                 ],
        //                 "privilage": null
        //             }
        //         ]
            
        //     }

        // ));

    }

    updateRole(data) {
        let objectToSend =  Object.assign({}, data);
        console.log(data);
        delete objectToSend['roleId'];
        return axios.put(`${Setting.dev2.url}bq/v1/role/update/${data.roleId}`,objectToSend,{ headers: { 'Content-Type': 'application/json' }} );
        // return new Promise((resolve, reject) => resolve({
        //     "status": {
        //       "httpStatusCode": 200,
        //       "success": true,
        //       "errors": null
        //     }
        // }));
    }
}


const instance = new RoleApiService();
Object.freeze(instance);

export default instance; 