import { connect } from 'react-redux';
import { fetchSite, deleteSite } from '../../actions/site_actions';
import SiteShow from './site_show';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        site: state.entities.sites[ownProps.match.params.id] || {},
        sessionId: state.session.id
    }
};

const mapDispatchToProps = dispatch => ({
  fetchSite: id => dispatch(fetchSite(id)),
  deleteSite: site => dispatch(deleteSite(site)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteShow);