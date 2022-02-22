<template>
        <div class="login__box">
          <h1>Bonjour</h1>
          <p>Merci de vous connecter</p>
          <form>
            <input type="email" placeholder="Votre Email">
            <input type="password" placeholder="Votre Mot de Passe">
          </form>
          <router-link to='/post'><button class="px-2 rounded-3" >Connexion</button></router-link>
          <p class="recover">
          <span class="bar"></span>
            Mot de passe perdu ?<br>
            <router-link to='/recovery' class="text-decoration-none text-dark">Récuperation de votre mot de Passe</router-link>
          </p>
        </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style></style>
