import React from 'react';
import { withRouter, Link} from 'react-router-dom';


class SiteDetail extends React.Component {
    constructor (props) {
        super(props)
    }


    render () {
        return (
            
            <div>
                <Link to={`/sites/${this.props.site.id}`}>
                <li className = "site-item">
                    <div>
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