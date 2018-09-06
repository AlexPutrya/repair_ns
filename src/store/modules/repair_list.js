const state = {
    repair_list: [],
    status_list: ['отправлено', 'принято'],
    status: "Все",
};

//Получаем отфильтрованые данные
const getters = {
    filterRepairList: state => {
        return state.repair_list.filter(repair => repair.status_id == state.status_id);
    }
};

const mutations = {
    changeStatus(state, status) {
        state.status = status;
    }
};

const actions = {
    // changeStatus: ({ commit }) => {
    //     commit('changeStatus');
    // },
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