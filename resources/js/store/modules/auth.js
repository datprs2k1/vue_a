import api from '../../api';

const state = {
    currentUser: null
};

const getters = {
    currentUser: state => state.currentUser,
    isAuthenticated: state => !!state.currentUser,
};

const mutations = {
    setCurrentUser: (state, user) => {
        state.currentUser = user;
    }
};

const actions = {
    async login({ commit }, data) {
        const response = await api.post('/login', {
            email: data.email,
            password: data.password
        })
        await commit('setCurrentUser', response.data.user);
        localStorage.setItem('token', response.data.token);
    },
    async register({ commit }, data) {
        const response = await api.post('/register', {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation
        })
        await commit('setCurrentUser', response.data.user);
        localStorage.setItem('token', response.data.token);
    },
    async logout({ commit }, data) {
        await api.post('/logout')
        await commit('setCurrentUser', null);
        localStorage.setItem('token', null);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
