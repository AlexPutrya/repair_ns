const state = {
    repair_list: [],
    status_list: ['отправлено', 'принято'],
    status: "Все",
};

const mutations = {
    changeStatus(state, status) {
        state.status = status;
    }
};

const actions = {
    filter: ({commit, state}) => {
        action('Статус:', 'Отмена', state.status_list)
            .then(result => {
                if(result != "Отмена"){
                    commit('changeStatus', result);
                }else {
                    console.log(result);
                }
            });
    }
};

export default {
    state,
    mutations,
    actions
};