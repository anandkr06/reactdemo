import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';


class UserForm extends Component{

    render(){
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
        return(
            <div>
                <label>Account Information</label>
            <form>
                <Field name = "userName" type = "text" label = "User Name" component={renderField}
                 validate={required}/>        
                <Field name = "firstName" type = "text" label = "First Name" component={renderField}
                 validate={[required, alphaNumeric]}/>        
                <Field name = "lastName" type = "text" label = "Last Name" component={renderField}
                     validate={[required, alphaNumeric]}/>        
                <Field name = "email" type = "email" label = "Email" component={renderField}
                     validate={[required, email]}/>        
                <Field name = "password" type = "password" label = "Password" component={renderField}
                     validate={required}/>        
                <Field name = "passwordConfirm" type = "email" label = "Confirm Password" component={renderField}
                     validate={required}/>        
                <div>
                    <label>Interface Locale</label>
                    <div>
                    <Field name="interfaceLocale" component="select">
                        <option value="English-US">English(United States)/English(United States)</option>
                        <option value="Arab-Arabi">Arabi(Arab)/Arabi(Arabi)</option>
                    </Field>
                    </div>
                </div>
                <div>
                    <label>This Account is</label>
                    <div>
                    <Field name="accountStatus" component="select">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
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
    destroyOnUnmount : false
                                            
  })(UserForm)