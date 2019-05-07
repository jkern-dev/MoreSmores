import React from 'react';
import SiteDetail from './sites_detail';

class SitesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchSites();
    }

    render () {
        const siteItems = this.props.sites.map(site => (<SiteDetail key={site.id} site = {site} />)) 
        return (
          <div className="sites-list">
            <h3>The best camping around!</h3>
            <div>
              <ul className="sites-list">{siteItems}</ul>
            </div>
          </div>
        );
    }
}

export default SitesIndex;