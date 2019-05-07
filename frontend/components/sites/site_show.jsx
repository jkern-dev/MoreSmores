import React from 'react';

class SiteShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSite(this.props.match.params.id);
    }

    render() {
        let site = this.props.site; 
        return(
            <>
                <img src = {site.photoUrl}></img>
                <h1>{site.name}</h1>
                <p>{site.description}</p>
                <div>
                    <h3>Essentials</h3>
                    <ul>
                        <li>{site.capacity} spots</li>
                    </ul> 
                </div>
            </>
        )
    }


}

export default SiteShow;