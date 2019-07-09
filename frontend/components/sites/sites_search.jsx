import React from 'react';
import SiteDetail from './sites_detail';
import MarkerManager from '../../util/marker_manager';

class SiteSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: this.props.searchSites(this.props.match.params.search)
    }
  }

  componentDidMount() {
    this.props.searchSites(this.props.match.params.search);
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

  render() {
    const siteItems = this.props.sites.map(site => (<SiteDetail key={site.id} site={site} />)) 
    
    const noItems = () => {
      return (
        <div className="index-body">
          <h3>No Sites Matched Your Search!</h3>
          <div className="index-container">
            <div >
              <div>
              </div>
            </div>
            <div className="sites-map">
              <div className="sites-map" ref={map => this.mapNode = map}></div>
            </div>
          </div>
        </div>
      );
    }


    const yesItems = () => {
      return (
        <div className="index-body">
          <h3>The best camping around!</h3>
          <div className="index-container">
            <div >
              <div>
                <ul className="sites-list">{siteItems}</ul>
              </div>
            </div>
            <div className="sites-map">
              <div className="sites-map" ref={map => this.mapNode = map}></div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.sites.length > 0 ? yesItems() : noItems();
    // return (
    //   this.props.sites && (
    //     <div className="index-body">
    //       <h3>The best camping around!</h3>
    //       <div className="index-container">
    //         <div >
    //           <div>
    //             <ul className="sites-list">{siteItems}</ul>
    //           </div>
    //         </div>
    //         <div className="sites-map">
    //           <div className="sites-map" ref={map => this.mapNode = map}></div>
    //         </div>
    //       </div>
    //     </div>


    //   )
    // );
  }
}

export default SiteSearchIndex;