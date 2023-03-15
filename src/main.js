import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '../src/components/Store/index'
import axios from 'axios'
// import moment from 'moment'

Vue.use(ElementUI)
// console.log(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // to到哪儿 from从哪儿离开 next跳转 为空就是放行
  if (to.path === '/') {
    // 如果跳转为登录，就放行
    next()
  } else {
    // 取出localStorage判断
    const token = localStorage.getItem('token')
    if (token == null || token === '') {
      alert('请先登录')
      next({ path: '/' })
    } else {
      next()
    }
  }
})

// 配置公共url
// Axios.defaults.baseURL = 'http://127.0.0.1/api/'
axios.interceptors.request.use(config => {
  // eslint-disable-next-line no-empty
  if (config.push === '/') {
  } else {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    }
  }
  return config
},
error => {
  return Promise.reject(error)
})

// 定义一个全局过滤器实现日期格式化

// Vue.filter('datefmt', function (input, 'YYYY-MM-DD') {

//   return moment.unix(input).format('YYYY-MM-DD')

// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
