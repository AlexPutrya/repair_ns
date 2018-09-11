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
    // Меняем состояние по значению параметра 
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
    docFilter: ({commit, state}) => {
        console.log('action'),
        action('Статус:', 'Отмена', state.form.status_list)
            .then(result => {
                if(result != "Отмена"){
                    commit('changeFormValue', {param:'status', val: result});
                }else {
                    console.log(result);
                }
            });
    },
    saveDoc: ({commit, state}) => {
        //отправляем запрос на сохранение в бд
        //.then(
        // router.push('/repair_list');
        // )
        // .error(
    }
}

export default {
    state,
    mutations,
    actions
};