import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import axios from 'axios';
import Multiselect from 'react-widgets/lib/Multiselect'

class UserForm extends Component{

//     constructor(props){
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//        }
   
//     handleSubmit(data) {
//      copnsole.log(data);
//    }

    render(){
        const { handleSubmit } = this.props 
        return(
            <div className="col-md-9">
                <label>Account Information</label>
            <form onSubmit={handleSubmit}>
                <Field name = "userId" type = "text" label = "User Name" component={renderField}
                 validate={required}/>        
                <Field name = "fstNme" type = "text" label = "First Name" component={renderField}
                 validate={[required, alphaNumeric]}/>        
                <Field name = "lstNme" type = "text" label = "Last Name" component={renderField}
                     validate={[required, alphaNumeric]}/>        
                <Field name = "email" type = "email" label = "Email" component={renderField}
                     validate={[required, email]}/>        
                <Field name = "pwd" type = "password" label = "Password" component={renderField}
                     validate={required}/>        
                <Field name = "passwordConfirm" type = "email" label = "Confirm Password" component={renderField}
                     validate={required}/>  
                <div>
                     <label>Celebrity</label>
                     <Field
                       name="hobbies"
                       component={Multiselect}
                       defaultValue={[]}
                       onBlur={() => props.onBlur()}
                       data={[ 'a', 'b', 'c' ]}/>
                </div>           
                <div>
                    <label>Interface Locale</label>
                    <div>
                    <Field name="interfaceLocale" component="select">
                        <option value="1">English(United States)/English(United States)</option>
                        <option value="2">Arabi(Arab)/Arabi(Arabi)</option>
                    </Field>
                    </div>
                </div>
                <div>
                    <label>This Account is</label>
                    <div>
                    <Field name="accountStatus" component="select">
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </Field>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'userForm',
    destroyOnUnmount : false,
    onSubmit: (data) => {
        console.log(data);
        axios.post('http://10.175.174.0:8080/bq/v1/user/create', data)
     .then(function(response){
       console.log(response);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });
  }
    //     axios({
    //             method: 'post',
    //             url: 'http://10.175.174.0:8080/bq/v1/user/create',
    //             data: bodyFormData,
    //             config: { headers: {'Content-Type': 'multipart/form-data' }}
    //     })
    // .then(function (response) {
        
    //     console.log(response);
    // })
    // .catch(function (response) {
        
    //     console.log(response);
    // });
            

    // },
                                            
  })(UserForm)

  const required = value => (value ? undefined : 'Required')
        const email = value =>
            value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? 'Invalid email address'
            : undefined
        const alphaNumeric = value =>
            value && /[^a-zA-Z0-9 ]/i.test(value)
            ? 'Only alphanumeric characters'
            : undefined
        const renderField = ({
            input,
            label,
            type,
            meta: { touched, error, warning }
            }) => (
            <div>
                <label>{label}</label>
                <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
                </div>
            </div>
        );