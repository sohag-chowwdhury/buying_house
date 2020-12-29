<template>
     <v-layout row wrap justify-center>   
        <v-flex xs11 sm11 md11 lg11>
           <v-layout row wrap justify-center>
          <v-flex xs12 sm12 md12 lg12 class="mt-0" >
                         <span class="main-heading-primary-client-about">
                            <v-layout row wrap justify-center>
                              <v-flex xs12 sm12 12 md12 lg12>
                                 
                                  <v-card height="175px" class="black  rounded-b-xl mx-2 mt-1">
                                      <v-img  class="rounded-b-xl my-3" height="170px" :src="client_img1">
                                         <v-flex xs11 sm11 md11 lg11 text-center class="mt-3"> 
                                                <v-layout>
                                                  <v-layout row wrap justify-center>
                                                  <v-flex xs12 md12 lg12 sm12>
                                                        <v-btn fab :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " x-large class="indigo darken-4 py-5">
                                                          <v-img max-width="55px" :src="client_img2"></v-img>
                                                      </v-btn>
                                                  </v-flex>
                                                  <v-flex xs12 md12 lg12 sm12 class="mt-n5">
                                                        <v-btn  large  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " class="indigo darken-4 rounded-b-lg white--text px-10  "> 
                                                            <br> our honorable buyers</v-btn> 
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
                   <v-flex xs6 sm4 md3 lg2   v-for="(item,index) in buyers" :key="index.item">
                       <v-card  height="287" class="mx-1 mt-1   rounded-tr-xl rounded-bl-xl lighten-2"    >
                         <div class="my-2">
                            
                              <v-img  class="rounded-tr-xl rounded-bl-xl" max-width="520" height="280"  :src="item.buyerImage">
                               <v-flex text-center :class="color === 'black' ? 'title-client-client-dark' : '' || color === 'purple' ? 'title-client-client-purple' : '' || color === 'orange' ? 'title-client-client-orange' : '' || color === 'error' ? 'title-client-client-error' : '' " class="title-client-client" > 
                                <h3  class=" my-1 white--text main-heading-client">
                                    <span  class="main-heading-primary-client-client">
                                        {{item.buyerName}}                                    
                                    </span>
                                </h3> 
                              </v-flex>
                              
                             
                          </v-img>
                          
                         </div>
                       </v-card>
                      
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
        client_img2:require('../../../public/assets/buyer-icon.png'),
        client_img1:require('../../../public/assets/buyer-img.jpg'),
        buyers:[],            
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
               firebase.firestore().collection('Buyers').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.buyers.push(doc.data())
                 })
             })              
    },
   
  
  }
</script>

<style >

.title-client {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(1, 20, 104, 0.87) !important;
        color: rgb(211, 114, 3) !important;
        border-radius: 0px;
      
    }
    .title-client-client {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(4, 33, 161, 0.87) !important;
        color: rgb(20, 92, 92) !important;
      
      
    }
   
     .title-client-hover-client {
        position: absolute;
        bottom:10px !important;
         right:0% !important;
         left:0% !important;
        background-color: rgb(27, 29, 139) !important;
        color: rgb(241, 140, 7) !important;
        
       
    }

    .title-client-orange {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(216, 82, 5, 0.87) !important;
        color: rgb(240, 114, 11) !important;
       
      
    }
    .title-client-client-orange {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(226, 105, 6, 0.87) !important;
        color: rgb(221, 123, 10) !important;
       
      
    }
   
     .title-client-hover-client-orange {
        position: absolute;
        bottom:10px !important;
         right:0% !important;
         left:0% !important;
        background-color: rgb(238, 96, 13) !important;
        color: rgb(241, 140, 7) !important;
        border-radius: 50px;
       
    }

    .title-client-purple {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(39, 0, 240, 0.87) !important;
        color: rgb(47, 13, 236) !important;
      
      
    }
    .title-client-client-prple {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(4, 33, 161, 0.87) !important;
        color: rgb(15, 30, 238) !important;
      
      
    }
   
     .title-client-hover-client-purple {
        position: absolute;
        bottom:10px !important;
         right:0% !important;
         left:0% !important;
        background-color: rgb(26, 29, 214) !important;
        color: rgb(37, 23, 240) !important;
        border-radius: 50px;
       
    }
    .title-client-error {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(158, 14, 46, 0.87) !important;
        color: rgb(199, 10, 67) !important;
      
      
    }
    .title-client-client-error {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(243, 11, 81, 0.884)!important;
        color: rgb(122, 12, 36) !important;
      
      
    }
   
     .title-client-hover-client-error {
        position: absolute;
        bottom:10px !important;
         right:0% !important;
         left:0% !important;
        background-color: rgb(143, 12, 51) !important;
        color: rgb(131, 7, 44) !important;
        border-radius: 50px;
       
    }
    .title-client-dark {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(20, 22, 22, 0.986) !important;
        color: rgb(24, 0, 26) !important;
      
      
    }
    .title-client-client-dark {
        position: absolute;
        bottom:87% !important;
         right:0% !important;
         left:0% !important;
        background-color: rgba(20, 20, 20, 0.87) !important;
        color: rgb(15, 17, 17) !important;
      
      
    }
   
     .title-client-hover-client-dark {
        position: absolute;
        bottom:10px !important;
         right:0% !important;
         left:0% !important;
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
  .main-heading-primary-client {
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