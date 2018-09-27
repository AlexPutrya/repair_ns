const state = {
    list: [],
    status_list: ['Отправлен', 'Принят', 'Закрыт', 'Не завершен'],
    status: "Не завершен",
};

const getters = {
    // Возвращаем отфильтрованный список
    filteredList(){
        return state.list.filter(repair => state.status == repair.status);
    }
}

const mutations = {
    // Устанавливаем статус из списка
    changeStatus(state, status) {
        state.status = status;
    },
    // Создаем список полученый из бд {key: value}
    setDataToList(state, data){
        for(let i = 0; i < data.length; i++) {
            state.list.push({
                id: data[i][0],
                datetime: data[i][1],
                status: data[i][2],
                call_to_client: data[i][3],
                partner: data[i][4],
                client_name: data[i][5],
                tel: data[i][6],
                product: data[i][7],
                claim: data[i][8],
                track_number: data[i][9],
            });
        }
        console.log(state.list);
    }
};

const actions = {
    // Вызывется диалоговое окно для выбора фильтров
    changeFilter({commit, state}){
        action('Статус:', 'Отмена', state.status_list)
            .then(result => {
                if(result != "Отмена"){
                    commit('changeStatus', result);
                }else {
                    console.log(result);
                }
            });
    },
    // Получем данные из базы, вызывааем мутацию в случае успеха
    loadRepairList({commit, state, rootState}){
        rootState.database.database.all("SELECT * FROM documents", []).then(result => {
            commit('setDataToList', result);
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};