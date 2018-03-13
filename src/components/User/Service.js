import axios from 'axios';
import Setting from '../../dev-setting/dev-config';

class Service {
      
    createUser(obj){
        
        return axios.post(`${Setting.dev2.url}bq/v1/user/create`,
           
              obj,
          
          {
            headers: { 'Content-Type': 'application/json' }
          }
      );
    }

    updateUser(obj){
        obj.userId = 15;
        return axios.put(`${Setting.dev2.url}bq/v1/user/update/${obj.userId}`,
           
              obj,
          
          {
            headers: { 'Content-Type': 'application/json' }
          }
      );
    }

    getCelebrityList(){
        return axios.get(`${Setting.dev2.url}bq/v1/celebs/fetch/`
      );
    }

    getAllLocaleList(){
        return axios.get(`${Setting.dev3.url}bq/v1/lang/fetch/`
      );
    }

    getAllUserList(){
        //return axios.get(`${Setting.dev2.url}bq/v1/user/fetch/`
        return   new Promise((resolve, reject) => resolve(
         [{
            "userId": 111,
            "fstNme": "Brijesh",
            "lstNme": "Singh",
            "email": "Brijesh@Singh.com",
            "mapCelebs": [{
                    "celebId": 97,
                    "celebNme": "Alaa Dashti Boutique"
                },
                {
                    "celebId": 98,
                    "celebNme": "Zori Boutique"
                }
            ],
            "role": 1,
            "createdBy": 1,
            "createdAt": "2018-02-27T15:25:14+05:30",
            "updatedBy": 1,
            "updatedAt": "2018-02-27T15:25:14+05:30",
            "languagePref": {
                "langId": 1,
                "i18Lang": "English",
                "locale": "avchavd"
            },
            "status": 1
        },
        {
            "userId": 9,
            "fstNme": "Kaushal",
            "lstNme": "Singh",
            "email": "Kaushal@test.com",
            "mapCelebs": [{
                    "celebId": 97,
                    "celebNme": "Alaa Dashti Boutique"
                },
                {
                    "celebId": 98,
                    "celebNme": "Zori Boutique"
                }
            ],
            "role": 1,
            "createdBy": 1,
            "createdAt": "2018-02-27T15:25:14+05:30",
            "updatedBy": 1,
            "updatedAt": "2018-02-27T15:25:14+05:30",
            "languagePref": {
                "langId": 1,
                "i18Lang": "English",
                "locale": "avchavd"
            },
            "status": 1
        },
        {
            "userId": 5,
            "fstNme": "Suresh",
            "lstNme": "Singh",
            "email": "suresh@test.com",
            "mapCelebs": [{
                    "celebId": 97,
                    "celebNme": "Alaa Dashti Boutique"
                },
                {
                    "celebId": 98,
                    "celebNme": "Zori Boutique"
                }
            ],
            "role": 1,
            "createdBy": 1,
            "createdAt": "2018-02-27T15:25:14+05:30",
            "updatedBy": 1,
            "updatedAt": "2018-02-27T15:25:14+05:30",
            "languagePref": {
                "langId": 1,
                "i18Lang": "English",
                "locale": "avchavd"
            },
            "status": 1
        },
        {
            "userId": 12,
            "fstNme": "ramesh",
            "lstNme": "Singh",
            "email": "ramesh@test.com",
            "mapCelebs": [{
                    "celebId": 97,
                    "celebNme": "Alaa Dashti Boutique"
                },
                {
                    "celebId": 98,
                    "celebNme": "Zori Boutique"
                }
            ],
            "role": 1,
            "createdBy": 1,
            "createdAt": "2018-02-27T15:25:14+05:30",
            "updatedBy": 1,
            "updatedAt": "2018-02-27T15:25:14+05:30",
            "languagePref": {
                "langId": 1,
                "i18Lang": "English",
                "locale": "avchavd"
            },
            "status": 1
        },
        {
            "userId": 2,
            "fstNme": "suresh",
            "lstNme": "bhaati",
            "email": "suresh@test.com",
            "mapCelebs": [{
                    "celebId": 97,
                    "celebNme": "Alaa Dashti Boutique"
                },
                {
                    "celebId": 98,
                    "celebNme": "Zori Boutique"
                }
            ],
            "role": 1,
            "createdBy": 1,
            "createdAt": "2018-02-27T15:25:14+05:30",
            "updatedBy": 1,
            "updatedAt": "2018-02-27T15:25:14+05:30",
            "languagePref": {
                "langId": 1,
                "i18Lang": "English",
                "locale": "avchavd"
            },
            "status": 1
        }]
    ));
}
}
export default Service; 