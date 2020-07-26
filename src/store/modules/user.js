import router from '@/router/index.js'


export const namespaced = true;

export const state = {
  currentUser: null,
};

export const mutations = {
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  },
};

export const actions = {
  updateCurrentUser({ commit, dispatch }, user) {
    commit("SET_CURRENT_USER", user);
    if (user) dispatch("redirectUser");
  },
  redirectUser() {
    router.push("/");
  },
};
