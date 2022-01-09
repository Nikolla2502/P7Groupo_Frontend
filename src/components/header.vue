<template>
    <div class='header'>
        <img alt="Vue logo" src="../assets/groupomania_txt.png">
        <h1>{{ message }}</h1>
    </div>
</template>


<script>
export default {
    name: 'Banner',
    props: {
        message : String,
    },
}
</script>

<style scoped>
h1 {
    margin: 0;
    padding:0;
}
.header 
{
    padding-top: 10px;
    border-bottom: 3px solid #fd2d01 ;
    background: #FFF;
}
img {
    width:30%;
}
</style>