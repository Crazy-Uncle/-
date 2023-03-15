import Vue from 'vue'
import VueRouter from 'vue-router'
import Particulars from '@/views/Particulars.vue'
import Collect from '@/views/Collect.vue'
import Users from '@/views/Users.vue'
import Login from '@/views/Login.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login, meta: { show: true } },
  { path: '/desc', component: Particulars },
  { path: '/collect', component: Collect },
  { path: '/user', component: Users }
]

const router = new VueRouter({
  routes
})

export default router
