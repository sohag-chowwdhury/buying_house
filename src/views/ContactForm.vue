<template>
   <v-layout row wrap justify-center>
     <v-flex xs12 md12 lg12 sm12 text-center>
                      <v-btn x-small color="error"> New Text</v-btn>
                   </v-flex>
       <v-flex xs12 sm6 md4 lg4 v-for="(item,index) in contacts" :key="item.index">
           <v-card class="mx-1 my-1 orange lighten-4">
               <v-layout row wrap justify-center>
                     <v-flex xs12 md12 lg12 sm12 text-center>
                           <delete-product  :ID="item.id" :item="'ContactForm'"></delete-product>
                                
                      </v-flex>
                    
                   <v-flex xs12 md12 lg12 sm12>
                       <p hidden>{{index}}</p>
                        <v-card-text>
                            Name:{{ item.name}}
                        </v-card-text>
                   </v-flex>
                    <v-flex xs12 md12 lg12 sm12>
                        <v-card-text>
                            Subject: {{item.subject}}
                        </v-card-text>
                   </v-flex>
                    <v-flex xs12 md12 lg12 sm12>
                        <v-card-text>
                            Email: {{item.email}}
                        </v-card-text>
                   </v-flex>
                    <v-flex xs12 md12 lg12 sm12>
                        <v-card-text>
                            Description: {{item.dscription}}
                        </v-card-text>
                   </v-flex>
               </v-layout>
           </v-card>
       </v-flex>
   </v-layout>
</template>
<script>
import * as firebase  from 'firebase/app'
import 'firebase/firestore'
export default {
    data(){
        return{
            contacts:[]
        }
    },
    created(){                  
               firebase.firestore().collection('ContactForm').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.contacts.push(doc.data())
                 })
             })              
    },
}
</script>