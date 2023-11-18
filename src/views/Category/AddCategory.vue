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

// import { setDoc, doc, getDoc} from "firebase/firestore";
// import { ref } from 'firebase/database';
// import { db } from "@/firebase";

// const categoryRef = doc(db, 'createCategory', 'category');

// try {
//   await setDoc(categoryRef, categoryData);
//   console.log('User document successfully written!');
// } catch (error) {
//   console.error('Error writing user document: ', error);
// }

// try {
//   const categoryDocSnapshot = await getDoc(categoryRef);
//   if (categoryDocSnapshot.exists()) {
//     const categoryData = categoryDocSnapshot.data();
//     console.log('User data:', categoryData);
//   } else {
//     console.log('No such document!');
//   }
// } catch (error) {
//   console.error('Error getting category document:', error);
// }

const axios = require("axios");
export default {
  
    data() {
return {
  categoryName: "",
  categoryDescription: "",
  imageUrl: "",
   
}
    },
    methods: {
     
      addCategory(){
        // console.log(this.categoryName, this.categoryDescription, this.imageUrl);
//         const categoryData = {
//   categoryName: 'Louis Vuitton',
//   description: 'Louis Vuitton bags',
// id: 0,
//  imageUrl: 'https://louisvuitton.com',
//   products: [{
//     name: 'Louis Vuitton one bag',
//     description: 'Louis Vuitton one fall collection bag',
//     id: 0,
//     imageUrl:'https://louisvuittonone.com',
//     price: 3000
//   }]
// }
        const newCategory = {
          categoryName: this.categoryName,
          categoryDescription : this.categoryDescription,
          imageUrl : this.imageUrl,

        };
        const baseURL = "https://ecommerce-project-1daf4-default-rtdb.firebaseio.com/";
        axios({
          method: 'post',
          url: `${baseURL}`,
          data: JSON.stringify(newCategory),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
console.log("Successful!")
        }).catch(err => {
          console.log(err);
        })
      }

    }

    
}
</script>
<style scoped>

</style>