const selectAllSites = (state) => {
    return Object.values(state.entities.sites);
};

export default selectAllSites;