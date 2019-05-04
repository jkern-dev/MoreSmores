export const fetchAllSites = () => (
    $.ajax({
        method: "GET",
        url: "/api/sites"
    })
);

export const fetchSite = id => (
    $.ajax({
        method: "GET",
        url: `/api/sites/${id}`
    })
);