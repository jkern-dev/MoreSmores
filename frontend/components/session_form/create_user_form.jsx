import React from 'react';

class AccountForm extends React.Component {
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
        this.props.closeModal();
        this.props.processForm(user);
        this.props.login(user);
    }

    render() {
        return (
            <div>
                <h2>Join Hipcamp</h2>
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('first_name')}
                                placeholder="First Name"
                                className="form-input"
                            />
                        <br />
                            <input type="text"
                                value={this.state.lastName}
                                onChange={this.update('last_name')}
                                placeholder="Last Name"
                                className="form-input"
                            />
                        <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email Address"
                                className="form-input"
                            />
                        <br />
                            <input type="text"
                                value={this.state.zipCode}
                                onChange={this.update('zip_code')}
                                placeholder="Zip Code"
                                className="form-input"
                            />
                        <br />
                            <input type="text"
                                value={this.state.state}
                                onChange={this.update('state')}
                                placeholder="State"
                                className="form-input"
                            />
                        <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                className="form-input"
                            />
                        <br />
                        <input className="submit-button" type="submit" value={this.props.formType} />
                        <br />
                        Already have an account? {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default AccountForm;