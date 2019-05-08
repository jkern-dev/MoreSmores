import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from "../../util/marker_manager";


class SiteMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng:-122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick.bind(this));
    // this.addListeners = this.addListeners.bind(this);

    this.MarkerManager.updateMarkers(this.props.sites);
    // this.addListeners();
    }

    componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.sites);
    }

    // addListeners() {
    //   google.maps.event.addListener(this.map, 'idle', () => {
    //     const { north, south, east, west } = this.map.getBounds().toJSON();
    //     const bounds = {
    //       northEast: { lat: north, lng: east },
    //       southWest: { lat: south, lng: west } };
    //     this.props.updateFilter('bounds', bounds);
    //   });
    // }

    handleClick(site) {
      this.props.history.push(`/#/sites/${site.id}`);
    }

  render() {
    return (
      <div className = "map" ref={ map => this.mapNode = map }></div>
    );
  }

}
  

export default SiteMap;