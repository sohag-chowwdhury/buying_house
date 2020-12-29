<template>
<div class="grey lighten-1">
    <v-container >
         <v-layout row wrap justify-center>
            <top-button></top-button>
            <v-flex xs12 sm12 md12 lg12 class="mt-0 grey lighten-4" >
                         <span class="main-heading-primary-product-about">
                            <v-layout row wrap justify-center>
                              <v-flex xs12 sm12 12 md12 lg12>
                                 
                                  <v-card height="135px" class="indigo darken-3  rounded-b-xl mx-2 mt-1">
                                     
                                         <v-flex xs11 sm11 md11 lg11 text-center class="mt-3"> 
                                                <v-layout>
                                                  <v-layout row wrap justify-center>
                                        
                                                  <v-flex xs12 md12 lg12 sm12 class="mt-n5">
                                                        <v-btn  large  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "  class="indigo darken-4 rounded-b-lg white--text px-10  "> 
                                                            <br><span class="mx-10">legal information</span> </v-btn>
                                                  </v-flex>
                                                  </v-layout>    
                                        
                                                  </v-layout>             
                                          </v-flex>
                                       
                                  </v-card>
                                
                              </v-flex>
                            </v-layout>
                             
                     
                      </span>
                 </v-flex>
         </v-layout>
       <v-layout  row wrap justify-center>
           <v-flex xs12 sm12 md12 lg12 class="title-product-about">
              <v-card class="rounded-lg purple  lighten-4">
                  <span class="main-heading-primary-product-about"> <p class="mx-2 my-3 " v-html="companyDetails.descriptionCompany"></p></span>
              </v-card>
           </v-flex>
       </v-layout>
        <v-layout row wrap justify-center>
           
            <v-flex xs11 sm12 md12 lg12>
               <span class="main-heading-primary-product-about">
                <v-layout row wrap justify-center class="grey lighten-2">
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card  class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Company Name</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.companyName}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Type ofthe Company</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.typecompany}} </span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Type of Business</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.typeBuisness}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Registered Address</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.registeredAddress}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Commercial & Mailing Address</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.mailingAddress}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Trade License Number</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.tradeLicense}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">VAT Registration N um ber</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.vatRegistration}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">TIN Certificate Number</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.tinCertificate}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">ERC (Export Registration Certificate) No.</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.ercNo}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                  <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Member of Trade Body</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.memberTrade}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Membership Number with BGMEA</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.membershipBgmea}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Enlisted With</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.enlistedWith}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Bangladesh Bank Permission No.</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{companyDetails.bangladeshBank}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">Bank Details</span>
                                </v-flex>
                                <v-flex class="orange lighten-4 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2" v-html="companyDetails.descriptionBank">{{companyDetails.descriptionBank}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>
                   <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12>
                        <v-card class="orange lighten-1 my-4">
                            <v-layout justify-center class="my-4">
                                <v-flex class="black white--text lighten-4 ml-3 " xs6 sm6 md6 lg6 text-center>
                                   <h3><span class="ml-2 my-3">Products</span></h3>
                                </v-flex>
                                <v-flex class="black white--text lighten-4 ml-3" xs6 sm6 md6 lg6 text-center>
                                    <h3> <span class="ml-2 my-3">Capicty/Month</span></h3>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>
                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm12 md12 lg12 v-for="(item, index) in capacityItems" :key="item.index">
                        <v-card class="orange lighten-1 mt-1">
                            <v-layout justify-center>
                                <v-flex class="indigo lighten-3 ml-3" xs6 sm6 md6 lg6 text-start>
                                   <span class="ml-2">{{index+1}} : {{item.capacityItem}}</span>
                                </v-flex>
                                <v-flex class="indigo lighten-3 ml-3" xs6 sm6 md6 lg6 text-start>
                                    <span class="ml-2"> {{item.capacityUnit}}</span>
                                </v-flex>
                            </v-layout>
                        </v-card>
                     </v-flex>
                </v-layout>

                </span>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>
<script>

import * as firebase  from 'firebase/app'
import 'firebase/firestore'
  export default {
    data: () => ({
         legal_img1:require('../../public/assets/legal-img.jpg'),
          legal_img2:require('../../public/assets/legal-img.png'),
        companyDetails:{},   
        capacityItems:[]        
    }),
     computed: {
      
        color () {
         return this.$store.getters.color
       }
       },
    created(){                  
               firebase.firestore().collection('CompanyDetails').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.companyDetails =(doc.data())
                 })
             })  
              firebase.firestore().collection('CapacityItems').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.capacityItems.push(doc.data())
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
         font-weight: 800px;
         letter-spacing: 1px;
        
     
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