import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from '../modal';

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faHiking,
  faBicycle,
  faBus,
  faDog,
  faCampground,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
library.add(faFire);
library.add(faHiking);
library.add(faCampground);
library.add(faMapMarkerAlt);

class SiteShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSite(this.props.match.params.id);
    }

    render() {
        const editButton = (
          <div className="owner-options">
            <button>
              <Link to={`/site_edit/${this.props.site.id}`}>Edit Site!</Link>
            </button>
            <button 
              className = "edit-button"
              onClick={() => this.props.deleteSite(site.id)
                .then(this.props.history.push('/sites'))}
              >Delete Site</button>
          </div>
        );

        const bookButton = (
          <div className="book-button">
            <button
              onClick={() => this.props.openModal("booking")}
              className="booking-button"
            >
              Book Now!
            </button>
          </div>
        )

        const unauthbookButton = (
          <div className="book-button">
            <button
              onClick={() => this.props.openModal("login")}
              className="booking-button"
            >
              Book Now!
            </button>
          </div>
        )


        let site = this.props.site; 
        const edit = (site.user_id === this.props.sessionId) ? editButton : <></>
        const book = (this.props.sessionId===undefined) ? unauthbookButton: bookButton
        return (
          <div className="site-show">
            <img src={site.photoUrl} />
            <div className="site-info">
              <div className = "site-heading">
                <h1>{site.name}</h1>
                <p>{site.description}</p>
              </div>
              <div className="site-lists">
                <div className="site-category">
                  <h3>Essentials</h3>
                  <ul className="site-list">
                    <li>
                      <FontAwesomeIcon icon="campground" /> Bring Your
                      Own Tent
                    </li>
                    <li>
                      <FontAwesomeIcon icon="map-marker-alt" />{" "}
                      {site.capacity} Spots
                    </li>
                  </ul>
                </div>
                <div className="site-category">
                  <h3>Activities</h3>
                  <ul className="site-list">
                    <li>
                      <span
                        className={
                          site.fire_allowed ? "act-true" : "act-false"
                        }
                      >
                        <FontAwesomeIcon icon="fire" /> Campfire Allowed
                      </span>
                    </li>
                    <li>
                      <span
                        className={
                          site.rv_allowed ? "act-true" : "act-false"
                        }
                      >
                        <FontAwesomeIcon icon="bus" /> RV Parking
                      </span>
                    </li>
                    <li>
                      <span
                        className={
                          site.pet_allowed ? "act-true" : "act-false"
                        }
                      >
                        <FontAwesomeIcon icon="dog" /> Pets Allowed
                      </span>
                    </li>
                    <li>
                      <span
                        className={
                          site.bike_activity ? "act-true" : "act-false"
                        }
                      >
                        <FontAwesomeIcon icon="bicycle" /> Biking Nearby
                      </span>
                    </li>
                    <li>
                      <span
                        className={
                          site.hike_activity ? "act-true" : "act-false"
                        }
                      >
                        <FontAwesomeIcon icon="hiking" /> Hiking Nearby
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="booking-box">
                  <div className="site-pricing">
                    <h3>${site.price}</h3>
                    <p>Per Night</p>
                    <hr className="line-break" />
                    <div className="book-button">
                      {/* <Link to={`/book_now/${site.id}`}> */}
                      <button
                        onClick={() => this.props.openModal("booking")}
                        className="booking-button"
                      >
                        Book Now!
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                  {edit}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(SiteShow);


