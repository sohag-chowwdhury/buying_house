<template class="black"> 
    
        <v-layout row wrap justify-center>
          <top-button></top-button>
          <v-flex xs12 md11 sm12 lg11 text-center class="mt-0">     
             <v-carousel
    cycle
    height="370"
    hide-delimiter-background
    show-arrows-on-hover
  >
     <v-carousel-item
                      
     v-for="slider in sliderItem"
    :key="slider.index"
    :src="slider.slidertImages" >    
            <div :class="color === 'black' ? 'title-home-black' : '' || color === 'purple' ? 'title-home-purple' : '' || color === 'orange' ? 'title-home-orange' : '' || color === 'error' ? 'title-home-error' : '' " class="title-home rounded-tr-xl rounded-bl-xl ">
            <v-flex text-center > 
                 <h3  class=" my-2 white--text ">
                     <span class="main-heading-primary
                     ">
                      
                        <span style="font-size:1.4em !important;" class="my-7">
                            {{slider.heading}}
                        </span>

                     
                    </span>
                </h3> 
             </v-flex>              
            </div>
    </v-carousel-item>
  </v-carousel>
    
    </v-flex>         
                     <v-flex xs12 md11 lg11 class="mt-0" >
                         <span class="main-heading-primary-product-about">
                            <v-layout row wrap justify-center>
                              <v-flex xs12 sm12 12 md12 lg12>
                                 
                                  <v-card height="155" class="black rounded-b-xl mx-2">
                                      <v-img  class="rounded-b-xl" height="145px" :src="home_img1">
                                         <v-flex xs11 sm11 md11 lg11 text-center class="mt-3"> 
                                                <v-layout>
                                                  <v-layout row wrap justify-center>
                                                  <v-flex xs12 md12 lg12 sm12>
                                                        <v-btn fab  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " x-large class="indigo darken-4 py-5">
                                                          <v-img max-width="35px" :src="home_img2"></v-img>
                                                      </v-btn>
                                                  </v-flex>
                                                  <v-flex xs12 md12 lg12 sm12 class="mt-n5">
                                                        <v-btn  large  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "  class="indigo darken-4 rounded-b-lg white--text px-10  "> 
                                                            <br> Our products</v-btn> 
                                                  </v-flex>
                                                  </v-layout>    
                                        
                                                  </v-layout>             
                                          </v-flex>
                                        </v-img>
                                  </v-card>
                                
                              </v-flex>
                            </v-layout>
                             
                     
                      </span>
                 </v-flex>              
           <v-flex  xs11 sm11 md11 lg11 text-center class="mt-0">
            <products></products>
          </v-flex>
          <v-flex  xs11 sm11 md11 lg11 text-center>
            <contact></contact>
          </v-flex>
          
        
        </v-layout>
</template>
<script>

import * as firebase  from 'firebase/app'
import 'firebase/firestore'
  export default {
    data: () => ({
         home_img1:require('../../public/assets/product.jpg'),
       home_img2:require('../../public/assets/product-icon.png'),
        categoryValue:'',
        categoriesItem:[],
         sliderItem:[],
        subCategories:[],
         subCategoryValue:[],  
         subCategory:'',
       products:[],
        category:'',
        addCategory:false,
        date:'',
        subCategorieValue:{
                 subCategoryName:''
             },
    }),
    created(){
             firebase.firestore().collection('Products').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.products.push(doc.data())
                 })
             }),
              firebase.firestore().collection('Slider').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.sliderItem.push(doc.data())
                 })
             })  
               firebase.firestore().collection('Categories').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.categoriesItem.push(doc.data())
                 })
             })
             

               
    },
      computed: {
       userAuth () {
         return this.$store.getters.user  !== null &&  this.$store.getters.user !== undefined
       },
        color () {
         return this.$store.getters.color
       }
       },
    methods:{
        subFilter(){
             firebase.firestore().collection("Products").where("reviews.subCategory", "==", this.subCategory)
                    .get()
                    .then((querySnapshot)=>{
                    querySnapshot.forEach((foc)=> {
                       
                        this.products.length = 0
                        this.products.push(foc.data())
                    
                        
                        });
                 })
                .catch((error)=> {
                 alert(error)
                });
        },
        subCategoryAdd(){
             firebase.firestore().collection("Products").where("category", "==", this.category)
                    .get()
                    .then((querySnapshot)=>{
                    querySnapshot.forEach((foc)=> {
                      
                        this.products.length = 0
                        this.products.push(foc.data())
                        
                        
                        });
                 })
                .catch((error)=> {
                alert(error)
                });
                 for ( let i = 0; i < this.categoriesItem.length ; i++) {
                    if(  this.category ==   this.categoriesItem[i].categoryName ){
                        this.subCategoryValue.length = 0
                         this.subCategoryValue = this.categoriesItem[i].subCategories
                    }
                }
            },
      
    }
  }
</script>

<style >

.title-home {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(24, 37, 214, 0.801) !important;
        color: rgb(233, 86, 1) !important;
        opacity: .95;
    }
    .title-home-orange {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(235, 103, 15, 0.801) !important;
        color: rgb(233, 86, 1) !important;
        border-radius: 15px;
        opacity: .95;
    }
    .title-home-purple {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(33, 13, 211, 0.801) !important;
        color: rgb(5, 30, 100) !important;
        opacity: .95;
    }
    .title-home-error {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(207, 12, 12, 0.801) !important;
        color: rgba(233, 1, 71, 0.76) !important;
        opacity: .95;
    }
    .title-home-black {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(1, 3, 22, 0.801) !important;
        color: rgb(17, 7, 1) !important;
        opacity: .95;
    }
   
  
    .main-heading {
  color: #777;
  text-transform: uppercase;
}
    .main-heading-primary {
  display: block;
  font-size: 1.40rem;
  font-weight: 700;
  letter-spacing: 4px;
  animation: moveInLeft 1s ease-out;
} 
  .main-heading-primary-product {
  display: block;
  font-size: 1.20rem;
  font-weight: 700;
  letter-spacing: 2px;
  animation: moveInLeft 1s ease-out;
}   

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  
  80% {
    transform: translateX(10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  
  80% {
    transform: translateX(-10px);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
