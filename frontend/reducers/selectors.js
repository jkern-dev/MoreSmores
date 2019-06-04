const selectAllSites = (state) => {
    return Object.values(state.entities.sites);
};

// const selectAllBookings = (state) => {
//   return Object.values(state.entities.bookings);
// }

export default selectAllSites;