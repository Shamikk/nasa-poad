import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import BootstrapVue from 'bootstrap-vue'
import DatePicker from 'vue-bootstrap-datetimepicker'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css"
import '../node_modules/pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'

Vue.use(BootstrapVue)
Vue.component('date-picker', DatePicker)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
