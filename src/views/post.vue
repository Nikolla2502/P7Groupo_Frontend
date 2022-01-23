<template>
<div class="contenu">
    <BannerPost></BannerPost>
    <BodyPost></BodyPost>
</div>
</template>

<script>

import BannerPost from '../components/post/post_header.vue'
import BodyPost from '../components/post/post_body.vue'




export default {
    name: 'Post',
    components: {
    BannerPost,
    BodyPost

    },

}
</script>

<style src='../components/post/post.css'></style>
