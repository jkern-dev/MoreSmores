import React from 'react';
import { updateSite } from '../../../actions/site_actions';
import {connect} from 'react-redux';

class SiteLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { latitude: "", longitude: "", state: "", city: "" };
        this.onClick = this.onClick.bind(this);
        this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    }

    onClick() {
        this.props.updateSite("latitude", this.state.latitude)
        this.props.updateSite("longitude", this.state.longitude)
        this.props.updateSite("state", this.state.state)
        this.props.updateSite("city", this.state.city)
        location.href = "/#/site_create/activities"
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    renderStateItem(state) {
        return (
            <option key={state} value={state}>{state}</option>
        )
    }

    render() {
        let next;
        if (this.state.latitude === "" || this.state.longitude === "" || this.state.state === "" || this.state.city === "") {
            next = (
              <button className="site-button-incomplete">
                Not Done
              </button>
            );
        } else {
            next = (
              <button
                className="site-button-complete"
                onClick={this.onClick}
              >
                Next
              </button>
            );
        }

        return (
          <div className="site-form">
            <h2 className="site-header">Where is your site?</h2>
            <label>
              State:
              <select
                className="state-list"
                onChange={this.update("state")}
              >
                {this.states.map(state => this.renderStateItem(state))}
              </select>
            </label>
            <input 
              type="text"
              placeholder="City"
              className="site-input"
              value={this.state.city}
              onChange={this.update("city")}
            />
            <br />
            <input
              type="text"
              placeholder="latitude"
              className="site-input"
              value={this.state.latitude}
              onChange={this.update("latitude")}
            />
            <br />
            <input
              type="text"
              placeholder="longitude"
              className="site-input"
              value={this.state.longitude}
              onChange={this.update("longitude")}
            />
            <br />
            {next}
          </div>
        );

    }
}

const mapStateToProps = ({entities: {create}}) => {
    return {
        name: create.name,
        description: create.description,
        capacity: create.capacity,
        price: create.price
    };
};


const mapDispatchToProps = dispatch => ({
    updateSite: (key,value) => dispatch(updateSite(key,value))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteLocation);