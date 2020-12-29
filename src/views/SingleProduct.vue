<template>
    <v-layout row wrap justify-center>
      <top-button></top-button>
      <top-button></top-button>
        <v-flex xs12 sm11 md11 lg11 >
           <v-layout row wrap justify-center>
               <v-flex xs12 sm12 md12 lg12 text-center>
                   <v-btn small class="indigo darken-4 my-1 white--text"  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " >{{categoriesItem.categoryName}}'s Details</v-btn>
               </v-flex>
               <v-flex xs11 sm5 md5 lg5 text-center>
                   <span class="main-heading-primary-product-about mt-7">
                    <v-img height="470" :src="categoriesItem.imageLink">                 
                    </v-img>
                     </span>
               </v-flex>
                <v-flex  xs11 sm5 md5 lg5 text-center>
                <v-flex xs12 sm12 md12 lg12 text-center>
                    <v-btn x-small outlined class="my-1 black--text" color="black">Description</v-btn>
                 </v-flex>
                  <v-card  class=" text lighten-4 mx-3   ">
                      <span v-if="!hide" class="main-heading-primary-product-about card-text-height">
                        <p  v-html="categoriesItem.descriptionproductCat">                       
                         </p>                   
                      </span>
                       <span v-if="hide" class="main-heading-primary-product-about">
                        <p  v-html="categoriesItem.descriptionproductCat">                       
                         </p>                   
                      </span>
                          <v-flex text-end> <v-btn color="info" small class="my-2 mx-5" v-if="!hide"  @click="hideData">Read More</v-btn></v-flex>
                           <v-flex text-end> <v-btn color="error" small class="my-2 mx-5" v-if="hide"  @click="hideData">Minimize</v-btn></v-flex>
                  </v-card>
               </v-flex>
           </v-layout>
           <v-layout row wrap justify-center class="mt-10">
               <v-flex xs11 sm12 md12 lg12 text-center>
                
                   <v-layout row wrap justify-center>                  
                             <v-flex xs12 sm12 md12 lg12 text-center>
                                 <v-btn x-small class="indigo darken-4 my-1 white--text"  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " >{{categoriesItem.categoryName}}'s Photo gallery</v-btn>  
                               </v-flex>                                    
                           <v-flex  xs12 sm12 md12 lg12 text-center >
                              <v-layout row wrap justify-center  style="border-top-style: solid; border-color:purple">
                                <v-flex xs2 md1 lg1 class="mt-1" x-small color="purple white--text">
                                  <v-btn  x-small color="black white--text">  Filter:</v-btn>                                
                                </v-flex>
                                 <v-flex xs2 md1 lg1 class="mt-1" x-small color="purple white--text">
                                  <v-btn  x-small :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "  class="indigo darken-4 ml-1 white--text"  @click="filterAll"> All </v-btn>
                                 
                                </v-flex>
                                <v-flex class="mt-1" v-for="(item, index) in categoriesSubItem.subCategories" :key="item.index">
                                     <p hidden>{{index}}</p>
                                     <v-btn x-small :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " class="indigo darken-4 ml-1 white--text"  @click="filter(item.subCategoryName)" >
                                        {{item.subCategoryName}}
                                     </v-btn>
                                </v-flex>
                              </v-layout>                              
                           </v-flex>
                   </v-layout>
                   <v-layout row wrap justify-center>                    
                       <v-flex xs6 sm4 md3 lg3  v-for="(item,index) in products" :key="item.index">
                              <v-card height="257" :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "   class="rounded-bl-xl rounded-tr-xl mx-1 my-1 purple lighten-4"    >
                         <div class="my-2" >                              
                              <v-img class=" rounded-bl-xl rounded-tr-xl"  max-width="520" height="250"  :src="item.productImages">
                               <div class="title-button"><v-btn  small color="black"  > <unit-update v-bind:key="item.productImages" v-bind:item ="item.productImages" ></unit-update></v-btn></div>
                               <v-flex  text-center class="title-product" > 
                                <h4  class=" my-1 white--text main-heading">
                                    <p hidden>{{index}}</p>
                                    <span style="font-size:1em !important;" class="main-heading-primary-product">
                                        {{item.name}}
                                    </span>
                                </h4> 
                              </v-flex>
                              
                          </v-img>
                           
                         </div>
                       </v-card>
                       </v-flex>
                          <v-flex  xs11 sm11 md11 lg11 text-center>
                              <contact></contact>
                         </v-flex>
                   </v-layout>
               </v-flex>              
           </v-layout>
        </v-flex>
        
           
    </v-layout>
</template>
<script>

import * as firebase  from 'firebase/app'
import 'firebase/firestore'
  export default {
    data: () => ({
        hide:false,
        categoriesItem:{},  
        products:[],   
        categoriesItemName:'',
        categoriesSubItem:{}    
    }),
    props:['id'],
    computed: {
       userAuth () {
         return this.$store.getters.user  !== null &&  this.$store.getters.user !== undefined
       },
        color () {
         return this.$store.getters.color
       }
    },
    methods:{
        hideData(){
          this.hide = !this.hide
        },
      filter(e){
     
          this.products.length = 0
         firebase.firestore().collection('Products').where("category","==", this.categoriesItemName).where("subCategory", "==", e).get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{
                            
                          this.products.push(doc.data())
                       
                       })
                    })
      },
       filterAll(){
          this.products.length  = 0
         firebase.firestore().collection('Products').where("category","==", this.categoriesItemName).get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{                  
                          this.products.push(doc.data())
                         
                       })
                    })
      }
    },
    created(){                  
               firebase.firestore().collection('Categories').where("categoryId", "==", this.id).get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.categoriesItem = (doc.data())
                     this.categoriesItemName = this.categoriesItem.categoryName
                    
                      firebase.firestore().collection('Products').where("category","==", this.categoriesItemName).get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{
                          this.products.push(doc.data())
                       })
                    })
                 })
             })  
              firebase.firestore().collection('Categories').where("categoryId", "==", this.id).get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.categoriesSubItem =(doc.data())
                 })
             })

             
                         
    },
   
  
  }
  
   
      
     


</script>
 
  <style scoped>
 
      .card-text-height {
        height: 430px;
  overflow: hidden;
      }
     .text p  {
            font-size: 1.10em !important;
             color:rgb(7, 7, 7) !important;
     }
     .title-product {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
          font-size: 1.10em !important;
        background-color: rgba(6, 6, 7, 0.87) !important;
        color: rgb(20, 92, 92) !important;
        border-radius: 12px;
        opacity: .95;
    }
     .title-button {
        position: absolute;
        bottom:85% !important;
         right:0% !important;
         left:75% !important;
        
       
        border-radius: 12px;
        opacity: 1;
    }
    .title-product h4 {
        font-size: 1.10em !important;
    }
     .title-product-hover {
        position: absolute;
        bottom:125px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(22, 21, 19, 0.87) !important;
        color: rgb(223, 72, 12) !important;
        border-radius: 50px;
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