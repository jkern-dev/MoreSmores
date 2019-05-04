import React from 'react';


class SiteDetail extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.requestSite(this.props.match.params.siteId);
    }

    render () {
        return (
            <>
            <li><h1>{this.props.site.name}</h1></li>
            </>
        )
    }
}

export default SiteDetail;