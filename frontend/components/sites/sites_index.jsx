import React from 'react';
import SiteDetail from './sites_detail';
import SiteMap from './site_map';

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
            <>
                <h3>The best camping around!</h3>
                <div className = "index-container">
                    <div >
                        <div>
                            <ul className="sites-list">{siteItems}</ul>
                        </div>
                    </div>
                    <div className = "sites-map">
                        <SiteMap sites={this.props.sites} singleSite={false} />
                    </div>
                </div>
            </>
        );
    }
}

export default SitesIndex;