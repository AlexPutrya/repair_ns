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
        status_list: ['отправлено', 'принято']
    }
};

const mutations = {
    changeFormValue(state, params){
        this.state.form[params.param] = params.val; 
    }
};

const actions = {
    docFilter: ({commit, state}) => {
        action('Статус:', 'Отмена', state.status_list)
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