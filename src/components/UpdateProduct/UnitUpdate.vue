<template black>
  <div class="black">
    <v-row class="black" justify="space-between">
    <v-dialog  v-model="DeleteDialog" 
      fullscreen
      hide-overlay
      persistent 
      class="black"
      transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
         <v-btn text    x-small  v-on="on"  color="black" >
           <v-icon large color="white">mdi-eye-outline</v-icon>
         </v-btn>
      </template >
       <v-container fluid fill-height  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "
      class=" indigo darken-4 darken-4">
     <v-layout row wrap flex align-center justify-center  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "
      class=" indigo darken-4 darken-4" >
      
         <v-flex xs12 sm12 md12 lg12>
            <v-card  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "
      class="indigo darken-4 darken-4">  
                 
            <v-img  :src="this.image" >
                <v-btn color="error darken-1" fab  x-small class="ml-3 error--text"  @click="update">
                  <v-icon color="white">
                    mdi-close-outline
                  </v-icon>
                  </v-btn>
            </v-img>    
          
      </v-card>
         </v-flex>
       
     </v-layout>
     </v-container>
    </v-dialog>
  </v-row>
  </div>
</template>
<script>
 
 

  export default {
       props:['item'],
   data () {
       return{
           
          image:this.item,
            DeleteDialog: false,
           
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
       methods:{
         update(){
         
           this.DeleteDialog = false
         }
       }
       
   }
</script>
