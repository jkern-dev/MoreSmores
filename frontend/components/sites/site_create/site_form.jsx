import React from 'react';
import { connect } from 'react-redux';
import { updateSite } from '../../../actions/site_actions';


class SiteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.name, description: this.props.description, capacity: this.props.capacity }
        this.nextForm = this.nextForm.bind(this)
    }

    nextForm() {
        this.props.updateSite("name", this.state.name)
        this.props.updateSite("description", this.state.description)
        this.props.updateSite("capacity", this.state.capacity)
        location.href = "/#/site_create/location"
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    render() {
        let next;
        if (this.state.name === undefined || this.state.description === undefined) {
            next = <button >Not Done</button>
        } else {
            next = <button onClick={this.nextForm}>Next</button>
        }

        return (
            <>
                <h2>Give a Title and Description</h2>
                <label>Title
                    <input type="text" value={this.state.name} onChange={this.update("name")} />
                </label>
                <label>Description
                    <textarea value={this.state.description} onChange={this.update("description")} />
                </label>
                <label>Capacity:
                        <input type="number" value={this.state.capacity} min="0" onChange={this.update("capacity")} />
                </label>
                {next}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        // nextPage: site.nextPage
    };
};

const mapDispatchToProps = dispatch => ({
    updateSite: (key, value) => dispatch(updateSite(key, value))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteForm);