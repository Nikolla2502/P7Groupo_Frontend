<template>
  <div id="app">
    <Banner message="Bienvenue sur votre reseau d'entreprise"></Banner>
    <Connexion></Connexion>
  </div>
</template>

<script>
import Banner from './components/header.vue'
import Connexion from './components/connexion.vue'

export default {
  name: 'App',
  components: {
    Banner,
    Connexion,
    
  }
}
</script>

<style>
#app {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
