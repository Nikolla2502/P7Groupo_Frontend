<template>
  <div class="hello">
        <div class="section">
        <div class="login__header">
            <div class="login">Connexion</div>
            <div class="login"><a href="register.html">Inscription</a></div>
        </div>
        <div class="login__box">
            <h1>Bonjour</h1>
            <p>Merci de vous connecter</p>
            <form>
                <input type="text" placeholder="Votre Email">
                <input type="password" placeholder="Votre Mot de Passe">
            </form>
            <button>Connexion</button>
            <p class="recover">
                <a href="#">Recuperation Mot de Passe</a>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Connexion',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Poppins",sans-serif;
}
a {
    text-decoration: none;
}
body {
    background: #dfe9f5;
}

.section {
    width: 330px;
    margin: 45px auto;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
}
.login__header{
    display: flex;

}
.login {
    width:50%;
    font-size: 1.3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login:first-child {
    border-radius: 10px 0 0 0;
    border: solid 1px #333;
    border-bottom: none;
}

.login:last-child {
    border-radius: 0 10px 0 0;
    border: solid 1px #333;
}
.login:last-child {
    border-radius: 0 10px 0 0;
    background-color: #dfe9f5;
}
.login__box {
    border: solid 1px #333;
    border-top: none;
    border-radius: 0 0 10px 10px;
}
h1 {
    font-size: 2rem;
    color: #07001f;
    padding-top: 1rem;
}
p {
    margin-bottom: 1rem;
}
form input{
    width: 85%;
    outline: none;
    border: none;
    background: #dfe9f5;
    padding: 15px 0;
    margin-bottom: 20px;
    border-radius: 10px;
    text-align: center;
}

.recover {
    /* text-align: right; */
    font-size: 0.8rem;
    margin: 1rem 0;
}
.recover a {
    text-decoration: none;
    color: #07001f;
}

button {
    font-size: 1.1rem;
    margin-top: 1rem;
    padding: 8px 0;
    border-radius: 5px;
    outline: none;
    border: none;
    width: 85%;
    background:#fd2d01;
    border:solid 2px #fd2d01;
    color: #fff;
    cursor: pointer;
}
button:hover {
    background: #FFF;
    color: #fd2d01;
    transition: 0.8s;
}

a:hover {
    text-decoration: underline;

}
</style>
