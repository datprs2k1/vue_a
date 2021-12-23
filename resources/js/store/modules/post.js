import api from '../../api';

const state = {
    posts: [],
    post: {},
};

const getters = {
    posts: state => state.posts,
    post: state => state.post,
};

const mutations = {
    setPosts: (state, posts) => {
        state.posts = posts;
    },
    setPost: (state, post) => {
        state.post = post;
    },
};

const actions = {
    async getPost({ commit }, id) {
        const response = await api.get('/post/' + id);
        console.log(response.data);
        commit('setPost', response.data.post);
    },

    async fetchPosts({ commit }) {
        const response = await api.get('/post');
        commit('setPosts', response.data.posts);
    },

    async createPost({ commit }, data) {
        await api.post('/post', {
            title: data.title,
            content: data.content,
        });
    },

    async editPost({ commit }, data) {
        await api.put('/post/' + data.id, {
            title: data.title,
            content: data.content,
        });
    },

    async deletePost({ commit }, id) {
        await api.del(`/post/${id}`);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
