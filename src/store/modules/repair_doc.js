const state = {
    datetime: "",
    status: "",
    call_to_client: false,
    partner_id: "",
    client_name: "",
    telephone: "",
    product: "",
    claim: "",
    track_number: "",
    status_list: ['отправлено', 'принято']
};

const mutations = {
    changeStatus(state, status) {
        state.status = status;
    }
};

const actions = {
    doc_filter: ({commit, state}) => {
        action('Статус:', 'Отмена', state.status_list)
            .then(result => {
                if(result != "Отмена"){
                    commit('changeStatus', result);
                }else {
                    console.log(result);
                }
            });
        }
}

export default {
    state,
    mutations,
    actions
};