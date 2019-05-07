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
            <>
                <h3>The best camping around!</h3>
                <div className = "index-container">
                    <div >
                        <div>
                            <ul className="sites-list">{siteItems}</ul>
                        </div>
                    </div>
                    <div className = "sites-map">
                        <h1>Map Placeholder</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default SitesIndex;