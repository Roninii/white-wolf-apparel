import { addItemToCart } from "@/utils/cart.utils.js";

export const namespaced = true

export const state = {
    hidden: true,
    cartItems: [],
}

export const mutations = {
    TOGGLE_CART_HIDDEN(state) {
        state.hidden = !state.hidden
    },
    ADD_ITEM(state, item) {
        state.cartItems = addItemToCart(state.cartItems, item)
    }
}

export const actions = {
    toggleCartHidden({ commit }) {
        commit('TOGGLE_CART_HIDDEN')
    },
    addItem({ commit }, item) {
        commit('ADD_ITEM', item)
    }
}