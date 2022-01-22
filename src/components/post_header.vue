<template>
    <div class='banner_post'>
        <div class='banner_main'>
            <div class='header'>
                <img alt="Vue logo" src="../assets/groupomania_txt.png">
            </div>
            <div class='profil'>
                <ul>
                    <li class='userProfil'>Profil</li>
                    <li><router-link to='/deconnexion'>Deconnexion</router-link></li>
                </ul>
            </div> 
         </div>
    </div>
</template>


<script>


export default {
    name: 'BannerPost',
    components: {

    },
}
</script>

<style scoped>
.header 
{
    margin-left: auto;
    padding-top: 10px;
    background: #FFF;
}
img {
    width:100%;
}
.banner_main {
    display: flex;
    justify-content:space-between;
    background: rgb(255, 255, 255);
    border-bottom: 3px solid #fd2d01 ;
    margin:auto;
}
.profil {

    margin:1rem auto ;
    border:solid 1px #fd2d01;
    padding:3px 10px;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
    
}
.profil ul {
    text-align: left;
    list-style: none;
}




</style>