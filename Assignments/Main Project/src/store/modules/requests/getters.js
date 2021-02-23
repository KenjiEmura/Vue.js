export default {
  receivedRequests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.receivedRequests && getters.receivedRequests.length > 0;
  }
};
