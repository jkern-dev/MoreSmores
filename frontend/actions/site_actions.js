import * as APIUtil from '../util/site_api_util';

export const RECEIVE_ALL_SITES = "RECEIVE_ALL_SITES";
export const RECEIVE_SITE = "RECEIVE_SITE";
export const UPDATE_SITE_STATE = "UPDATE_SITE_STATE";
export const REMOVE_SITE = "REMOVE_SITE";

const receiveSites = (sites) => ({
    sites: sites,
    type: RECEIVE_ALL_SITES
})

export const fetchSites = () => (dispatch) => (
    APIUtil.fetchSites()
        .then(sites => dispatch(receiveSites(sites)))
)

const receiveSite = (site) => ({
    site: site,
    type: RECEIVE_SITE
})

export const fetchSite = (id) => (dispatch) => (
    APIUtil.fetchSite(id)
        .then(site => dispatch(receiveSite(site)))
)

export const createSite = (site) => dispatch => (
    APIUtil.createSite(site)
        .then( site => dispatch(receiveSite(site)))
)

const updateSiteState = (key, value) => {
    return {
        type: UPDATE_SITE_STATE,
        key,
        value
    }
}

export const updateSite = (key, value) => dispatch => {
    return dispatch(updateSiteState(key, value))
};

const removeSite = (site) => ({
  site: site.id,
  type: REMOVE_SITE
})

export const deleteSite = site => dispatch => {
  return (
    APIUtil.destroySite(site).then(site => dispatch(removeSite(site)))
  )
}
  

