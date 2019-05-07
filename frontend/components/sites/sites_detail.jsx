import React from 'react';
import { withRouter, Link} from 'react-router-dom';

class SiteDetail extends React.Component {
    constructor (props) {
        super(props)
    }

    // try to onLoad to delay rendering

    render () {
      let photo = this.props.site.photoUrl;
      if (photo === undefined) {
        return null;
      }

        return (
          <div className = "site-item">
              <Link to={`/sites/${this.props.site.id}`}> 
              <li>
                <div className = "site-details">
                  <div className = "site-image">
                    <img src = {this.props.site.photoUrl} alt={this.props.site.name} />
                  </div>
                  <div className = "site-heading">
                    <p className = "site-title">{this.props.site.name}</p>
                  </div>
                  <div className = "site-content" >
                    <div className = "content-left">
                      <p className = "site-subtitle">{this.props.site.city}, {this.props.site.state}</p>
                    </div>
                    <div className = "content-right">
                      <p className = "site-price">${this.props.site.price}/Night</p>
                    </div>
                  </div>
                </div>
            </li>
            </Link>
          </div>
        )
    }
}

export default withRouter(SiteDetail);