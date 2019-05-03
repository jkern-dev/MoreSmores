import React from 'react';

class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
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
            .then(() => this.props.login(user))
            .then(() => this.props.closeModal()) ;
    }

    renderStateItem(state) {
        return (
            <option value={state}>{state}</option>
        )
    }

    renderErrors() {
        return (
            <ul className="form-errors-list">
                {this.props.errors.map((error, i) => (
                    <li className="form-errors" key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return (
            <div>
                <h2>Join Hipcamp</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
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
                                value={this.state.zipCode}
                                onChange={this.update('zip_code')}
                                placeholder="Zip Code"
                                className="form-input"
                            />
                        <br />
                        <label className="state-input">State: 
                                <select className="state-list" onChange={this.update("state")}>
                                    {this.states.map((state) => this.renderStateItem(state))}
                                </select>
                        </label>        
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email Address"
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
                        <p className="alternative">Already have an account?</p>
                        {this.props.otherForm}
                        <input className="demo-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default AccountForm;