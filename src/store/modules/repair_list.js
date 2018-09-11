const test_data= [
    {date: '12.09.2018', product: 'Falcon HD43', claim: 'Не работает', status: 'Отправлен'},
    {date: '13.09.2018', product: 'Falcon HD45', claim: 'Не работает', status: 'Отправлен'},
    {date: '14.09.2018', product: 'Subwoofer CCE', claim: 'Не работает', status: 'Не завершен'}
];

const state = {
    list: test_data,
    status_list: ['Отправлен', 'Принят', 'Закрыт', 'Не завершен'],
    status: "Не завершен",
};

const getters = {
    // возвращаем отфильтрованный список по статусу
    repairList(){
        return state.list.filter(repair => state.status == repair.status);
    }
}

const mutations = {
    // устанавливаем статус из списка
    changeStatus(state, status) {
        state.status = status;
    }
};

const actions = {
    // Вызывется диалоговое окно для выбора стутуса
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
    getters,
    mutations,
    actions
};