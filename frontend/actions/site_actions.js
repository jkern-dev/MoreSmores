import * as APIUtil from '../util/site_api_util';

export const RECEIVE_ALL_SITES = "RECEIVE_ALL_SITES";
export const RECEIVE_SITE = "RECEIVE_SITE";


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