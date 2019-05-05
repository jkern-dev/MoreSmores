export const fetchAllSites = () => (
    $.ajax({
        method: "GET",
        url: "/api/sites"
    })
);

export const fetchSite = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/sites/${id}`
    })
);

export const createSite = (site) => (
    $.ajax({
        method: 'POST',
        url: 'api/sites',
        data: {site}
    })
);