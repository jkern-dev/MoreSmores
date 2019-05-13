import React from 'react';

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCampground } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

library.add(faLinkedin);
library.add(faGithub);
library.add(faCampground);

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer-list">
            <section className="social">Social</section>
            <br />
            <div className="list-links">
              <a href="https://github.com/jkern-dev">
                <FontAwesomeIcon icon={["fab", "github"]} /> Github
              </a>
              <a href="https://www.linkedin.com/in/jkern620/">
                <FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn
              </a>
              <a href="https://www.hipcamp.com">
                <FontAwesomeIcon icon="campground" /> HipCamp
              </a>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-heading">
              <section className="footer-title">
                MoreS'mores is everywhere you want to camp!
              </section>
            </div>
            <br />
            <br />
            <section className="footer-body">
              Discover unique experiences on ranches, nature preserves,
              farms, vineyards, and public campgrounds across the U.S. Book
              tent camping, treehouses, cabins, yurts, primitive backcountry
              sites, car camping, airstreams, tiny houses, RV camping,
              glamping tents and more.
            </section>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;