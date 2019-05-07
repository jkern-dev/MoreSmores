import { connect } from 'react-redux';
import { fetchSite } from '../../actions/site_actions';
import SiteDetail from './sites_detail';

const mapStateToProps = (state, ownProps) => {
    return {
        site: state.entities.sites[ownProps.match.params.siteId]
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSite: (id) => dispatch(fetchSite(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteDetail);