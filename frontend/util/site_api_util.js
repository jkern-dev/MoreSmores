export const fetchSites = () => (
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

export const createSite = site => (
    $.ajax({
        method: "POST", 
        url: '/api/sites',
        data: site,
        contentType: false,
        processData: false
    })
);

export const updateSite = site => (
  $.ajax({
    method: 'PATCH',
    url: `/api/sites/${site.id}`,
    data: { site }
  })
);

export const destroySite = id => {
  return ($.ajax({
    method: 'DELETE',
    url: `/api/sites/${id}`
  }))
};

export const searchListings = condition => {
  return(
    $.ajax({
      method: "GET",
      url: `/api/sites?search=${condition}`
    }))
};