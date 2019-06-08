import React from 'react';
import { connect } from 'react-redux';
import { updateSite } from '../../../actions/site_actions';


class SiteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.name, description: this.props.description, capacity: this.props.capacity, price: this.props.price }
        this.nextForm = this.nextForm.bind(this)
    }

    nextForm() {
        this.props.updateSite("name", this.state.name)
        this.props.updateSite("description", this.state.description)
        this.props.updateSite("capacity", this.state.capacity)
        this.props.updateSite("price", this.state.price)
        location.href = "/#/site_create/location"
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        let next;
        if (this.state.name === "" || this.state.description === "" || this.state.capacity <= 0 || this.state.price <= 0) {
            next = <button className = "site-button-incomplete">Not Done</button>
        } else {
            next = <button className="site-button-complete" onClick={this.nextForm}>Next</button>
        }

        return (
          <div className="site-form">
            <h2 className="site-header">
              Tell us about your site!
            </h2>
            <input
              type="text"
              className="site-input"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Site Name"
            />
            <textarea
              value={this.state.description}
              className="site-input"
              onChange={this.update("description")}
              placeholder="Site Description"
            />
            <div className = "site-nums">
              <input
                type="number"
                className="site-cap"
                min="0"
                placeholder = "Capacity"
                onChange={this.update("capacity")}
              />
              <input
                type="number"
                className="site-cap"
                min="0"
                placeholder="Price Per Night"
                onChange={this.update("price")}
              />
            </div>
            {next}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      name: "",
      description: "",
      capacity: 0,
      price: 0
    };
};

const mapDispatchToProps = dispatch => ({
    updateSite: (key, value) => dispatch(updateSite(key, value))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteForm);