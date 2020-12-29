<template>
    <v-layout row wrap justify-center>
      <top-button></top-button>
          <v-flex xs12 md11 lg11 class="mt-0" >
                         <span class="main-heading-primary-product-about">
                            <v-layout row wrap justify-center>
                              <v-flex xs12 sm12 12 md12 lg12>
                                 
                                  <v-card height="175" class="black rounded-b-xl mx-2">
                                      <v-img  class="rounded-b-xl" height="170px" :src="product_img1">
                                         <v-flex xs11 sm11 md11 lg11 text-center class="mt-3"> 
                                                <v-layout>
                                                  <v-layout row wrap justify-center>
                                                  <v-flex xs12 md12 lg12 sm12>
                                                        <v-btn fab :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " x-large class="indigo darken-4 py-5">
                                                          <v-img max-width="35px" :src="product_img2"></v-img>
                                                      </v-btn>
                                                  </v-flex>
                                                  <v-flex xs12 md12 lg12 sm12 class="mt-n5">
                                                        <v-btn  large 
                                                        
                                                        :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "
                                                        
                                                         class="indigo darken-4 rounded-b-lg white--text px-10  "> 
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
        <v-flex xs11 sm11 md11 lg11>
            <products></products>
        </v-flex>
           <v-flex  xs11 sm11 md11 lg11 text-center>
            <contact></contact>
          </v-flex>
    </v-layout>
</template>
<script>
export default {
    data(){
      return{
          product_img1:require('../../public/assets/product.jpg'),
        product_img2:require('../../public/assets/product-icon.png'),
      }
    },
    computed: {
       userAuth () {
         return this.$store.getters.user  !== null &&  this.$store.getters.user !== undefined
       },
        color () {
         return this.$store.getters.color
       }
       },
}
</script>

