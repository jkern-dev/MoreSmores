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
        this.props.processForm(user)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                        <label>First Name:
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('first_name')}
                            />
                        </label>
                        <br />
                        <label>Last Name:
                            <input type="text"
                                value={this.state.lastName}
                                onChange={this.update('last_name')}
                            />
                        </label>
                        <br />
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <label>Zip code:
                            <input type="text"
                                value={this.state.zipCode}
                                onChange={this.update('zip_code')}
                            />
                        </label>
                        <br />
                        <label>State:
                            <input type="text"
                                value={this.state.state}
                                onChange={this.update('state')}
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
                        Already have an account? {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default AccountForm;