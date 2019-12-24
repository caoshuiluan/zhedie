// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './mock'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store'
// import store from './store/index.js'

// import Vuex from 'vuex'

// Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
// // import Less from 'Less'

// // 将axios挂载到原型上
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  components: { App },
  template: '<App/>'
})
// import Vue from 'vue'

// import Cookies from 'js-cookie'

// import 'normalize.css/normalize.css' // a modern alternative to CSS resets


// import './styles/element-variables.scss'

// import '@/styles/index.scss' // global css

// import App from './App'
// import store from './store'
// import router from './router'

// import './icons' // icon
// import './permission' // permission control
// import './utils/error-log' // error log

// import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium' // set element-ui default size
// })

// register global utility filters
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })

