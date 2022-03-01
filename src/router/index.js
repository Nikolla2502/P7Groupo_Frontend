import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from '@/views/connexion'
import Post from '@/views/post'
import Deconnexion from '@/views/deconnexion'
import Recovery from  '@/views/recovery'
import Admin from '@/views/admin'
import Profil from "@/components/profil"

import Edit from '@/components/post/post_edit'
import Comment from '@/components/post/comment'

Vue.use(VueRouter)

const routes = [
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/",
    name: "Connexion",
    component: Connexion,
  },
  {
    path: "/deconnexion",
    name: "Deconnexion",
    component: Deconnexion,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/recovery",
    name: "Recovery",
    component: Recovery,
  },
  {
    path: "/user",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/comment",
    name: "Comment",
    component: Comment,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
