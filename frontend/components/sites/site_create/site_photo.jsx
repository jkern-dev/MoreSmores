import React from 'react';
import { updateSite } from '../../../actions/site_actions';
import { connect } from 'react-redux';
import { createSite } from '../../../actions/site_actions';

class SitePhoto extends React.Component {
    
    constructor(props) {
    
        super(props);
        this.state = { photo: "" };
        this.nextForm = this.nextForm.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    nextForm() {
        this.props.updateSite("photo", this.state.photo)
        const formData = new FormData();
        formData.append('site[name]', this.props.name);
        formData.append('site[description]', this.props.description);
        formData.append('site[capacity]', this.props.capacity);
        formData.append('site[fire_allowed]', this.props.fire_allowed);
        formData.append('site[rv_allowed]', this.props.rv_allowed);
        formData.append('site[pet_allowed]', this.props.pet_allowed);
        formData.append('site[bike_activity]', this.props.bike_activity);
        formData.append('site[hike_activity]', this.props.hike_activity);
        formData.append('site[capacity]', this.props.capacity);
        formData.append('site[latitude]', this.props.latitude);
        formData.append('site[longitude]', this.props.longitude);
        formData.append('site[state]', this.props.state);
        formData.append('site[photo]', this.state.photoFile);
        this.props.createSite(formData)
            .then(this.props.history.push('/sites'));
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }
    

    render() {
        let next = (
          <button
            className="site-button-complete"
            onClick={this.nextForm}
          >
            Submit Site
          </button>
        );

        const photoPreview = (
            <>
                <h3>Photo Preview</h3>
                <img src={this.state.photoUrl} />
            </>
        );

        const preview = this.state.photoUrl ? photoPreview : <p className="site-input">Photo Required!</p>;

        return (
            <div className="site-form">
                <h2 className="site-header">Add a photo to complete your site!</h2>
                {preview}
                <br />
                <input className="site-file" type="file" onChange={this.handleFile} />
                <br />
                {next}
            </div>
        )

    }
}

const mapStateToProps = ({entities: {create}}) => {
    return {
        name: create.name,
        description: create.description,
        capacity: create.capacity,
        latitude: create.latitude,
        longitude: create.longitude,
        state: create.state,
        bike_activity: create.bike_activity,
        fire_allowed: create.fire_allowed,
        hike_activity: create.hike_activity,
        pet_allowed: create.pet_allowed,
        rv_allowed: create.rv_allowed
    };
};


const mapDispatchToProps = dispatch => ({
    updateSite: (key, value) => dispatch(updateSite(key, value)),
    createSite: (site) => dispatch(createSite(site))
});

export default connect(mapStateToProps, mapDispatchToProps)(SitePhoto);