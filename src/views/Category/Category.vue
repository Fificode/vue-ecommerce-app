<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
        <h3 class="text-center">Our Categories</h3>
    </div>
    <div>{{ categories }}</div>
        </div>
        <div class="row"></div>
    </div>
    </template>
    <script>
    
 const axios = require("axios");
//  import Categorybox from '@/components/Category/Categorybox.vue';
    export default {
      name: 'Category-name',
        data() {
    return {
         baseURL: "https://ecommerce-project-1daf4-default-rtdb.firebaseio.com/data.json",
         categories: []
    }
        },
        methods: {
         async getCategories(){
            await axios.get(`${this.baseURL}`)
            .then((res) =>
            {
                if (res.ok){
          return res.json();
          
        }
            console.log(res);
        })
            .catch(err => console.log(err))
         },
         mounted(){
            this.getCategories();
         }
       }
}
    </script>
    <style scoped>
    
    </style>