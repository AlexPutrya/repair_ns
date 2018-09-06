import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';
import RepairList from '../components/RepairList';
import RepairDoc from '../components/RepairDoc';

Vue.use(VueRouter);

const router = new VueRouter({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                title: "Главная"
            }
        },
        {
            path: '/repair-list',
            component: RepairList,
            meta: {
                title: "Заявки на ремонт"
            }
        },
        {
            path: '/repair-doc',
            component: RepairDoc,
            meta: {
                title: "Заявка на ремонт"
            }
        },
        {path: '*', redirect: '/home'}  
    ],
});

router.replace('/home');

module.exports = router;