import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import SiteShow from './site_show';

class SiteDetail extends React.Component {
    constructor (props) {
        super(props)
    }

    // try to onLoad to delay rendering

    render () {
        return (
            <div className = "site-item">
                <Link to={`/sites/${this.props.site.id}`}> 
                <li >
                    <div className = "site-details">
                        <img src = {this.props.site.photoUrl} alt={this.props.site.name} />
                        <p className = "site-title">{this.props.site.name}</p>
                        <p>{this.props.site.description}</p>
                    </div>
                </li>
                </Link>
            </div>
        )
    }
}

export default withRouter(SiteDetail);