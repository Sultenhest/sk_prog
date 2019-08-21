export const state = () => ({
    projects: []
});

export const mutations = {
    setProjects(state, payload) {
        state.projects = payload;
    }
};

export const actions = {};

export const getters = {
    getProjects: state => {
        return state.projects;
    }
};
