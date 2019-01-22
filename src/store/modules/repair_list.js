const state = {
    repair_list: [],
    status_list: ['Отправлен', 'Принят', 'Закрыт', 'Не завершен'],
    filter: {
        status: "Принят",
    }
};

const getters = {
    // Возвращаем отфильтрованный список
    filteredList(){
        return state.repair_list.filter(repair => state.filter.status == repair.status);
    }
}

const mutations = {
    // Устанавливаем статус из списка
    setStatus(state, status) {
        state.filter.status = status;
    },
    // Создаем ассоциативный массив из списка полученогой из бд {key: value}
    setRepairList(state, data){
        for(let i = 0; i < data.length; i++) {
            state.repair_list.push({
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
    },
    // Добавляем в список данные после сохранения нового документа
    addToList(state, data){
        state.repair_list.push(data);
    }
};

const actions = {
    // Вызывется диалоговое окно для выбора фильтров
    changeFilter({commit, state}){
        action('Статус:', 'Отмена', state.status_list)
            .then(result => {
                if(result != "Отмена"){
                    commit('setStatus', result);
                }else {
                    console.log(result);
                }
            });
    },
    // Получем данные из базы, вызывааем мутацию в случае успеха
    loadRepairList({commit, state, rootState}){
        rootState.database.database.all("SELECT * FROM documents", []).then(result => {
            commit('setRepairList', result);
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