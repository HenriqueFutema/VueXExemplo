import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Testando o VueX',
        links: [
            'http://google.com',
            'http://coursetro.com',
            'http://youtube.com'
        ]
    },
    getters: {
        countLinks: state => {
            return state.links.length
        }
    },
    mutations: {
        ADD_LINK: (state, link) => {
            state.links = [link, ...state.links]
        },
        REMOVE_LINK: (state, link) => {
            state.links.splice(link, 1)
        },
        REMOVE_ALL: state => {
            state.links = []
        }
    },
    actions: {
        removeLink: (context, link) => {
            context.commit('REMOVE_LINK', link)
        }
    }
})