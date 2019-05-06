import React from 'react';
import { updateSite } from '../../../actions/site_actions';
import {connect} from 'react-redux';

class SiteLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { latitude: this.props.latitude, longitude: this.props.longitude, state: "" };
        this.onClick = this.onClick.bind(this);
        this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    }

    onClick() {
        this.props.updateSite("latitude", this.state.latitude)
        this.props.updateSite("longitude", this.state.longitude)
        this.props.updateSite("state", this.state.state)
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
        if (this.state.latitude === undefined || this.state.longitude === undefined || this.state.state === undefined) {
            next = <button >Not Done</button>
        } else {
            next = <button onClick={this.onClick}>Next</button>
        }

        return (
            <>
                <h2>Where is the site located?</h2>
                <label>latitude
                    <input type="text" value={this.state.latitude} onChange={this.update("latitude")} />
                </label>
                <label>longitude
                    <input type="text" value={this.state.longitude} onChange={this.update("longitude")} />
                </label>
                <label>State:
                        <select className="state-list" onChange={this.update("state")}>
                        {this.states.map((state) => this.renderStateItem(state))}
                    </select>
                </label>
                {next}
            </>
        )

    }
}

const mapStateToProps = ({entities: {create}}) => {
    return {
        name: create.name,
        description: create.description,
        capacity: create.capacity
    };
};


const mapDispatchToProps = dispatch => ({
    updateSite: (key,value) => dispatch(updateSite(key,value))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteLocation);