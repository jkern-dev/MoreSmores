import { connect } from 'react-redux';
import selectAllSites from '../../reducers/selectors';
import { searchSites } from '../../actions/site_actions';
import SiteSearchIndex from './sites_search';

const mapStateToProps = state => ({
  sites:  selectAllSites(state)
})

const mapDispatchToProps = dispatch => {
  return {
    searchSites: condition => dispatch(searchSites(condition))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SiteSearchIndex);