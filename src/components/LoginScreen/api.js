import axios from 'axios';
import Setting from '../../dev-setting/dev-config';

class LoginApiService {
    constructor(){
        if (!LoginApiService.instance) {
            LoginApiService.instance = this;
        }
        return LoginApiService.instance;
    }

      
    getLogin(obj){
        obj.useremail = obj.useremail.toString();
        console.log('axios',axios);
        
    //     return axios.post(`${Setting.dev.url}bq/v1/login/${obj.useremail}/${obj.password}`,
    //      { 
    //         headers: { 
    //                     'Access-Control-Allow-Origin': '*' ,
    //                     'Authorization' : 'Basic bXktY2xpZW50OmZvb2Jhcg==',
    //                     'Content-Type' : 'application/x-www-form-urlencoded' 
    //                 },
    //         body: {
    //             'grant_type': "client-credentials"
    //         }
    //     }
    // );
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
                    "fstNme": "david",
                    "lstNme": "john",
                  "langPref": "English",
                  "privil":[
            {
                "privilId": 11,
                "privilNme": "Dashboard",
                "subHeading": "",
                "refUrl": "/dashboard",
                "children": []
            },
            {
              "privilId": 14,
              "privilNme": "System",
              "subHeading": "Permissions",
              "refUrl": "/system",
              "children": [
                {
                  "privilId": 141,
                  "privilNme": "Create User",
                  "refUrl": "/system/createRole",
                  "children": []
                },
                {
                  "privilId": 142,
                  "privilNme": "View User",
                  "refUrl": "/system/viewRole",
                  "children": []
                }
              ]
            },
            {
                "privilId": 12,
                "privilNme": "Sales",
                "subHeading": "",
                "refUrl": "/sales",
                "children": []
              },
            {
              "privilId": 13,
              "privilNme": "Product",
              "subHeading": "",
              "refUrl": "/product",
              "children": []
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