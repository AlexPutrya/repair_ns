import Vue from 'nativescript-vue';

import Home from './components/Home';

import router from './router';
import store from './store';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue(
    {
    router,
    store,
    render: h => h(Home),

}).$start();