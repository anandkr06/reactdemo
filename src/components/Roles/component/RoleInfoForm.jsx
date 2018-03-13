import React, { Component } from 'react';

//include redux-form
import { reduxForm, Field } from 'redux-form';

//include connection to redux 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//check for required field
const required = value => (value ? undefined : 'Required');

//check for max length field with 256 character limit.
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength256 = maxLength(256);

//check for max length field with 15 character limit.
const maxLength15 = maxLength(15);

//check for minlength field with 6 character limit.
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength6 = minLength(6);

//check for alphabet type check.
const isAlphabet = (value) => value && /[^a-zA-Z]/i.test(value) ? 'Only alphanumeric characters' : undefined;

//import actions for create calls
import { createRoleInfoAction } from "../action/role-action";


import  RoleResources  from './RoleResourcesForm.jsx'; 

const renderField = ({
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
            }) => (
        <div>
            <label>{label}</label>
            <div className="md-input-wrapper">
                <input {...input} placeholder={label} type={type} className={className} />
                {
                    touched &&
                    (
                        (error && <span>{error}</span>) || (warning && <span>{warning}</span>)
                    )
                }
            </div>
        </div>
    );


class RoleInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="col-md-9">
                <label>Role Information</label>
                <form onSubmit={handleSubmit} >
                    <Field name="roleName" type="text"
                        label="Role Information *"
                        component={renderField}
                        validate={[required, isAlphabet, maxLength256]} />

                    <div>
                        <label>Current User Identity Verification</label>
                        <Field name="userPassword" type="password"
                            label="Your Password *"
                            component={renderField}
                            validate={[required, maxLength15, minLength6]} />
                    </div>
                    
                    <div>
                        <RoleResources />
                    </div>

                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     loginInfo: state.userLoginInfo
// });

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createRoleInfoAction
}, dispatch);


RoleInfo = connect(null, mapDispatchToProps)(RoleInfo);


export default reduxForm({
    form: 'roleInfo',
    destroyOnUnmount: false,   // ??? why do we use it?
    onSubmit: (data, dispatch,props) => {
        dispatch(createRoleInfoAction(data));
    }
})(RoleInfo);