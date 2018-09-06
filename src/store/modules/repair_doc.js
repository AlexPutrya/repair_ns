const state = {
    datetime: "",
    status_id: "",
    partner_id: "",
    client_name: "",
    telephone: "",
    product: "",
    claim: "",
    track_number: "",
    call_to_client: 0,
};

const mutations = {
    set_state(state, payload) {
        state.obj = { payload };
    }
};

const actions = {
    
};

export default {
    state,
    mutations,
    actions
};