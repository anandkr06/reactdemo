import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import '../styles/LoginScreen.css';
import { withRouter } from 'react-router';
import LoginApiService from '../api';

//redux and react-redux.
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import utilities
import Loader from '../../../utilities/loader/Loader';

//importing actions
import { login } from '../action/login-action';

//importing encryption 
var md5 = require('md5');
var CryptoJS = require("crypto-js");

//check for required field
const required = value => (value ? undefined : 'Required');

//check for email type field
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined

//check for max length field
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15);

//check for minlength field.
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength6 = minLength(6);

const renderField = ({
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
            }) => (
            <div className="md-input-wrapper">
                <input {...input} placeholder={label} type={type} className={className} />
                {touched &&
                    ((error && <span className="input-font-validation-message-color">{error}</span>) ||
                        (warning && <span className="input-font-validation-message-color">{warning}</span>))}
            </div>
    );

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        console.log(data);
        event.preventDefault();
        data.userName = 'rohit.bagjani@nagarro.com';
        data.password = 'Test123';
        var ciphertext = CryptoJS.AES.encrypt(data.userName, '0123456789012345');
        console.log('ciphertext',ciphertext.toString());
        var hashedPassword = md5(data.password);
        this.props.requestLogin({ useremail: ciphertext, password: hashedPassword },this.props.history);
        // LoginApiService.getLogin({ }).then((response) => {
        //     console.log('login api call requested with response', response);
        // });
        var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), '0123456789012345');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        console.log('plaintext', plaintext);
        // this.props.history.push("/home");
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <section className="login-container">
                    <div className="left-side">
                        <div className="content-block">
                            <h1><img src={"../../src/images/logo-black.png"} alt="Boutiqaat Logo" /></h1>
                            <h2>Welcome to the Boutiqaat new admin panel</h2>
                        </div>
                    </div>
                    <div className="right-side">
                        <form className="md-float-material" onSubmit={handleSubmit(this.handleSubmit)}>
                            <h3>Login to your account</h3>
                            <Field className="md-form-control icofont input-font-color-shiv"
                                name="userName"
                                type="email"
                                label="User Name"
                                component={renderField}
                                validate={[required, email]}
                            />

                            <Field className="md-form-control icofont input-font-color-shiv"
                                name="password"
                                type="password"
                                label="Password"
                                component={renderField}
                                validate={[required, maxLength15, minLength6]}
                            />


                            <div className="row mt2">
                                <div className="col-sm-6 col-xs-12">
                                    <input
                                        type="submit"
                                        disabled={pristine || submitting}
                                        value="LOGIN"
                                        className="text-center m-b-20"
                                    />

                                </div>
                                <div className="col-sm-6 col-xs-12 forgot-phone">
                                    <a href="forgot-password.html" className="f-w-400"> Forget Password?</a>
                                </div>
                            </div>

                        </form>

                    </div>
                    <Loader></Loader>
                </section>
        )
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    requestLogin : login
}, dispatch)


export default withRouter(reduxForm({
    form: 'loginForm',
    destroyOnUnmount: true
})(connect(null, mapDispatchToProps)(Login)));
