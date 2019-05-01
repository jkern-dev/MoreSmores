import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger;
        this.props.closeModal();
        this.props.processForm(user);   
    }

    render() {
        return (
            <div>
                <h2>Welcome back!</h2>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                            <input type="text"
                                value={this.state.email}                    
                                onChange = {this.update('email')}
                                placeholder = "Email address.."
                                className = "form-input"
                            />
                        <br /> 
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder = "Password.."
                                className="form-input"
                            />
                        <br />
                        <input type="submit" value={this.props.formType} className = "submit-button"/>
                        <br />
                        <span>Don't have an account? {this.props.otherForm}</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;