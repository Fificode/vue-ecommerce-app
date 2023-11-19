<template>
<div class="card" style="width: 18rem;">
    <div>
  <img :src="category.imageUrl" class="card-img-top" alt="Card Image cap">
</div>
  <div class="card-body">
    <h5 class="card-title">{{ category.categoryName }}</h5>
    <p class="card-text">{{ category.categoryDescription }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</template>
<script>
export default {
    name: 'CatgoryBox',
    props: ["category"],
    methods: {},
}

</script>