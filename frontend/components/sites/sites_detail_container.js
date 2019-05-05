import { connect } from 'react-redux';
import { requestSite } from '../../actions/site_actions';
import SiteDetail from './sites_detail';

const mapStateToProps = (state, ownProps) => {
    return {
        site: state.entities.sites[ownProps.match.params.siteId]
    }
};

const mapDispatchToProps = dispatch => ({
    requestSite: (id) => dispatch(requestSite(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteDetail);