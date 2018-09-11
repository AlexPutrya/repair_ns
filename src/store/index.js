import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import repair_doc from './modules/repair_doc';
import repair_list from './modules/repair_list';

Vue.use(Vuex);

const store = new Vuex.Store({
  // Закоментить перед продакшеном для увеличения производительности
  strict: true,
    modules: {
      repair_doc,
      repair_list
    }
})

Vue.prototype.$store = store;

module.exports = store;