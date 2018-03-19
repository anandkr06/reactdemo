import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import axios from 'axios';
import {Multiselect, DropdownList} from 'react-widgets';
import { createUserAction, fetchCelebrityListAction, fetchAllLocaleListAction, editUserFormAction, updateUserAction, fetchAllRoleListAction } from '../action/UserAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import form utilities
import Alert from '../../../utilities/alert/Alert';
import Loader from '../../../utilities/loader/Loader';

class UserForm extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        (this.props.location.state) && this.props.editUserFormAction(this.props.location.state.data);
        this.props.fetchCelebrityListAction();
        this.props.fetchAllLocaleListAction();
        this.props.fetchAllRoleListAction();
    }

    render(){
        let data = [];
		for (let i = 0; i < this.props.allRoleList.length; i++){
			let roleId = this.props.allRoleList[i].roleId;
			let roleName = this.props.allRoleList[i].roleNme;
    		data.push({["label"] : roleName, ["val"] : roleId});
        }
        const { handleSubmit } = this.props 

        return(
            <div className="col-md-9">
                <label>Account Information</label>
            <form onSubmit={handleSubmit}>
                <Field name = "fstNme" type = "text" label = "First Name" component={renderField}
                 validate = {[required, isAlphabet]}/>        
                <Field name = "lstNme" type = "text" label = "Last Name" component={renderField}
                 validate = {[required, isAlphabet]}  />        
                <Field name = "email" type = "email" label = "Email" component={renderField}
                 validate = {[required, isValidEmail]} disabled = {!(this.props.initialValues instanceof Array || typeof this.props.initialValues === 'undefined')}    />        
                {(this.props.initialValues instanceof Array || typeof this.props.initialValues === 'undefined') ? 
                    (<div>
                <Field name = "pwd" type = "password" label = "Password" component={renderField}
                 validate = {required} />        
                <Field name = "passwordConfirm" type = "email" label = "Confirm Password" component={renderField}
                    validate={[required,doPasswordMatch]}/> 
                    </div>)
                : ('')}
                <div>
                     <label>Map Celebrity</label>
                     <Field
                        placeholder = "Select Celebrity"
                        name="mapCelebs"
                        component={renderMultiselect}
                        valueField='celebId'
                        textField='celebNme'
                        data={this.props.celebrityList}
                        />
                </div>           
                <div>
                    <label>Interface Locale</label>
                    <div>
                    <Field
                        placeholder = "Select Locale"
                        name="languagePref"
                        valueField='langId'
                        textField='i18Lang'
                        component={renderDropdownList}
                        data={this.props.allLocaleList}
                        validate = {required}
                        />
                    </div>
                </div>
                <div>
                    <label>This Account is</label>
                    <div>
                    <Field
                        placeholder = "Select Account Status"
                        name="status"
                        valueField='id'
                        textField='text'
                        component={renderDropdownList}
                        data={accountStatus}
                        validate = {required}
                        />
                    </div>
                </div>
                <div>
                    <label>User Role</label>
                    <div>
                    <Field
                        placeholder = "Select Role"
						textField = {"label"}
						valueField = {"val"}
                        name="role"
                        component={renderDropdownList}
                        data={data}
                        validate = {required}
                        />
                    </div>
                </div>
            </form>
            <div>
                <label>Current User Identity Verification</label>                    
                    <Field name = "userPassword" type = "password" label = "Your Password" component={renderField}
                    /> 
                </div>
                <Alert />
                <Loader />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    createUserAction, 
    fetchCelebrityListAction, 
    fetchAllLocaleListAction, 
    editUserFormAction,
    updateUserAction,
    fetchAllRoleListAction
}, dispatch)
}

const mapStateToProps = (state) => {
  return {
      celebrityList : state.celebrityList.celebrityList,
      allLocaleList : state.allLocaleList.allLocaleList,
      initialValues : state.editFormData.editFormData,
      allRoleList  : state.allRoleList.allRoleList
  };
}




UserForm = reduxForm({
        form: 'userForm',
        destroyOnUnmount : false,
        keepDirtyOnReinitialize  : true,
        enableReinitialize: true,
        onSubmit: (data, dispatch, props) => {
            !data.userId && dispatch(createUserAction(data));
            data.userId && dispatch(updateUserAction(data));
        }
    })(UserForm)

    UserForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
    export default UserForm;

        const required = value => (value ? undefined : 'Required')
        const isValidEmail = value =>
            value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? 'Invalid email address'
            : undefined
        const isAlphabet = (value) =>
            value && /[^a-zA-Z]/i.test(value)
            ? 'Only alphanumeric characters'
            : undefined
        
        const doPasswordMatch = (fieldValue, allFieldValues) =>
        (fieldValue != allFieldValues.pwd) 
        ? 'Password and confirm password does not match!!!'
        : undefined    
            
        const renderField = ({
            input,
            label,
            type,
            style,
            disabled,
            meta: { touched, error, warning }
            }) => (
            <div style = {style}>
                <label>{label}</label>
                <div>
                <input {...input} placeholder={label} type={type} style = {style} disabled = {disabled}/>
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
                </div>
            </div>
        );

        const renderMultiselect = ({ input, data, valueField, textField, placeholder }) =>
            <Multiselect {...input}
                onBlur={() => input.onBlur()}
                value={input.value || []} // requires value to be an array
                data={data}
                valueField={valueField}
                textField={textField}
                placeholder = {placeholder}
            />
        
        const renderDropdownList = ({ input, data, valueField, textField, placeholder,  meta: { touched, error, warning }
         }) =>
                (<div>
                <DropdownList {...input}
                    data={data}
                    valueField={valueField}
                    textField={textField}
                    placeholder={placeholder || null} />
                    {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
                </div>
                );

        const  accountStatus = [
            {
                "id":1,
                "text": "Active"
            },
            {
                "id":0,
                "text": "Inactive"
            }
        ];
