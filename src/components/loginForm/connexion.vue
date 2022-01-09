<template>
<div>
     <Banner message="Bienvenue sur votre réseau d'entreprise"></Banner>

    <div class="connexion">
        <div class="login__header">
            <div class="login" v-bind:style='{"background-color" : (cardLoginActive? "white" : "#dfe9f5" ),"border-bottom" : (cardLoginActive? "none" : "solid 1px black" )}' v-on:click='toggleLogin()'>Connexion</div>
            <div class="register" v-bind:style='{"background-color" : (cardRegisterActive? "white" : "#dfe9f5" ),"border-bottom" : (cardRegisterActive? "none" : "solid 1px black" )}' v-on:click='toggleRegister()'>Inscription</div>
        </div>
        <Login v-if ='cardLogin'></Login>
        <Register v-if='cardRegister'></Register>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/header.vue'
import Footer from '@/components/footer.vue'

import Login from '@/components/loginForm/login.vue'
import Register from '@/components/loginForm/register.vue'

export default {
    name: 'Connexion',
    components: {
    Banner,
    Footer,
    Login,
    Register
    },
    data() {
        return {
            cardLogin:true,
            cardRegister:false,
            cardLoginActive: true,
            cardRegisterActive:false,
        }
    },
    methods : {
    toggleLogin: function(){
      this.cardLogin = true,
      this.cardRegister = false
      this.cardLoginActive = true,
      this.cardRegisterActive = false
    },
    toggleRegister: function(){
      this.cardLogin = false,
      this.cardRegister = true
      this.cardLoginActive = false,
      this.cardRegisterActive = true
    }
    }
}
</script>

<style src='./loginForm.css'></style>