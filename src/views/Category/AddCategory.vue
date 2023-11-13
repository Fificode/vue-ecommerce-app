<template>
<div class="mx-5">
    <h3 class="text-center">Add Category</h3>
<form>
  <div class="mb-3">
    <label for="InputName" class="form-label">Category Name</label>
    <input type="text" class="form-control" id="InputName">
  </div>
  <div class="mb-3">
    <label for="InputDescription" class="form-label">Category Description</label>
    <input type="text" class="form-control" id="InputDescription">
  </div>
  <div class="mb-3">
    <label for="InputImage" class="form-label">Category Image</label>
    <input type="text" class="form-control" id="InputImage">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>
<script>
export default {
    setup() {

    }
}
</script>
<style scoped>

</style>