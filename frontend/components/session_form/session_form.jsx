import React from 'react';
// import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.demo_email = "smores@moresmores.com"
        this.demo_pwd = "moresmores"
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.closeModal();
        this.props.processForm(user);   
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({
            email: "smores@moresmores.com",
            password: "moresmores"
        });
        this.props.closeModal();

    }

    render() {
        return (
            <div className = "form-content">
                <h2>Welcome back!</h2>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                            <input type="text"
                                value={this.state.email}                    
                                onChange = {this.update('email')}
                                placeholder = "Email address.."
                                className = "form-input"
                                id = "email"
                            />
                        <br /> 
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder = "Password.."
                                className="form-input"
                                id = 'pwd'
                            />
                        <p className="alternative">Don't have an account?</p>
                        {this.props.otherForm}
                        <button onClick= {this.demoLogin} className="form-input">Demo Login</button>
                        <input type="submit" value={this.props.formType} className = "submit-button"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;