<template>
      
     <v-layout row wrap justify-center>
                  
                   <v-flex xs12 sm6 md4 lg4   v-for="(item,index) in categoriesItem" :key="index.item">
                     <router-link :to="/product/ +item.categoryId">
                       <v-card class="ml-2 mt-1  grey lighten-3"  height="360"  >
                         <div class="mt-10">
                             <v-hover v-slot="{ hover }">
                              <v-img class="mx-2  "  height="355"  :src="item.imageLink">
                               <v-flex v-if="!hover" text-center
                               
                                :class="color === 'black' ? 'title-product-product-dark' : '' || color === 'purple' ? 'title-product-product-purple' : '' || color === 'orange' ? 'title-product-product-orange' : '' || color === 'error' ? 'title-product-product-error' : '' "
                                class="title-product-product rounded-tr-xl rounded-bl-xl" > 
                                <h3  class=" my-1 white--text main-heading">
                                    <span class="main-heading-primary-product">
                                        {{item.categoryName}}                                    
                                    </span>
                                </h3> 
                              </v-flex>
                               <div
                                    v-if="hover"
                                     :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "
                                    class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal  white--text"
                                    style="height: 100%; opacity:.85;"
                                >
                                    <v-flex text-center 
                                      :class="color === 'black' ? 'title-product-hover-product-dark' : '' || color === 'purple' ? 'title-product-hover-product-purple' : '' || color === 'orange' ? 'title-product-hover-product-orange' : '' || color === 'error' ? 'title-product-hover-product-error' : '' "
                                     class="title-product-hover-product" > 
                                        <h3  class=" my-1 white--text main-heading">
                                            <span class="main-heading-primary-product"   style=" opacity:1;">
                                               For Details <br>
                                               <v-icon large color="white">
                                                   mdi-cursor-default-click
                                               </v-icon>
                                            </span>
                                        </h3> 
                                    </v-flex>
                                </div>
                          </v-img>
                             </v-hover>
                         </div>
                       </v-card>
                       </router-link>
                   </v-flex>
               </v-layout>
</template>
<script>

import * as firebase  from 'firebase/app'
import 'firebase/firestore'
  export default {
    data: () => ({
        categoriesItem:[],            
    }),
     computed: {
       userAuth () {
         return this.$store.getters.user  !== null &&  this.$store.getters.user !== undefined
       },
        color () {
         return this.$store.getters.color
       }
       },
    created(){                  
               firebase.firestore().collection('Categories').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.categoriesItem.push(doc.data())
                 })
             })              
    },
    
   
  
  }
</script>

<style >

.title-product {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(1, 20, 104, 0.87) !important;
        color: rgb(211, 114, 3) !important;
        border-radius: 25px;
      
    }
    .title-product-product {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(4, 33, 161, 0.87) !important;
        color: rgb(20, 92, 92) !important;
      
      
    }
   
     .title-product-hover-product {
        position: absolute;
        bottom:125px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgb(27, 29, 139) !important;
        color: rgb(241, 140, 7) !important;
        
       
    }

    .title-product-orange {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(216, 82, 5, 0.87) !important;
        color: rgb(240, 114, 11) !important;
       
      
    }
    .title-product-product-orange {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(226, 105, 6, 0.87) !important;
        color: rgb(221, 123, 10) !important;
       
      
    }
   
     .title-product-hover-product-orange {
        position: absolute;
        bottom:125px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgb(238, 96, 13) !important;
        color: rgb(241, 140, 7) !important;
        border-radius: 50px;
       
    }

    .title-product-purple {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(39, 25, 240, 0.87) !important;
        color: rgb(47, 13, 236) !important;
      
      
    }
    .title-product-product-prple {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(4, 33, 161, 0.87) !important;
        color: rgb(15, 30, 238) !important;
      
      
    }
   
     .title-product-hover-product-purple {
        position: absolute;
        bottom:125px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgb(26, 29, 214) !important;
        color: rgb(37, 23, 240) !important;
        border-radius: 50px;
       
    }
    .title-product-error {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(158, 14, 46, 0.87) !important;
        color: rgb(199, 10, 67) !important;
      
      
    }
    .title-product-product-error {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(243, 11, 81, 0.884)!important;
        color: rgb(122, 12, 36) !important;
      
      
    }
   
     .title-product-hover-product-error {
        position: absolute;
        bottom:125px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgb(143, 12, 51) !important;
        color: rgb(131, 7, 44) !important;
        border-radius: 50px;
       
    }
    .title-product-dark {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(20, 22, 22, 0.986) !important;
        color: rgb(24, 25, 26) !important;
      
      
    }
    .title-product-product-dark {
        position: absolute;
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(20, 20, 20, 0.87) !important;
        color: rgb(15, 17, 17) !important;
      
      
    }
   
     .title-product-hover-product-dark {
        position: absolute;
        bottom:125px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(14, 15, 15, 0.082) !important;
        color: rgb(22, 26, 27) !important;
        border-radius: 50px;
       
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