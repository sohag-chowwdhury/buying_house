<template>
    <v-layout row wrap justify-center>
        <v-flex xs12 md12 lg12 sm12 text-center> <v-btn x-small class=" black white--text "> Products List</v-btn> </v-flex>
        <v-flex xs11 sm10 md10 lg10 v-for="(item,index) in products" :key="item.index">
            <v-card class="my-1 grey lighten-4">       
                <v-layout row wrap justify-center>
                      <v-flex xs6 sm1 md1 lg1>
                            <span class="mt-6 ml-5"> {{index+1}}</span>
                     </v-flex>
                    <v-flex xs6 sm2 md2 lg2>
                            {{item.category}}
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg2>
                            {{item.subCategory}}
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg3>
                            {{item.name}}
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg2>
                          <v-img max-width="70" height="50" :src="item.productImages"></v-img>
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg2>
                         <delete-product :ID="item.id" :item="'Products'"></delete-product>
                    </v-flex>
                     
                </v-layout>
            </v-card>
        </v-flex>
          <v-flex xs12 md12 lg12 sm12 text-center> <v-btn small class=" orange px-5 my-6 white--text "> Section</v-btn> </v-flex>
        <v-flex xs11 sm10 md10 lg10 v-for="(item,index) in abouts" :key="item.index">
            <v-card class="my-1 grey lighten-4">       
                <v-layout row wrap justify-center>
                      <v-flex xs6 sm1 md1 lg1>
                            <span class="mt-6 ml-5"> {{index+1}}</span>
                     </v-flex>
                    <v-flex xs6 sm2 md2 lg2>
                            {{item.section}}
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg2>
                            {{item.subSection}}
                    </v-flex>
                    
                     <v-flex xs6 sm5 md5 lg5>
                          <p class="card-text-p" v-html="item.descriptionSection"></p>
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg2>
                         <delete-product :ID="item.id" :item="'Section'"></delete-product>
                    </v-flex>
                     
                </v-layout>
            </v-card>
        </v-flex>
         <v-flex xs12 md12 lg12 sm12 text-center> <v-btn small class=" purple px-5 my-6 white--text "> Client</v-btn> </v-flex>
        <v-flex xs11 sm10 md10 lg10 v-for="(item,index) in buyers" :key="item.index">
            <v-card class="my-1 grey lighten-4">       
                <v-layout row wrap justify-center>
                      <v-flex xs6 sm1 md1 lg1>
                            <span class="mt-6 ml-5"> {{index+1}}</span>
                     </v-flex>
                    <v-flex xs6 sm4 md4 lg4>
                            {{item.buyerName}}
                    </v-flex>
                     
                    
                     <v-flex xs6 sm5 md5 lg5>
                          <v-img max-width="70" height="50" :src="item.buyerImage"></v-img>
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg2>
                         <delete-product :ID="item.id" :item="'Buyers'"></delete-product>
                    </v-flex>
                     
                </v-layout>
            </v-card>
        </v-flex>
         <v-flex xs11 sm10 md10 lg10 >
            <v-card class="my-1 grey lighten-4">   
                <v-flex xs12 md12 lg12 sm12 text-center> <v-btn small class=" info px-5 my-6 white--text "> Legal Information</v-btn> </v-flex>    
                <v-layout row wrap justify-center>
                    <v-flex xs6 sm2 md2 lg2>
                      <span class="ml-5">  1:</span>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg2>
                           Legal Information
                    </v-flex>
                     <v-flex xs6 sm6 md6 lg6>
                         Company Details
                    </v-flex>
                     <v-flex xs6 sm3 md2 lg2 text-end>
                         <delete-product :ID="companyDetails.categoryId" :item="'CompanyDetails'"></delete-product>
                    </v-flex>
                     
                </v-layout>
            </v-card>
        </v-flex>
          <v-flex xs12 md12 lg12 sm12 text-center> <v-btn small class=" green px-5 my-6 white--text "> Capacity </v-btn> </v-flex>    
          <v-flex xs11 sm10 md10 lg10  v-for="(item, index) in capacityItems"  :key="item.index">
            <v-card class="my-1 grey lighten-4">   
              
                <v-layout row wrap justify-center>
                    <v-flex xs6 sm2 md2 lg2>
                      <span class="ml-5">{{index+1}}</span>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg2>
                          {{item.capacityItem}}
                    </v-flex>
                     <v-flex xs6 sm6 md6 lg6>
                       {{item.capacityUnit}}
                    </v-flex>
                     <v-flex xs6 sm3 md2 lg2 text-end>
                         <delete-product :ID="item.categoryId" :item="'CapacityItems'"></delete-product>
                    </v-flex>
                     
                </v-layout>
            </v-card>
        </v-flex>
           <v-flex xs12 md12 lg12 sm12 text-center> <v-btn small class=" indigo px-5 my-6 white--text "> employe </v-btn> </v-flex>    
          <v-flex xs11 sm10 md10 lg10  v-for="(item, index) in employe"  :key="item.index">
            <v-card class="my-1 grey lighten-4">   
              
                <v-layout row wrap justify-center>
                    <v-flex xs6 sm2 md2 lg2>
                      <span class="ml-5">{{index+1}}</span>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg2>
                          {{item.nameEmploye}}
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg3>
                       {{item.emailEmploye}}
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg3>
                         <v-img  max-width="70" :src="item.profileImageUrl"></v-img>
                    </v-flex>
                     <v-flex xs6 sm3 md2 lg2 text-end>
                         <delete-product :ID="item.uid" :item="'Employe'"></delete-product>
                    </v-flex>
                     
                </v-layout>
            </v-card>
        </v-flex>
           <v-flex xs12 md12 lg12 sm12 text-center> <v-btn small class=" orange px-5 my-6 white--text "> OffiCe Data </v-btn> </v-flex>    
          <v-flex xs11 sm10 md10 lg10  v-for="(item, index) in officeData"  :key="item.index">
            <v-card class="my-1 grey lighten-4">   
              
                <v-layout row wrap justify-center>
                    <v-flex xs6 sm2 md2 lg2>
                      <span class="ml-5">{{index+1}}</span>
                    </v-flex>
                    <v-flex xs6 sm2 md2 lg2>
                          {{item.officeName}}
                    </v-flex>
                     <v-flex xs6 sm3 md3 lg3>
                       {{item.nameController}}
                    </v-flex>
                      <v-flex xs6 sm3 md3 lg3>
                       {{item.officeEmail}}
                    </v-flex>
                     <v-flex xs6 sm3 md2 lg2 text-end>
                         <delete-product :ID="item.OfficeId" :item="'officeData'"></delete-product>
                    </v-flex>
                     
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>

import * as firebase  from 'firebase/app'
import 'firebase/firestore'
import DeleteProduct from '../components/UpdateProduct/DeleteProduct.vue'
  export default {
  components: { DeleteProduct },
    data: () => ({   
        products:[],   
        abouts:[],
        categoriesItemName:'', 
        buyers:[],
        employe:[],
        officeData:[],
        
        capacityItems:[],
        companyDetails:{}
    }),
    props:['id', 'item'],
    computed: {
       userAuth () {
         return this.$store.getters.user  !== null &&  this.$store.getters.user !== undefined
       },
        color () {
         return this.$store.getters.color
       }
    },
    methods:{
        
      
    },
    created(){                  
               
               firebase.firestore().collection('Products').get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{
                          this.products.push(doc.data())
                       })
                    })   
                       firebase.firestore().collection('Section').get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{
                          this.abouts.push(doc.data())
                       })
                    })  
                      firebase.firestore().collection('Buyers').get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{
                          this.buyers.push(doc.data())
                       })
                    })
                    
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
                    firebase.firestore().collection('Employe').get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{
                          this.employe.push(doc.data())
                       })
                    }) 
                     firebase.firestore().collection('officeData').get().then((querySnapshot)=>{
                         querySnapshot.forEach((doc)=>{
                          this.officeData.push(doc.data())
                       })
                    }) 
                     
                     

                           
    },
    
   
  
  }
  </script>
  <style  >
    .card-text-p {
  height: 105px;
  overflow: hidden;
}
  </style>