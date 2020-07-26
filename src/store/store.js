import Vue from 'vue';
import Vuex from 'vuex';

// modules
import * as user from '@/store/modules/user'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user
    },
    state: {
    },
    mutations: {

    },
    actions: {
    }

});