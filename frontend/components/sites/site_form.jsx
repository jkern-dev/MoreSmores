import React from 'react';

class SiteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.site;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('site[name]',this.state.name);
        formData.append('site[description]', this.state.description);
        formData.append('site[capacity]', this.state.capacity);
        formData.append('site[fire_allowed]', this.state.fire_allowed);
        formData.append('site[rv_allowed]', this.state.rv_allowed);
        formData.append('site[pet_allowed]', this.state.pet_allowed);
        formData.append('site[bike_activity]', this.state.bike_activity);
        formData.append('site[hike_activity]', this.state.hike_activity);
        formData.append('site[capacity]', this.state.capacity);
        formData.append('site[latitude]', this.state.latitude);
        formData.append('site[longitude]', this.state.longitude);
        formData.append('site[state]', this.state.state);
        formData.append('site[photo]', this.state.photoFile);
        this.props.createSite(formData)
            .then(this.props.history.push('/sites'));
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

    renderStateItem(state) {
        return (
            <option key={state} value={state}>{state}</option>
        )
    }

    render() {

        const photoPreview = ( 
            <>
                <h3>Photo Preview</h3>
                <img src={this.state.photoUrl} />
            </>
        );

        const preview = this.state.photoUrl ? photoPreview : <h3>Add a photo!</h3>;
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.name} onChange={this.update("name")} />
                    </label>
                    <br />
                    <label>Description:
                        <textarea value={this.state.description} onChange={this.update("description")} />
                    </label>
                    <br />
                    <label>Capacity: 
                        <input type="number" value={this.state.capacity} min="0" onChange={this.update("capacity")} />
                    </label>
                    <br />
                    <label>State:
                        <select className="state-list" onChange={this.update("state")}>
                            {this.states.map((state) => this.renderStateItem(state))}
                        </select>
                    </label>
                    <br />
                    <label>Latitude
                        <input type="text" value={this.state.latitude} onChange={this.update("latitude")} />
                    </label>
                    <br />
                    <label>longitude
                        <input type="text" value={this.state.longitude} onChange={this.update("longitude")} />
                    </label>
                    <br />
                    <label>Fire Allowed:
                        <input type="checkbox" value={this.state.fire_allowed} onChange={this.update("fire_allowed")} />
                    </label>
                    <br />
                    <label>RV Allowed:
                        <input type="checkbox" value={this.state.rv_allowed} onChange={this.update("rv_allowed")} />
                    </label>
                    <br />
                    <label>Pets Allowed:
                        <input type="checkbox" value={!this.state.pet_allowed} onChange={this.update("pet_allowed")} />
                    </label>
                    <br />
                    <label>Hike Activity:
                        <input type="checkbox" value={!this.state.hike_activity} onChange={this.update("hike_activity")} />
                    </label>
                    <br />
                    <label>Bike Activity:
                        <input type="checkbox" value={!this.state.bike_activity} onChange={this.update("bike_activity")} />
                    </label>
                    <br />
                    {preview}
                    <br />
                    <input type="file" onChange={this.handleFile} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    };
    
}

export default SiteForm;