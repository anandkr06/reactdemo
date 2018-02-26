import axios from 'axios';
import Setting from '../dev-setting/dev-config';

class LoginApiService {
    constructor(){
        if (!LoginApiService.instance) {
            LoginApiService.instance = this;
        }
        return LoginApiService.instance;
    }
    getLogin(obj){
        // return axios.get(`${Setting.dev.url}login/${obj.useremail}/${obj.password}`, { headers: { 'Access-Control-Allow-Origin': '*' } });
        return   new Promise((resolve, reject) => resolve(
            { 
              "data" : {
                "status": {
                  "httpStatusCode": 200,
                  "success": true,
                  "errors": null
                },
                "data":   {
                  "email": "davis.john@gmail.com",
                  "privil": [
                    {
                      "privil_id": 11,
                      "privil_Names": "Dashboard",
                      "sub_heading": "Permissions",
                      "refUrl": "/dashboard",
                      "children": []
                    },
                    {
                      "privil_id": 12,
                      "privil_Names": "System",
                      "sub_heading": "Permissions",
                      "refUrl": "/system",
                      "children": [
                        {
                          "privil_id": 121,
                          "privil_Names": "Create Roles",
                          "refUrl": "/system/createRole",
                          "children": []
                        },
                        {
                          "privil_id": 122,
                          "privil_Names": "View Roles",
                          "refUrl": "/system/viewRole",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              } 
         }
        )
      );  
    }

}


const instance = new LoginApiService();
Object.freeze(instance);

export default instance; 