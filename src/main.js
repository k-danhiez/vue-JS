import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    vuetify: new Vuetify(),
    render: h => h(App),
}).$mount('#app')