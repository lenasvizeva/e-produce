import { createStore } from 'vuex'

export default createStore ({
    state: {
        isMobileMenu: false,
    },
    modules: {},
    actions: {},
    getters: {},
    mutations: {
        switchMobileMenu(state, payload) {
            state.isMobileMenu = payload
        }
    }
})