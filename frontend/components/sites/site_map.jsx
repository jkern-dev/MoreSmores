import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from "../../util/marker_manager";

const getCoordObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};

class SiteMap extends React.Component {
  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleSite) {
      this.props.fetchSite(this.props.siteId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.sites);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {lat: north, lng: east},
        southWest: {lat: south, lng: west}
      };
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(site) {
    this.props.history.push(`/#/sites/${site.id}`);
  }
  render() {
    return (
      <div ref={map => this.mapNode = map}>
      Map
      </div>
    );
  }
}

export default withRouter(SiteMap);