<template>
<div class="contenu">
     <Banner message="Votre réseau d'entreprise"></Banner>

     
    <ul>
        <li class='userProfil'>Profil</li>
        <li><router-link to='/deconnexion'>Deconnexion</router-link></li>
    </ul>
    
    <Footer></Footer>

</div>
</template>

<script>
import Banner from '../components/header.vue'
import Footer from '../components/footer.vue'



export default {
    name: 'Post',
    components: {
    Banner,
    Footer
    },

}
</script>

<style scoped>
ul {
    position: absolute;
    top:30px;
    right:30px;
    background: #FFF;
    margin-top: 5px;
    text-align: left;
    padding:5px 10px;
    display: inline-block;
    list-style: none;
    border-radius: 5px;
    border:solid 1px #fd2d01;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
}


</style>