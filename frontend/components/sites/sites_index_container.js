import {connect} from 'react-redux';
import selectAllSites from '../../reducers/selectors';
import {fetchSites} from '../../actions/site_actions';
import SitesIndex from './sites_index';

const mapStateToProps = state => ({
    sites: selectAllSites(state)
})

const mapDispatchToProps = dispatch => {
    return {
      fetchSites: () => dispatch(fetchSites())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SitesIndex);