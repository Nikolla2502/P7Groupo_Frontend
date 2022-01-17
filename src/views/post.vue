<template>
<div class="contenu">
    <BannerPost></BannerPost>
    <BodyPost></BodyPost>

</div>
</template>

<script>

import BannerPost from '../components/post_header.vue'
import BodyPost from '../components/post_body.vue'




export default {
    name: 'Post',
    components: {
    BannerPost,
    BodyPost

    },

}
</script>

<style scoped>


</style>