import React from 'react';

class SiteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.site;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
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