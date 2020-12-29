<template>
<div class=" lighten-4">
  <v-layout row wrap justify-center>
    <top-button></top-button>
     <v-flex xs12 sm12 md12 lg12 class="mt-0" >
                         <span class="main-heading-primary-product-about">
                            <v-layout row wrap justify-center>
                              <v-flex xs12 sm12 12 md12 lg12>
                                 
                                  <v-card height="175px" class="black  rounded-b-xl mx-2 mt-1">
                                      <v-img  class="rounded-b-xl my-3" height="170px" :src="about_img1">
                                         <v-flex xs11 sm11 md11 lg11 text-center class="mt-3"> 
                                                <v-layout>
                                                  <v-layout row wrap justify-center>
                                                  <v-flex xs12 md12 lg12 sm12>
                                                        <v-btn fab :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " x-large class="indigo darken-4 py-5">
                                                          <v-img max-width="55px" :src="about_img2"></v-img>
                                                      </v-btn>
                                                  </v-flex>
                                                  <v-flex xs12 md12 lg12 sm12 class="mt-n5">
                                                        <v-btn  large  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "  class="indigo darken-4 rounded-b-lg white--text px-10  "> 
                                                            <br><span class="mx-10">About us</span> </v-btn>
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
  </v-layout>
  <v-container class=" lighten-4">
    <v-layout row wrap justify-center>
      <v-flex xs12 class="title-product-about" sm12 md10 lg10 v-for="(itemAbout,index) in aboutCategories" :key="itemAbout.index">
        <v-card class=" lighten-4 my-1">
          <p hidden>{{index}}</p>
          <v-btn color=" darken-4" outlined class="white--text ml-3  main-heading-about my-5">{{itemAbout.categoryAbout}}</v-btn>
          <v-layout  row wrap justify-center>
            <v-flex xs12 sm12 md12 lg12  v-for="(itemSection,index) in section" :key="itemSection.index">
               <p hidden>{{index}}</p>
               <v-btn x-small color="orange" class="my-2 ml-5"  v-if="itemAbout.categoryAbout == itemSection.section && itemSection.subSection != '' ">{{itemSection.subSection}}</v-btn>
               <span class="main-heading-primary-product-about">
                 <p class="ml-8" v-if="itemAbout.categoryAbout == itemSection.section" v-html="itemSection.descriptionSection"></p>                                 
                </span>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
<script>

import * as firebase  from 'firebase/app'
import 'firebase/firestore'

  export default
   {
    data: () => ({
       about_img1:require('../../public/assets/about.jpg'),
       about_img2:require('../../public/assets/about-con.png'),
        aboutCategories:[],   
        section:[]         
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
               firebase.firestore().collection('AboutCategories').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.aboutCategories.push(doc.data())
                 })
             }) 
             firebase.firestore().collection('Section').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.section.push(doc.data())
                 })
             })              
    },
   
  
  }
</script>
<style >

.title-about {
       
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        background-color: rgba(103, 69, 182, 0.87) !important;
        color: rgb(20, 92, 92) !important;
        border-radius: 25px;
        opacity: 1;
    }
    .title-product-about {
       
        bottom:45px !important;
         right:25% !important;
         left:25% !important;
        
     
        color: rgb(20, 92, 92) !important;
        border-radius: 12px;
        opacity: 1;
    }
    
    

    .main-heading {
  color: #777;
  text-transform: uppercase;
}
    .main-heading-primary-about {
  display: block;
  font-size: 1rem;
  letter-spacing: 4px;
  animation: moveInLeft 1s ease-out;
} 
  .main-heading-primary-product-about {
  display: block;
  font-size: 1.0rem;
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
