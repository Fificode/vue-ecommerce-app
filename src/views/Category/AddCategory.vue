<template>
<div class="mx-5">
    <h3 class="text-center">Add Category</h3>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
  <div class="mb-3">
    <label for="InputName" class="form-label">Category Name</label>
    <input type="text" class="form-control" id="InputName" v-model="categoryName">
  </div>
  <div class="mb-3">
    <label for="InputDescription" class="form-label">Category Description</label>
    <textarea type="text" class="form-control" id="InputDescription" v-model="categoryDescription"></textarea>
  </div>
  <div class="mb-3">
    <label for="InputImage" class="form-label">Category Image</label>
    <input type="text" class="form-control" id="InputImage" v-model="imageUrl">
  </div>
  
  <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
</form>
      </div>
      <div class="col-3"></div>

</div>
</div>
</template>
<script>
// const axios = require("axios");
export default {
  
    data() {
return {
  categoryName: "",
  categoryDescription: "",
  imageUrl: "",
}
    },
    methods: {
      addCategory() {
        console.log(this.categoryName, this.categoryDescription, this.imageUrl);
      }
    }
}
</script>
<style scoped>

</style>