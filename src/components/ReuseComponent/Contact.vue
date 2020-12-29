<template>
    <v-layout row wrap justify-center>

        <v-flex   class="xs12 md12 lg12 text-center">
            <v-img height="120" :src="contact_img1">
              <v-flex class="xs12 md12 lg12 text-center"  style="border-bottom-style: solid; border-color:indigo">
                     <v-btn small :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "  class="indigo darken-2 white--text my-1">Contact With uS</v-btn>
             </v-flex>
            </v-img>
        </v-flex>
        <v-flex xs12 sm8 md8 lg8  >
            <v-card class="ml-5" >
                <v-form
                   
                    @submit.prevent="onUploadContact"
                >
                    <v-text-field
                    v-model="name"
                   
                    label="Name"
                    required
                    ></v-text-field>
                     <v-text-field
                    v-model="subject"
                   
                    label="Subject"
                    required
                    ></v-text-field>

                    <v-text-field
                  
                    label="E-mail"
                    v-model="email"
                    required
                    ></v-text-field>
                    <v-textarea
                    v-model="description"
                    placeholder="Your details"
                    >
                    

                    </v-textarea>

                
                    <v-btn
                    :disabled="!velidator"
                    color="success"
                    class="mr-4"
                    small
                    block
                      type="submit"
                    >
                    Send
                    </v-btn>

                  

                </v-form>
            </v-card>
        </v-flex>
        <v-flex xs12 sm4 lg4 md4 text-center class="mt-1">
            <v-card :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' "  class="indigo darken-4 ml-3">    
                <div class=" white--text" >   
                  <h3>
                    CORPORATE  OFFICE
                    </h3>   
                   <v-card-text>
                      <h4>OUTWEAR BD APPARELS
                    </h4>
                   </v-card-text>
                       
                   <v-card-text>
                     
                        House No.219, 3rd floor,
                            <br>
                        Road No.2 DOHS, Baridhara,
                            <br>
                        Dhaka-1206, Bangladesh
                  
                   </v-card-text>
                    <v-card-text>
                        <h4>
                        <v-icon color="orange" class="mx-2">
                            mdi-card-account-phone-outline
                        </v-icon>
                        +8801709843302
                    </h4>
                    </v-card-text>
                    <v-card-text>
                      
                    <h4>
                        <v-icon class="mx-2" color="primary">
                            mdi-skype-business
                        </v-icon>
                         btm.latif
                    </h4>
                    </v-card-text>
                   
                   <v-card-text>
                      <h4>
                        <v-icon class="mx-2" color="error">
                            mdi-email-box
                        </v-icon>
                         outwear@outwearbdapparels.com
                    </h4>
                   </v-card-text>
                     <v-card-text>
                      www.outwearbdapparels.com
                   </v-card-text>
                   
                
                   
                </div>                
            </v-card>
        </v-flex>
        <v-layout row wrap justify-center class="mt-3">
          <v-flex xs12 sm12 md12 lg12 text-center >
              <v-btn x-small outlined color="black">
                Our other offices
              </v-btn>
          </v-flex>
          <v-flex xs12 sm3 md3 lg3 text-center v-for="(item ,index) in officeData" :key="item.index">
            
              <v-card   :class="color === 'black' ? 'grey darken-4' : '' || color === 'purple' ? 'purple darken-4' : '' || color === 'orange' ? 'orange darken-4' : '' || color === 'error' ? 'error darken-4' : '' " class="indigo darken-4 mx-1 white--text my-1">
                <p hidden>{{index}}</p>
                <v-card-text class="white--text">{{item.officeName}}</v-card-text>
                <v-card-text  class="white--text">{{item.nameController}}</v-card-text>
                <v-card-text class="card-text white--text" >Address:{{item.officeAddress}}</v-card-text>
                <v-card-text  class="white--text card-text-contact" >Phone:{{item.officeContactNo}}</v-card-text>
                <v-card-text  class="white--text card-text-email" >Email:{{item.officeEmail}}</v-card-text>
                <v-card-text  class="white--text">Web:{{item.webLink}}</v-card-text>
              </v-card>
          </v-flex>
        </v-layout>
    </v-layout>
  
</template>
<script>
import * as firebase  from 'firebase/app'
import 'firebase/firestore'
  export default {
    data: () => ({
      contact_img1:require('../../../public/assets/contact.jpg'),
    
      officeData:[],
      key: Math.random().toString(36).substring(2,9),
      name:'',
      email:'',
      subject:'',
      description:'',
    }),

     created(){                  
               firebase.firestore().collection('officeData').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.officeData.push(doc.data())
                 })
             })  
                          
    },
 computed: {
        velidator(){
            return this.name != '' && this.email != '' && this.subject != '' && this.description != ''

        },
       userAuth () {
         return this.$store.getters.user  !== null &&  this.$store.getters.user !== undefined
       },
        color () {
         return this.$store.getters.color
       }
    },
    methods: {
       onUploadContact(){
            var db = firebase.firestore();
             db.collection("ContactForm").doc(this.key).set({
                                   
               name:this.name,
               email:this.email,
               subject:this.subject,
               dscription:this.description,
                id:this.key                   
              }).then(function() {
                    alert("Your messenger Send")
                    });
            },
    
    },
  }
</script>
<style  scoped>
    .card-text {
  height: 85px;
  overflow: hidden;
}
 .card-text-email {
  height: 75px;
  overflow: hidden;
}
 .card-text-contact {
  height: 75px;
  overflow: hidden;
}
</style>