const Sqlite = require('nativescript-sqlite');

const state = {
    database: null,
}

const mutations = {
    init(state, data) {
        state.database = data.database;
    },
    // load(state, data) {
    //     state.data = [];
    //     for(var i = 0; i < data.data.length; i++) {
    //         state.data.push({
    //             firstname: data.data[i][0],
    //             lastname: data.data[i][1]
    //         });
    //     }
    // },
    // save(state, data) {
    //     state.data.push({
    //         firstname: data.data.firstname,
    //         lastname: data.data.lastname
    //     });
    // },
}

const actions = {
    init(context) {
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS documents (\
                        id INTEGER PRIMARY KEY AUTOINCREMENT,\
                        datetime TEXT,\
                        status TEXT,\
                        call_to_client BOOL,\
                        partner TEXT,\
                        client_name TEXT,\
                        tel TEXT,\
                        product TEXT,\
                        claim TEXT,\
                        track_number TEXT)\
                        ")
            .then(id => {
                context.commit("init", { database: db });
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    },
    // insert(context, data) {
    //     context.state.database.execSQL("\
    //         INSERT INTO documents (datetime, status, call_to_client, partner, client_name, tel, product, claim, track_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    //         [data.datetime, data.status, data.call_to_client, data.partner, data.client_name, data.tel, data.product, data.claim, data.track_number ]).then(id => {
    //         // context.commit("save", { data: data });
    //     }, error => {
    //         console.log("INSERT ERROR", error);
    //     });
    // },
    // query(context) {
    //     context.state.database.all("SELECT * FROM documents", []).then(result => {
    //         console.log(result);
    //         // context.commit("load", { data: result });
    //     }, error => {
    //         console.log("SELECT ERROR", error);
    //     });
    // }
}

export default{
    state,
    mutations,
    actions
}