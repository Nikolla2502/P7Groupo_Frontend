<template>
        <div class="login__box">
        <div class="w-100 m-auto  pt-5">
        <div class="form-floating">
        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
            <option selected></option>
            <option value="1">Cinéma</option>
            <option value="2">Vacances</option>
            <option value="3">Sport</option>
        </select>
        <label for="floatingSelectGrid">Categorie</label>
        </div>
        </div>
<div>
  <b-dropdown id="dropdown" text="Categories" class="m-3">
    <b-dropdown-item>Cinéma</b-dropdown-item>
    <b-dropdown-item>Vacances</b-dropdown-item>
    <b-dropdown-item>Sport</b-dropdown-item>
  </b-dropdown>
</div>
        <div class="col-10 m-auto my-2">
        <div class="form-floating">
        <input type="text" class="form-control" id="floatingInputGrid" placeholder="" value="">
        <label for="floatingInputGrid">Le titre de votre post</label>
        </div>
        </div>
        <div class="d-flex justify-content-around mt-5">
          <label for="file-input" class="btn_media  mt-1 shadow-sm border">Ajouter un fichier</label>
          <input class="d-none" id="file-input" type="file" />
        </div>
          <router-link to='/post'><button type="button" class="btn_submit mt-5 shadow-sm border">Publier</button></router-link> 
        </div>
</template>

<script>


export default {
  name: 'PostMedia',
}
</script>
.btn {
  color:
}
<style>
.btn {
  background: #fd2d01;
  border: solid 1px #fd2d01;

}
.btn:hover {
    background: #FFF;
    color: #fd2d01;
    border: solid 1px #fd2d01;
}
</style>
