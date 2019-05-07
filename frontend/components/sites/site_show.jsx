import React from 'react';
import { Link } from 'react-router-dom';


class SiteShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSite(this.props.match.params.id);
    }

    render() {
        const editButton = (
          <>
          <Link to={`/site_edit/${this.props.site.id}`}><h1>Edit Site!</h1></Link>
          <button onClick={() => this.props.deleteSite(site.id).then(this.props.history.push('/sites'))}>Delete Site</button>
          </>
        );

        let site = this.props.site; 
        const edit = (site.user_id === this.props.sessionId) ? editButton : <></>
        return(
            <>
                {edit}
                <img src = {site.photoUrl}></img>
                <h1>{site.name}</h1>
                <p>{site.description}</p>
                <div>
                    <h3>Essentials</h3>
                    <ul>
                        <li>{site.capacity} spots</li>
                    </ul> 
                </div> 
            </>
        )
    }
}

export default SiteShow;