import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from '@/views/connexion'
import Post from '@/components/post'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connexion',
    component: Connexion
  },
  {
    path:'/post',
    name: 'Post',
   component: Post}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
