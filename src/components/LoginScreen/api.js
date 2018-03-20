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
        return axios.post(`${Setting.dev.url}bq/v1/login`, { email : obj.useremail , password : obj.password }); 
        //return axios.get(`${Setting.dev5.url}bq/v1/privil/fetch/`)
        // let loginCredential = 'Rom@gmail.com/30wereadf2324';
        // // let loginCredential = `${obj.useremail}/${obj.password}`;
        // return axios.post(`${Setting.dev.url}bq/v1/login/${loginCredential}`);
      //   .then(res =>
      //      { 
      //       return { 
      //         "data" : {
      //           "status": {
      //             "httpStatusCode": 200,
      //             "success": true,
      //             "errors": null
      //           },
      //           "data":   {
      //             "email": "davis.john@gmail.com",
      //               "fstNme": "david",
      //               "lstNme": "john",
      //             "langPref": "English",
      //             "privil": res.data
                  
      //     }
      //   }
      // } 
      //        }
      //     ).catch(err => console.log(err))
    //     return   new Promise((resolve, reject) => resolve(
    //       { 
    //         "data" : {
    //           "status": {
    //             "httpStatusCode": 200,
    //             "success": true,
    //             "errors": null
    //           },
    //           "data":   {
    //             "email": "davis.john@gmail.com",
    //               "fstNme": "david",
    //               "lstNme": "john",
    //             "langPref": "English",
    //             "privil": privilegeData
                
    //     }
    //   }
    // }
    //     ));
        
      }

}


const instance = new LoginApiService();
Object.freeze(instance);

export default instance; 