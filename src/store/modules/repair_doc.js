import router from '../../router';

const state = {
    form: {
        datetime: "",
        status: "",
        call_to_client: false,
        partner: "",
        client_name: "",
        tel: "",
        product: "",
        claim: "",
        track_number: "",
        status_list: ['Отправлен', 'Принят', 'Закрыт', 'Не завершен']
    }
};

const mutations = {
    // Меняем состояние полей формы setter
    changeFormValue(state, params){
        state.form[params.param] = params.val;
    },
    // Очищаем форму
    resetForm(state){
        let form = {
            datetime: "",
            status: "",
            call_to_client: false,
            partner: "",
            client_name: "",
            tel: "",
            product: "",
            claim: "",
            track_number: "",
            status_list: ['Отправлен', 'Принят', 'Закрыт', 'Не завершен']
        }
        state.form =  form;
    }
};

const actions = {
    //Диалоговое окно для выбора статуса
    changeStatus: ({commit, state}) => {
        action('Статус:', 'Отмена', state.form.status_list)
            .then(result => {
                if(result != "Отмена"){
                    commit('changeFormValue', {param:'status', val: result});
                }
            });
    },
    // Сохраняем данные в бд
    saveDoc: ({commit, state, rootState, dispatch}) => {
        rootState.database.database.execSQL("INSERT INTO documents (datetime, status, call_to_client, partner, client_name, tel, product, claim, track_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",[
                state.form.datetime,
                state.form.status,
                state.form.call_to_client,
                state.form.partner,
                state.form.client_name,
                state.form.tel,
                state.form.product,
                state.form.claim,
                state.form.track_number ])
                    .then(id => {
                        let repair = {id: id, ...state.form};
                        commit('addToList', repair);
                        commit('resetForm');
                    }, error => {
                        console.log("INSERT ERROR", error);
                    });
    }
}

export default {
    state,
    mutations,
    actions
};