import { connect } from 'react-redux';
import { fetchSite, deleteSite } from '../../actions/site_actions';
import SiteShow from './site_show';

const mapStateToProps = (state, ownProps) => {
    return {
        site: state.entities.sites[ownProps.match.params.id] || {},
        sessionId: state.session.id
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSite: () => dispatch(fetchSite()),
    deleteSite: (site) => dispatch(deleteSite(site))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteShow);