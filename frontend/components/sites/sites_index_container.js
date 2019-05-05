import {connect} from 'react-redux';
import selectAllSites from '../../reducers/selectors';
import {requestAllSites} from '../../actions/site_actions';
import SitesIndex from './sites_index';

// const mapStateToProps = state => {
//     let sites = Object.values(state.sites);
//     return ({
//         sites: sites
//     })
// };

const mapStateToProps = state => ({
    sites: selectAllSites(state)   
})

const mapDispatchToProps = dispatch => {
    return {requestAllSites: () => dispatch(requestAllSites())}
};

export default connect(mapStateToProps,mapDispatchToProps)(SitesIndex);