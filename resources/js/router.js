// Laravel6.xとVue Routerでvue.jsのSPA構築
// https://reffect.co.jp/laravel/laravel-vue-router-single-page-application

import Vue from 'vue'
import Router from "vue-router"
import Example from "./components/Example.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example
    },
  ]
});