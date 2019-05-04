import React from 'react';


class SiteDetail extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        // this.props.requestSite(this.props.match.params.siteId);
    }

    render () {
        return (
            <>
                <li className = "site-item">
                    <div>
                        <img src = {this.props.site.photoUrl} alt={this.props.site.name} />
                        <p className = "site-title">{this.props.site.name}</p>
                        <p>{this.props.site.description}</p>
                    </div>
                </li>
            </>
        )
    }
}

export default SiteDetail;