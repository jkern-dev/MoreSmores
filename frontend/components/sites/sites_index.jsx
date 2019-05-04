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
        // const siteItems = this.props.sites.map(site => (<SiteDetail key={site.id} site={site} />));
        
        return(
           <h1>Sites Component!</h1>
        )
    }
}

export default SitesIndex;