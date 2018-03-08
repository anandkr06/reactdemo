import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../login.css';
import { push } from 'react-router-redux';

//import utilities
import Loader from '../../utilities/loader/Loader';

//importing actions
import { login } from '../action/login-action';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useremail: "", password: ""
        }
        this.setEmailInput = this.setEmailInput.bind(this);
        this.setPasswordInput = this.setPasswordInput.bind(this);
    };


    submitLogin = (event) => {
        event.preventDefault();
        this.props.requestLogin({...this.state});
    }  

    setEmailInput(event) {
        this.setState({
            useremail: event.target.value
        });
    }

    setPasswordInput(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div>
                <section className="login-container">
                    <div className="left-side">
                        <div className="content-block">
                            <h1><img src={require("../../images/logo-black.png")} alt="Admin Login" /></h1>
                            <h2>Welcome to the Boutiqaat new admin panel</h2>
                        </div>
                    </div>
                    <div className="right-side">
                        <form className="md-float-material">
                            <h3 className="text-center">
                                Login to your account
                 </h3>
                            <div className="md-input-wrapper">
                                <input type="email" className="md-form-control icofont input-font-color" onChange={this.setEmailInput} value={this.state.useremail} placeholder="User Name *" required />
                                {/* <div style={display: isEmailValid ? 'block' : 'none'}>Please enter correct email Id.</div> */}
                                {/* <div style={display: isEmailRequired ? 'block' : 'none'}>Please enter your email Id.</div>                         */}
                                <input type="password" className="md-form-control icofont input-font-color" onChange={this.setPasswordInput} value={this.state.password} placeholder="Password *" required />
                                {/* <div style={display: isPasswordRequired ? 'block' : 'none'}>Please enter password.</div> */}
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    {/* <button className="text-center m-b-20" onClick={}>
                                        LOGIN
                                    </button> */}
                                    <input type="submit" value="LOGIN" className="text-center m-b-20" onClick={(e) => this.submitLogin(e)} />
                                </div>
                                <div className="col-sm-6 col-xs-12 forgot-phone">
                                    <a href="forgot-password.html" className="f-w-400"> Forget Password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Loader></Loader>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changePage: () => push('/view'),
    requestLogin : login
}, dispatch)

export default connect()(Login)