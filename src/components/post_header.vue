<template>
    <div class='banner_post'>
        <div class='banner_main'>
            <div class='header'>
                <img alt="Vue logo" src="../assets/groupomania_txt.png">
            </div>
            <div class='profil'>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" 
                    class="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                </path></svg>
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
    max-width:15%;
    margin:1rem auto ;
    border:solid 1px #fd2d01;
    padding:8px 10px;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
    
}
.profil ul {
    margin-top: 5px;
    text-align: left;
    display: inline-block;  
    list-style: none;
}
@media screen and (max-width: 1400px) {
    .profil ul li{
    display: none;
    }
    svg {
        margin: auto;
    }
}

svg {
    height:2.8rem;
    margin: auto 1rem;

}



</style>