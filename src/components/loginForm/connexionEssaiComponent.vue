<template>
<div>
    <div class="connexion">
    <div class="login__header">
        <div class="login" v-bind:style='{"background-color" : (cardLoginActive? "white" : "#dfe9f5" ),"border-bottom" : (cardLoginActive? "none" : "solid 1px black" )}' v-on:click='Component = "login"'>Connexion</div>
        <div class="register" v-bind:style='{"background-color" : (cardRegisterActive? "white" : "#dfe9f5" ),"border-bottom" : (cardRegisterActive? "none" : "solid 1px black" )}' v-on:click='Component = "register"'>Inscription</div>
    </div>
    <component v-bind:is='Component'></component>

    </div>
</div>
</template>

<script>
import Login from './login.vue'
import Register from './register.vue'

export default {
    name: 'Connexion',
    components: {
    'login':Login,
    'register':Register
    },
    data() {
        return {
            cardLogin:true,
            cardRegister:false,
            cardLoginActive: true,
            cardRegisterActive:false,
            Component: 'login'
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