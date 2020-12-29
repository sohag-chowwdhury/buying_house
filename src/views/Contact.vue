<template>
    <v-container>
      <top-button></top-button>
        <v-flex xs12 sm12 md12 lg12 class="mt-0" >
                         <span class="main-heading-primary-product-about">
                            <v-layout row wrap justify-center>
                              <v-flex xs12 sm12 12 md12 lg12>
                                 
                                  <v-card height="175px" class="black  rounded-b-xl mx-2 mt-0">
                                      <v-img  class="rounded-b-xl my-3" height="170px" :src="contact_img1">
                                         <v-flex xs11 sm11 md11 lg11 text-center class="mt-3"> 
                                                <v-layout>
                                                  <v-layout row wrap justify-center>
                                                  <v-flex xs12 md12 lg12 sm12>
                                                        <v-btn fab  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "  x-large class="indigo darken-4 py-5">
                                                          <v-img max-width="55px" :src="contact_img2"></v-img>
                                                      </v-btn>
                                                  </v-flex>
                                                  <v-flex xs12 md12 lg12 sm12 class="mt-n5">
                                                        <v-btn  large  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "   class="indigo darken-4 rounded-b-lg white--text px-10  px-10 "> 
                                                            <br> Conatct US</v-btn> 
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
        <v-layout row wrap justify-center>
            <v-flex xs12 sm4 md4 lg4 class="mt-7">
                <span class="main-heading-primary-product-about">
                <v-img :src="contact_img3">
                </v-img>
                </span>
            </v-flex>
            <v-flex  xs12 sm8 md8 lg8>
                <v-layout row wrap justify-center>
                    <v-flex xs12 md12 lg12 sm12 text-center>
                        <v-btn x-small color="info white--text">Contact Info</v-btn>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg4 text-center v-for="(item, index) in employe" :key="item.index">
                        <span class="main-heading-primary-product-about">
                        <v-card class="mx-1 mt-5">
                            <v-avatar 
                                 size="76" 
                                 >
                                <p hidden>{{index}}</p>
                                <v-img class="rounded-xl" :src="item.profileImageUrl">

                                </v-img>
                            </v-avatar>
                            <br>
                            <br>
                            <p>
                                {{item.nameEmploye}}
                            </p>
                            <br>
                            <br>
                            <p>
                             {{item.typeEmploye}}
                            </p>
                            <br>
                            <br>
                            
                            <p>
                                <v-icon class="ml-1" color="error">
                                    mdi-email-box
                                </v-icon>
                               {{item.emailEmploye}}
                            </p>
                             <p >
                                   <v-icon color="info" class="mx-2">
                                         mdi-card-account-phone-outline
                                 </v-icon>
                             {{item.mobileNoEmploye}}
                            </p>
                            <br>
                        </v-card>
                        </span>
                    </v-flex>
                 
                </v-layout>
                 
            </v-flex>
            <v-flex class="mt-7" xs11 sm11 md11 lg11 text-center>
                <contact></contact>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

import * as firebase  from 'firebase/app'
import 'firebase/firestore'

  export default
   {
    data: () => ({
       contact_img1:require('../../public/assets/contact-img.jpg'),
        contact_img2:require('../../public/assets/contac-icon.png'),
        contact_img3:require('../../public/assets/contac.png'),
        employe:[],            
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
               firebase.firestore().collection('Employe').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.employe.push(doc.data())
                 })
             })              
    },
    methods:{
      
    }
   
  
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