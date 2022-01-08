import Connexion from './components/loginForm/connexion'
import Post from './components/post'

export default [
    {path: '/', component: Connexion},
    {path:'/post', component: Post}
]