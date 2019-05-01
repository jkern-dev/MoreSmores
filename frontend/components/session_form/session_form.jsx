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
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange = {this.update('email')}
                            />
                        </label>
                        <br /> 
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        <input type="submit" value={this.props.formType} />
                        <br />
                        {/* Please {this.props.formType} or {this.props.otherForm} */}
                        Don't have an account? {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;