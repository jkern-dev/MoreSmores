import { connect } from 'react-redux';
import { requestSite } from '../../actions/site_actions'
import SiteShow from './site_show';

const mapStateToProps = (state, ownProps) => {
    return {
        site: state.entities.sites[ownProps.match.params.id] || {}
    }
};

const mapDispatchToProps = dispatch => ({
    requestSite: id => dispatch(requestSite(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteShow);