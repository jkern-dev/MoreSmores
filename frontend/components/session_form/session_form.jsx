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
            <ul className = "form-errors-list">
                {this.props.errors.map((error, i) => (
                    <li className = "form-errors" key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return (
            <div className = "form-content">
                <h2>Welcome back!</h2>
                
                <form className = "auth-form" onSubmit = {this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                            <input type="text"
                                value={this.state.email}                    
                                onChange = {this.update('email')}
                                placeholder = "Email address"
                                className = "form-input"
                                id = "email"
                            />
                        <br /> 
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder = "Password"
                                className="form-input"
                                id = 'pwd'
                            />
                        <br />
                        <p className="alternative">Don't have an account? {this.props.otherForm}</p>
                        
                        <input type="submit" value={this.props.formType} className = "demo-button"/>
                        <button onClick={this.demoLogin} className="demo-button">Demo Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;