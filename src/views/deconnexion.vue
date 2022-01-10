<template>
<div class="deconnexion">
     <Banner message="Votre réseau d'entreprise"></Banner>
    <div class="deconnexion_body">
    <p>Vous êtes deconnecte</p>
    <h2>Au revoir</h2>
    <h3>A tres bientot sur votre reseau</h3>
    <router-link to='/'><button>Je veux me reconnecter</button></router-link>
    </div>
    <Footer></Footer>

</div>
</template>

<script>
import Banner from '../components/header.vue'
import Footer from '../components/footer.vue'



export default {
    name: 'Deconnexion',
    components: {
    Banner,
    Footer
    },

}
</script>

<style scoped>

.deconnexion {
   min-height:100%;

}

.deconnexion button {
    width:auto;
    padding: 8px 5px;
}
p, h2, h3 {
    margin: 40px 0;
}

</style>