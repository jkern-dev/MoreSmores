import React from 'react';

class SplashSearch extends React.Component {
  render(){
    return (
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Try Yosemite, Moab, anywhere you'd like to go..."
        />
        <div className="search-buttons">
          <div className="search-button">Anytime</div>
          <div className="search-button">Campsites</div>
          <div className="search-button">Lodging</div>
          <div className="search-button">RVs</div>
          <div className="search-submit">Search</div>
        </div>
      </div>
    );
  }
}

export default SplashSearch;