<template>
<div class="essai">
    <Banner message="Votre réseau d'entreprise"></Banner>

    <div class="connexion">
        <div class="login__header">
            <div class="post_text login" v-bind:style='{"background-color" : (cardTextActive? "white" : "#dfe9f5" ),"border-bottom" : (cardTextActive? "none" : "solid 1px black" )}' v-on:click='toggleText()'>Poster un message</div>
            <div class="post_media register" v-bind:style='{"background-color" : (cardMediaActive? "white" : "#dfe9f5" ),"border-bottom" : (cardMediaActive? "none" : "solid 1px black" )}' v-on:click='toggleMedia()'>Poster un fichier multimedia</div>
        </div>
        <PostText v-if ='cardText'></PostText>
        <PostMedia v-if='cardMedia'></PostMedia>
    </div>

</div>
</template>

<script>
import Banner from '@/components/header.vue'


import PostText from './post_edit_text.vue'
import PostMedia from './post_edit_media.vue'

export default {
    name: 'Edit',
    components: {
    Banner,
    PostText,
    PostMedia
    },
    data() {
        return {
            cardMedia:false,
            cardText:true,
            cardMediaActive: false,
            cardTextActive:true,
        }
    },
    methods : {
    toggleMedia: function(){
      this.cardMedia = true,
      this.cardText = false
      this.cardMediaActive = true,
      this.cardTextActive = false
    },
    toggleText: function(){
      this.cardMedia = false,
      this.cardText = true
      this.cardMediaActive = false,
      this.cardTextActive = true
    }
    }
}
</script>

<style src='../loginForm/loginForm.css'></style>