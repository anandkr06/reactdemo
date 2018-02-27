import React, {Component} from 'react';
import { reduxForm, Field} from 'redux-form';
import '../styles/LoginScreen.css';
import { withRouter } from 'react-router';

const required = value => (value ? undefined : 'Required');
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
                <input {...input} placeholder={label} type={type} className = {className}/>
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
                </div>
            </div>
        );

class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
       }
   
    handleSubmit(data) {
     this.props.history.push("/home");
   }
   
    render(){
        
        const { handleSubmit, pristine, submitting } = this.props 
        return (
            <div>
                <section className="login-container">
                    <div className="left-side">
                        <div className="content-block">
                            <h1><img src={require("../../../images/logo-black.png")} alt="Admin Login" /></h1>
                            <h2>Welcome to the Boutiqaat new admin panel</h2>
                        </div>
                    </div>
                    <div className="right-side">

                    
                            
                        <form className="md-float-material" onSubmit={handleSubmit(this.handleSubmit)}>
                        <h3 className="text-center">
                                Login to your account
                        </h3>
                            <Field className="md-form-control icofont input-font-color" name = "userName" type = "text" label = "User Name" component={renderField}
                            validate={required}/>        
                            <Field className = "md-form-control icofont input-font-color" name = "password" type = "password" label = "Password" component={renderField}
                            validate={required}/> 
                            

                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <input type="submit" disabled={pristine || submitting} value="LOGIN" className="text-center m-b-20" />
                                </div>
                                <div className="col-sm-6 col-xs-12 forgot-phone">
                                    <a href="forgot-password.html" className="f-w-400"> Forget Password?</a>
                                </div>
                            </div>
     
                        </form>
                    
                    </div>
                    {/* <Loader></Loader> */}
                </section>
            </div>
        )
}
}

export default withRouter(reduxForm({
    form: 'loginForm',
    destroyOnUnmount : true                                          
  })(Login))
  