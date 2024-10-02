require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.component('example-component', require('./components/Example.vue').default);

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
});