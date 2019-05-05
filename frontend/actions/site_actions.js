import * as APIUtils from '../util/api_util';

export const RECEIVE_ALL_SITES = "RECEIVE_ALL_SITES";
export const RECEIVE_SITE = "RECEIVE_SITE";


export const receiveAllSites = sites => ({
    type: RECEIVE_ALL_SITES,
    sites
});

export const requestAllSites = () => (dispatch) => (
    APIUtils.fetchAllSites()
        .then(sites => dispatch(receiveAllSites(sites)))
)

export const receiveSite = site => ({
    type: RECEIVE_SITE,
    site
});

export const requestSite = siteId => (dispatch) => (
    APIUtils.fetchSite(siteId)
        .then(site => dispatch(receiveSite(site)))
);

export const createSite = site => dispatch => (
    APIUtils.createSite(site)
        .then(site => dispatch(receiveSite(site)))
);