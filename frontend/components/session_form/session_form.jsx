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
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // this.props.closeModal();
        this.props.processForm(user).then(() => this.props.closeModal());   
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({
            email: "smores@moresmores.com",
            password: "moresmores"
        });
        this.props.closeModal();
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className = "form-content">
                <h2>Welcome back!</h2>
                {this.renderErrors()}
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
                        <input type="submit" value={this.props.formType} className = "submit-button"/>
                        <button onClick={this.demoLogin} className="demo-button">Demo Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;