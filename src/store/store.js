import Vue from 'vue';
import Vuex from 'vuex';

// modules
import * as user from '@/store/modules/user'
import * as cart from '@/store/modules/cart'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        cart
    },
    state: {
    },
    mutations: {

    },
    actions: {
    }

});