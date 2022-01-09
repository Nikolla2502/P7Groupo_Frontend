<template>
<div>
     <Banner message="Votre réseau d'entreprise">
         </Banner>
    <Footer></Footer>

</div>
</template>

<script>
import Banner from './header.vue'
import Footer from './footer.vue'



export default {
    name: 'Post',
    components: {
    Banner,
    Footer
    },

}
</script>

<style>

</style>