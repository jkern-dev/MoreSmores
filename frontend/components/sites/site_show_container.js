import { connect } from 'react-redux';
import { fetchSite } from '../../actions/site_actions'
import SiteShow from './site_show';

const mapStateToProps = (state, ownProps) => {
    return {
        site: state.entities.sites[ownProps.match.params.id] || {}
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSite: id => dispatch(fetchSite(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteShow);