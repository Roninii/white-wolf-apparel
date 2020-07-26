import Vue from 'vue';
import Vuex from 'vuex';

import router from '@/router/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentUser: null,
    },
    mutations: {
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        }
    },
    actions: {
        updateCurrentUser({commit, dispatch}, user) {
            commit('SET_CURRENT_USER', user);
            if(user) dispatch('redirectUser')
        },
        redirectUser() {
            router.push('/')
        }
    }
});