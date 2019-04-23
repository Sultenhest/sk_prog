export const state = () => ({
    mode: false
});

export const mutations = {
    toggleDarkmode(state) {
        state.mode = !state.mode;
    }
};

export const actions = {
    toggleDarkmode(context) {
        context.commit('toggleDarkmode');
    }
};

export const getters = {
    isDarkmode: state => {
        return state.mode;
    }
};
