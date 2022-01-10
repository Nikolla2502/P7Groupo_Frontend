<template>
        <div class="login__box">
          <h1>Bonjour</h1>
          <p>Merci de vous connecter</p>
          <form>
            <input type="text" placeholder="Votre Email">
            <input type="password" placeholder="Votre Mot de Passe">
          </form>
          <router-link to='/post'><button >Connexion</button></router-link>
          <p class="recover">
          <span class="bar"></span>
            Mot de passe perdu ?<br>
            <a href="#">Récuperation de votre mot de Passe</a>
          </p>
        </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style></style>
