class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    // this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(sites) {
    const sitesObj = {};
    sites.forEach(site => sitesObj[site.id] = site);

    sites
      .filter(site => !this.markers[site.id])
      // .forEach(newSite => this.createMarkerFromSite(newSite, this.handleClick))
      .forEach(newSite => this.createMarkerFromSite(newSite))

    Object.keys(this.markers)
      .filter(siteId => !sitesObj[siteId])
      .forEach((siteId) => this.removeMarker(this.markers[siteId]))
  }

  createMarkerFromSite(site) {
    const position = new google.maps.LatLng(site.latitude, site.longitude);
    const marker = new google.maps.Marker({
      position,
      // label: site.name,
      map: this.map,
      siteId: site.id
    });
    this.markers[marker.siteId] = marker;
  }

    removeMarker(marker) {
      this.markers[marker.siteId].setMap(null);
      delete this.markers[marker.siteId];
    }
}

export default MarkerManager;