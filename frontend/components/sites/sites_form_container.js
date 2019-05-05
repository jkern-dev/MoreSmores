import { connect } from 'react-redux';
import SiteForm from './site_form';
import { createSite } from '../../actions/site_actions';

const mapStateToProps = state => {
    return({
        site: {
            name: "",
            capacity: 0,
            fire_allowed: true,
            rv_allowed: false,
            pet_allowed: false,
            bike_activity: false,
            hike_activity: false,
            latitude: "",
            longitude: "",
            state: "",
            description: ""
        },
        formType: "Create Site"
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        action: (site) => dispatch(createSite(site))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SiteForm)
