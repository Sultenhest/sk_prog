import client from '../plugins/contentful';

export const state = () => ({
    counter: 0
});

export const mutations = {
    increment(state) {
        state.counter++;
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        const response = await client.getEntries({
            content_type: 'project'
        });
        if (response.items.length > 0) {
            commit('projects/setProjects', response.items);
        }
    }
};
