<template>
    <div class='banner_post'>
        <div class='banner_main'>
            <div class='header'>
                <img alt="Vue logo" src="@/assets/groupomania_txt.png">
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

<style></style>