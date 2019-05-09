import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faBus, faDog, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faBus);
library.add(faDog);
library.add(faCampground);
library.add(faCalendarAlt);


class SplashSearch extends React.Component {
  flipCalendar() {
    if (document.getElementById("anytime").className === "search-button") {
      document.getElementById("anytime").className = "search-button-active"
    } else {
      document.getElementById("anytime").className = "search-button"
    }
  };

  flipCamp() {
    if (document.getElementById("campsite").className === "search-button") {
      document.getElementById("campsite").className = "search-button-active"
    } else {
      document.getElementById("campsite").className = "search-button"
    }
  };

  flipLodging() {
    if (document.getElementById("lodging").className === "search-button") {
      document.getElementById("lodging").className = "search-button-active"
    } else {
      document.getElementById("lodging").className = "search-button"
    }
  };

  flipRv() {
    if (document.getElementById("rv").className === "search-button") {
      document.getElementById("rv").className = "search-button-active"
    } else {
      document.getElementById("rv").className = "search-button"
    }
  };

  render(){
    return (
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Try Yosemite, Moab, anywhere you'd like to go..."
        />
        <div className="search-buttons">
          <div className="search-button" id = "anytime" onClick= {this.flipCalendar}><FontAwesomeIcon icon="calendar-alt" /> Anytime</div>
          <div className="search-button" id="campsite" onClick={this.flipCamp}><FontAwesomeIcon icon="campground" /> Campsites</div>
          <div className="search-button" id="lodging" onClick={this.flipLodging}><FontAwesomeIcon icon="dog" /> Pets</div>
          <div className="search-button" id="rv" onClick={this.flipRv}><FontAwesomeIcon icon="bus" /> RVs</div>
          <div className="search-submit">Search</div>
        </div>
      </div>
    );
  }
}

export default SplashSearch;