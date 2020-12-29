<template>
<div class="indigo darken-4">
  <v-app>
   
    <nav >     
    <v-toolbar  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "
     flat class="indigo darken-4 darken-4">
         <v-app-bar-nav-icon color="white" class="hidden-sm-and-up " @click.native.stop="drawer = true"></v-app-bar-nav-icon>
         <v-toolbar-title  >
          
            <router-link to="/" tag="span" style="cursor: pointer">
              <v-avatar size="35"><v-img src="../public/assets/logo-company.jpg" width="40px">

              </v-img></v-avatar>
            
            </router-link>
          </v-toolbar-title>
           <v-toolbar-title >
            <router-link to="/" tag="span" style="cursor: pointer">
              <span class="white--text ml-1" style="font-size:.70em; font-weight: 800px;letter-spacing: 0px;"> OUTWEAR BD APPARELS </span> 
            </router-link>
          </v-toolbar-title>
           <v-toolbar-title >

             <v-menu
           
          
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          dark
          v-bind="attrs"
          v-on="on"
          x-small
          fab
          class="mt-1 mx-3"
          
        >    
          <v-img  src="../public/assets/color.png" width="24px">
          </v-img>
                
        </v-btn>
      </template>

            <v-list  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " class="indigo darken-4 accent-3 white--text">
               <v-layout row wrap justify-center>
                 <v-flex xs12 sm12 md12 lg12 text-center>
                   <v-btn x-small  color="purple darken-4 white--text" > Pick a color</v-btn>
                 </v-flex>
                  <v-flex xs5 sm5 md5 lg5 text-center>
                    <v-btn class="mx-3 my-2" fab x-small  v-on:click="colorSet('orange')" color="orange darken-4"></v-btn>
                  </v-flex>
                    <v-flex  xs5 sm5 md5 lg5 text-center>
                        <v-btn  class="mx-3 my-2" fab x-small  @click="colorSet('black')" color="grey darken-4"></v-btn>
                  </v-flex>
               </v-layout> 
                <v-layout row wrap justify-center >
                  <v-flex  xs5 sm5 md5 lg5 text-center>
                    <v-btn   class="mx-3 my-2" fab x-small @click="colorSet( 'error')" color="error darken-4"></v-btn>
                  </v-flex>
                    <v-flex  xs5 sm5 md5 lg5 text-center>
                        <v-btn  class="mx-3 my-2" fab x-small @click="colorSet('purple')" color="indigo darken-4"></v-btn>
                  </v-flex>
               </v-layout>      
            </v-list>
        </v-menu>
       <v-btn color="blue" x-small v-if="userAuth">
          <v-menu
           
        
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
      
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
          x-small
          
        
        
       
          
       
          
        >    
           admin         
        </v-btn>
      </template>
          <v-list-item >
               <v-btn x-small color="black" to="/product/new" class="white--text">Update</v-btn>
             </v-list-item>
              <v-list-item>
               <v-btn  x-small  color="black"  to="/slider" class="white--text">Slider</v-btn>
             </v-list-item>
              <v-list-item>
               <v-btn  x-small  color="black" to="/contact/new" class="white--text">messenger</v-btn>
             </v-list-item>
             <v-list-item>
               <v-btn  x-small  color="black" class="white--text" @click="logOut"> <new-admin></new-admin></v-btn>
             </v-list-item>
             
              <v-list-item>
               <v-btn  x-small  color="black" class="white--text" @click="logOut">Logout</v-btn>
             </v-list-item>
        </v-menu>
           
       </v-btn>
          </v-toolbar-title>
         <v-spacer></v-spacer>
           <v-toolbar-items class="hidden-xs-only">
            
              <v-list-item  v-for="item in navItems" 
              :key="item.title" 
              router
              :to="item.link">
                  <v-btn style="font-style: italic;font-weight: 700" class="white--text" text x-small>
                    <v-img max-width="28px" class="mr-1"  :src="item.icon"></v-img>
                  <span class="mt-2">{{item.title}}</span></v-btn>
          </v-list-item>
         
               
          </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer" app temporary  dark  :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " class="indigo darken-4 darken-4"
    >
      <v-list>
        <v-list-item-group >
        
          <v-divider></v-divider>
          <v-flex >
            <v-list-item>
             <v-btn outlined x-small> <v-avatar class="mr-2" size="20px"><v-img  max-width="20px" src="../public/assets/logo-company.jpg"></v-img></v-avatar> OUTWEAR BD APPARELS</v-btn>
            </v-list-item>
          <v-list-item  v-for="item in navItems" 
          :key="item.title" 
          router
          :to="item.link">
               <v-btn style="font-style: italic;font-weight: 700" class="white--text" text small>
                    <v-img max-width="30px" class="mr-1"  :src="item.icon"></v-img>
                  <span class="mt-2">{{item.title}}</span></v-btn>
          </v-list-item>
          <br>
          <br>
          <v-flex>
            
          </v-flex>
         
          </v-flex>
         
          
        
        </v-list-item-group>
        

      </v-list>
    </v-navigation-drawer>  
  </nav>
    <main>
      <top-button></top-button>
      <router-view></router-view>
    </main>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md12 lg12 >
  <v-layout
    dark
    padless
    class="mt-3"
  >
    <v-card
     :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "
      class="flex indigo darken-4 darken-4"
      flat
      
    >
      <v-card-title>
        <div class=" white--text" >      
                    <v-card-text class="ml-4">
                      <h4>OUTWEAR BD APPARELS</h4>
                    </v-card-text>
                     
                   <v-card-text>
                      <h4>
                        <v-icon class="mx-2" color="error">
                            mdi-email-box
                        </v-icon>
                         latif@outwear-bd.com
                    </h4>
                   </v-card-text>
                   <v-card-text>
                      <h5 class="ml-7">
                      www.outwearbdapparels.com
                    </h5>
                   </v-card-text>
                    <br>
                  
                </div>    

        <v-spacer></v-spacer>

       <v-layout row wrap justify-center> <v-btn
          v-for="(item,index) in icons"
          :key="item.index"
           :href="item.link"
           target="_blank"
          class="mx-4"
          dark
          icon
        >
        <p hidden>{{index}}</p>
          <v-icon size="24px"  >
            {{ item.icon }} 
          </v-icon>
        </v-btn></v-layout>
      </v-card-title>
<signin class="ml-7"></signin>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>OUTWEAR BD APPARELS</strong>  
      </v-card-text>
    </v-card>
  </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
  </div>
</template>
<script>
import * as firebase  from 'firebase/app'
import 'firebase/firestore'
   export default {
    data: () => ({
      drawer: false,
    
      navItems : [
          { icon:require('../public/assets/home-icon.png'), title:'Home', link: "/"},
          { icon:require('../public/assets/product-icon.png'), title:'Products', link: "/products"},
          { icon:require('../public/assets/buyer-icon.png') , title:'Our Client', link: "/client"},
          { icon:require('../public/assets/about-con.png'), title:'About us', link: "/about"},
          { icon:require('../public/assets/contac-icon.png') ,title:'Contact Us', link: "/contact"},
          { icon:require('../public/assets/legal-img.png') ,title:'legal information', link: "/legal/information"},
        ],
          icons: [
       {icon: 'mdi-facebook', link:'https://www.facebook.com/outwearbdapparels'},
         {icon: 'mdi-twitter' ,link:'https://www.facebook.com/outwearbdapparels'},
          {icon:'mdi-linkedin' ,link:'https://www.facebook.com/outwearbdapparels'},
        
      ],
        admin:{}
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
             firebase.firestore().collection('Admins').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.admin = doc.data()
                 })
             })

        
     },
    methods: {
      colorSet(e){      
       
            this.$store.dispatch('colorPick', {color:e})
         
        },
      logOut(){
        this.$store.dispatch('logOut')
        this.$router.push('/')

      }
    }
  }
</script>
<style>

</style>