<template>
    <div class="register__box">
        <h1>Rejoignez-nous</h1>
        <p>sur votre réseau d'entreprise</p>
        <form>
            <input type="text" placeholder="Votre Pseudo">
            <input type="text" placeholder="Votre Email">
            <input type="password" placeholder="Votre Mot de Passe">
            <input type="password" placeholder="Confirmer votre Mot de Passe">
        </form>
        <router-link to='/post'><button>Inscription</button></router-link>
</div>
</template>

<script>
export default {
  name: 'Register',

}
</script>


<style></style>
