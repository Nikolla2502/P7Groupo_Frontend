
<template>

     
    <div>
        <Banner message="Votre réseau d'entreprise"></Banner>
    <div class="container mt-5 p-3 border border-dark shadow w-50 rounded-3">  
    <div class="row g-2">
    <div class="col-3">
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
    <div class="col-9">
        <div class="form-floating">
        <input type="text" class="form-control" id="floatingInputGrid" placeholder="" value="">
        <label for="floatingInputGrid">Le titre de votre post</label>
        </div>
    </div>
    </div>
    <div class="form-floating">
    <b-form-textarea
    class="mt-3"
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <label for="textarea">Le texte de votre post</label>
        <div class="d-flex justify-content-around">
            <label for="file-input" class="btn  mt-1 shadow-sm border border-dark">Add Image</label>
            <input class="d-none" id="file-input" type="file" />
        </div>
        
    </div>
  </div>
            <router-link to='/post'><button type="button" class="btn mt-5 shadow-sm border border-dark">Publier</button></router-link> 
    </div>
    
</template>
    
<script>
import Banner from '@/components/header.vue'

export default {
    name: "Edit",
    components: {
    Banner
    },
}

</script>



<style scoped>


.btn {
    font-size: 1.3rem;
    font-weight: 300;
    color: beige;
    background: #fd2d01;
    border: solid 1px #fd2d01;
    margin: .3rem auto;
    padding: .3rem 1rem;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}
.btn:hover {
    background: #FFF;
    color: #fd2d01;
    border: solid 1px #fd2d01;
    /* box-shadow: 2px 2px 2px 0px #fd2d01; */
    transition: 0.8s;
}
</style>>