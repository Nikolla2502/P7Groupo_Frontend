import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from '@/views/connexion'
import Post from '@/views/post'
import Deconnexion from '@/views/deconnexion'
import Recovery from  '@/views/recovery'
import Edit from  '@/components/post/post_edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connexion',
    component: Connexion
  },
  {
    path:'/deconnexion',
    name: 'Deconnexion',
   component: Deconnexion
  },
  {
    path:'/post',
    name: 'Post',
   component: Post
  },
  {
    path:'/edit',
    name: 'Edit',
   component: Edit
  },
  {
    path:'/recovery',
    name: 'Recovery',
   component: Recovery
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
