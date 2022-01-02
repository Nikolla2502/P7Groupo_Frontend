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
}
.header 
{
    margin-top: 40px;
    border-bottom: 3px solid #fd2d01 ;
}
</style>