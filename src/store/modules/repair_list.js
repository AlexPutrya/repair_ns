const test_data= [
    {date: '12.09.2018', product: 'Falcon HD43', claim: 'Не работает', status: 'Отправлен'},
    {date: '13.09.2018', product: 'Falcon HD45', claim: 'Не работает', status: 'Отправлен'},
    {date: '14.09.2018', product: 'Subwoofer CCE', claim: 'Не работает', status: 'Отправлен'}
];

const state = {
    repair_list: test_data,
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
    },
    repairList: ({state}) => {
        let new_list = state.repair_list.filter(repair => state.status == repair.status);
        return new_list;
    }
};

export default {
    state,
    mutations,
    actions
};