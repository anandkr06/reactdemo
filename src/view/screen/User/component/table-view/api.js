// import axios from 'axios';
// import Setting from '../../dev-setting/dev-config';

class UserApiService {
    constructor() {
        if (!UserApiService.instance) {
            UserApiService.instance = this;
        }
        return UserApiService.instance;
    }
    getUsers() {
        // return axios.get(`${Setting.dev.url}login/${obj.useremail}/${obj.password}`, { headers: { 'Access-Control-Allow-Origin': '*' } });
        return new Promise((resolve, reject) => resolve(
            {
                "data": {
                    "status": {
                        "httpStatusCode": 200,
                        "success": true,
                        "errors": null
                    },
                    "data": [
                        {
                          "userId": 123,
                          "fstNme": "david",
                          "lstNme": "john",
                          "email": "salted PWD",
                          "pwd": "Md5encriptedPasword",
                          "mapCelebs": [
                            1
                          ],
                          "role": 1,
                          "createdBy": 124,
                          "createdAt": "10-10-2017",
                          "updatedBy": 125,
                          "updatedAt": "10-10-2017",
                          "languagePref": "english",
                          "status": "true"
                        },{
                            "userId": 124,
                            "fstNme": "david",
                            "lstNme": "upen",
                            "email": "salted PWD",
                            "pwd": "Md5encriptedPasword",
                            "mapCelebs": [
                              1
                            ],
                            "role": 1,
                            "createdBy": 124,
                            "createdAt": "10-10-2017",
                            "updatedBy": 125,
                            "updatedAt": "10-10-2017",
                            "languagePref": "english",
                            "status": "true"
                          },{
                            "userId": 126,
                            "fstNme": "Billy",
                            "lstNme": "john",
                            "email": "salted PWD",
                            "pwd": "Md5encriptedPasword",
                            "mapCelebs": [
                              1
                            ],
                            "role": 1,
                            "createdBy": 124,
                            "createdAt": "10-10-2017",
                            "updatedBy": 125,
                            "updatedAt": "10-10-2017",
                            "languagePref": "english",
                            "status": "true"
                          }
                      ]
                }
            }
        )
        );
    }

}


const instance = new UserApiService();
Object.freeze(instance);

export default instance; 