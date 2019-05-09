import React from 'react';
import SiteDetail from './sites_detail';
import MarkerManager from '../../util/marker_manager';

class SitesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchSites();
    }

    componentDidUpdate() {
      
      const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 },
        zoom: 10
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarkers(this.props.sites);
    }

    render () {
      
        const siteItems = this.props.sites.map(site => (<SiteDetail key={site.id} site = {site} />)) 
        return (
            <div className = "index-body">
                <h3>The best camping around!</h3>
                <div className = "index-container">
                    <div >
                        <div>
                            <ul className="sites-list">{siteItems}</ul>
                        </div>
                    </div>
                    <div className = "sites-map">
                        <div className="sites-map" ref={map => this.mapNode = map }></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SitesIndex;