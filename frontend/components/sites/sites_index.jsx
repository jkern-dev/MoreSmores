import React from 'react';
import SiteDetail from './sites_detail';

class SitesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.requestAllSites();
    }

    render () {
        // const siteItems = this.props.sites.map(site => (<li>{site.name}</li>));
        const siteItems = this.props.sites.map(site => (<SiteDetail key={site.id} site = {site} />)) 
        
        return(
                <>
                    <ul className = "sites-list">
                            {siteItems}
                    </ul>
                </>
        )
    }
}

export default SitesIndex;