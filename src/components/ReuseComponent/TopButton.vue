<template>
     <v-btn
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            small
            class="mr-4"
            style ="opacity:0.7 !important;"    
            color="error"
            @click="toTop"
          ><v-img src="../../../public/assets/top.png">

          </v-img>
         </v-btn>
</template>
<script>
export default {
     data(){
       return {
          fab: true,      
           offsetTop: 0,
         
       

        
        }
        },
     methods:{
          toTop (e) {
       if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
      this.$vuetify.goTo(0)
    },
     }
}
</script>