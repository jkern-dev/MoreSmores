import React from 'react';
import { updateSite } from '../../../actions/site_actions';
import { connect } from 'react-redux';

class SiteActivities extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fire_allowed: false, rv_allowed: false, pet_allowed: false, bike_activity: false, hike_activity: false };
        this.nextForm = this.nextForm.bind(this);
    }

    nextForm() {
        this.props.updateSite("fire_allowed", this.state.fire_allowed)
        this.props.updateSite("rv_allowed", this.state.rv_allowed)
        this.props.updateSite("pet_allowed", this.state.pet_allowed)
        this.props.updateSite("bike_activity", this.state.bike_activity)
        this.props.updateSite("hike_activity", this.state.hike_activity)
        location.href = "/#/site_create/photo"
    }

    update(type) {
        return e => this.setState({
            [type]: !this.state[type]
        })
    }

    render() {
        let next = (
          <button
            className="site-button-complete"
            onClick={this.nextForm}
          >
            Next
          </button>
        );

        return (
          <div className="site-form">
            <h2 className="site-header">What amentities are closeby?</h2>
            <label className="site-input">
              Campfires?
              <input
                type="checkbox"
                className="site-input"
                value={this.state.fire_allowed}
                onChange={this.update("fire_allowed")}
              />
            </label>
            <br />
            <label className="site-input">
              RV Parking?
              <input
                type="checkbox"
                className="site-input"
                value={this.state.rv_allowed}
                onChange={this.update("rv_allowed")}
              />
            </label>
            <br />
            <label className="site-input">
              Pets Encouraged?
              <input
                type="checkbox"
                className="site-input"
                value={this.state.pet_allowed}
                onChange={this.update("pet_allowed")}
              />
            </label>
            <br />
            <label className="site-input">
              Hiking?
              <input
                type="checkbox"
                className="site-input"
                value={!this.state.hike_activity}
                onChange={this.update("hike_activity")}
              />
            </label>
            <br />
            <label className="site-input">
              Biking?
              <input
                type="checkbox"
                className="site-input"
                value={!this.state.bike_activity}
                onChange={this.update("bike_activity")}
              />
            </label>
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
        latitude: create.latitude,
        longitude: create.longitude,
        state: create.state
    };
};


const mapDispatchToProps = dispatch => ({
    updateSite: (key, value) => dispatch(updateSite(key, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteActivities);