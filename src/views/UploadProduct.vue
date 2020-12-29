<template>
 <v-container>
     <v-layout row wrap justify-center>
         <v-flex xs4 md3 lg5 sm3 text-center> <v-btn color="black white--text" small>Update Product</v-btn></v-flex>
          <v-flex xs4 md3 lg5 sm3 text-center> <v-btn color="error white--text" to="/delete/item" small>Delte Product</v-btn></v-flex>
         <v-flex xs12 md10 sm10 lg8 text-end>
              <v-layout row wrap justify-center>
                     <v-flex xs12 sm10 md10 lg10 >
                          <v-flex xs12 md10 lg10 sm10 text-start class="ml-4" >
                                <v-btn @click="addititionalButtonCategoryDelete" v-if="!addititionalInfoButtonDelete" x-small color="error" class="px-3"> Delete Category + </v-btn>
                                <v-btn @click="addititionalButtonCategoryDelete"  v-if="addititionalInfoButtonDelete"  x-small color="green"> minimize section + </v-btn>
                            </v-flex>
                            <v-flex xs12 md12 lg12 sm12  v-for="(item,index) in categoriesItem" :key="item.index">
                                <v-card class="my-1 grey lighten-1" v-if="addititionalInfoButtonDelete">
                                    <v-layout row wrap justify-center >
                                          <v-flex xs1 sm1 md1 lg1 text-center>
                                              {{index+1}}
                                        </v-flex>
                                        <v-flex xs4 sm4 md4 lg4 text-center>
                                                {{item.categoryName}}
                                        </v-flex>
                                        <v-flex xs3 sm3 md3 lg3 text-center>
                                            <v-img width="55" :src="item.imageLink"></v-img>                 
                                        </v-flex >
                                        <v-flex xs3 sm3 md3 lg3 text-center>
                                            <v-btn x-small @click="onDeleteCategorie(item.categoryId)" color="error">Delete</v-btn>
                                        </v-flex>
                                         
                                    </v-layout>
                                </v-card>
                            </v-flex>
                     </v-flex>
                 </v-layout>
                 <v-layout row wrap justify-center>
                     <v-flex xs12 sm10 md10 lg10 >
                          <v-flex xs12 md10 lg10 sm10 text-start class="ml-4" >
                                <v-btn @click="addititionalButtonAboutDelete" v-if="!addititionalAboutButtonDelete" x-small color="error" class="px-3"> Delete About Cat- </v-btn>
                                <v-btn @click="addititionalButtonAboutDelete"  v-if="addititionalAboutButtonDelete"  x-small color="green"> minimize section + </v-btn>
                            </v-flex>
                            <v-flex xs12 md12 lg12 sm12  v-for="(item,index) in categoriesAbout" :key="item.index">
                                <v-card class="my-1 grey lighten-1" v-if="addititionalAboutButtonDelete">                                  
                                    <v-layout row wrap justify-center >
                                         {{index+1}}
                                          <v-flex xs4 sm4 md4 lg4 text-center>
                                             
                                              {{item.categoryAbout}}
                                        </v-flex>
                                                                           
                                        <v-flex xs3 sm3 md3 lg3 text-center>
                                            <v-btn x-small @click="onDeleteCategorie(item.categoryId)" color="error">Delete</v-btn>
                                        </v-flex>
                                         
                                    </v-layout>
                                </v-card>
                            </v-flex>
                     </v-flex>
                 </v-layout>
                
             <v-layout row justify-center>              
                 <v-flex  xs12 sm10 md10 lg10  class="my-2">
                     <v-form  @submit.prevent="onUploadProductCategory">
                       <v-layout row wrap justify-start>
                            <v-flex xs12 md10 lg10 sm10 text-start class="ml-7" >
                                <v-btn @click="addititionalButtonCategory" v-if="!addititionalCategoryButton" x-small color="orange"> Add New Category + </v-btn>
                                <v-btn @click="addititionalButtonCategory"  v-if="addititionalCategoryButton" x-small color="error"> minimize section + </v-btn>
                            </v-flex>

                            <v-flex xs12 md12 lg12 sm12 v-if="addititionalCategoryButton">
                                <v-layout row wrap justify justify-center>
                                    <v-flex xs4 md4 lg4  v-if="!this.categoryName==''">
                                       <p>Category Name</p>
                                       <v-btn color="grey lighten-1" x-small>{{this.categoryName}}</v-btn>
                                    </v-flex>
                                    
                                    <v-flex xs4 md4 lg4  >
                                                <v-layout row wrap justify-center v-if="!this.subCategories.length == 0">
                                                    <v-flex  xs12 md12 lg12>
                                                       <p>Sub Cetagory</p> 
                                                    </v-flex>
                                                </v-layout>
                                                <v-layout row wrap justify-center>
                                                    <v-flex xs12 md12 lg12 v-for="(item, index) in this.subCategories" :key="item.index">
                                                        <v-btn x-small color="green lighten-2">{{index+1}}:{{item.subCategoryName}}</v-btn><v-btn x-small color="error" @click="removeItem(index)">-</v-btn>
                                                    </v-flex>
                                                </v-layout>   
                                                   
                                        <br>
                                    </v-flex>
                                    <v-flex xs4 md4 lg4 v-if="!this.imageLink == ''">
                                        <v-img class="mx-7 grey" :src="this.imageLink" height="100" width="100"></v-img>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap justify-start>
                                    <v-flex xs6 sm3 md3 lg3 class="ml-3 mt-6 mr-10">
                                         <v-btn x-small color="primary" class=" mx-5" @click="onPickFileCat">Product Photo </v-btn>
                                                 <input type="file" 
                                                 style="display: none" 
                                                ref="fileInputCat"
                                                 accept="image/*"
                                                     @change ="onFilePickedCat"
                                
                                >
                                    </v-flex>
                                     <v-flex xs6 sm3 md3 lg3 class="ml-1 mx-5">
                                        <v-text-field v-model="categoryName" label="Category">
                                            
                                        </v-text-field>
                                    </v-flex>
                                    <v-flex xs6 sm4 md4 lg4 class="ml-1" >
                                         <v-text-field v-model="subCategorieValue.subCategoryName" label="Sub Cetagory">                 
                                        </v-text-field>
                                        <v-btn x-small color="info" @click="addsubCategory">Add another Sub Category+</v-btn>
                                    </v-flex>
                                      <v-flex  xs10 md10 lg10   class="mt-2 ml-10" text-end >
                                             <vue-editor placeholder="Description" v-model="descriptionproductCat"  :editorToolbar="customToolbar"><p></p></vue-editor>                 
                                         </v-flex> 
                                   
                                </v-layout>
                                 <v-layout row wrap justify-center>
                                        <v-flex xs10 md10 lg10  text-center >
                                            <v-btn  type="submit" small color="green" block class="my-3">Create</v-btn>
                                        </v-flex>
                                    </v-layout>
                      
                        </v-flex>
                        </v-layout>
                        </v-form>
                 </v-flex>
             </v-layout>


               <v-layout row justify-center>             
                 <v-flex  xs12 sm10 md10 lg10  class="my-2">
                     <v-form  @submit.prevent="onUploadAboutCategory">
                       <v-layout row wrap justify-start>
                            <v-flex xs12 md10 lg10 sm10 text-start class="ml-7" >
                                <v-btn @click="addititionalButtonAbout" v-if="!addititionalButtonAboutInfo" x-small color="green"> Add About Section + </v-btn>
                                <v-btn @click="addititionalButtonAbout"  v-if="addititionalButtonAboutInfo" x-small color="error"> minimize section + </v-btn>
                            </v-flex>

                            <v-flex xs10 md10 lg10 sm10 v-if="addititionalButtonAboutInfo">
                                <v-layout row wrap justify justify-center>
                                    <v-flex xs4 md4 lg4  v-if="!this.categoryName==''">
                                       <p>Category Name</p>
                                       <v-btn color="grey lighten-1" x-small>{{this.categoryName}}</v-btn>
                                    </v-flex>
                                    
                                   
                                   
                                </v-layout>
                                <v-layout row wrap justify-start>
                                   
                                     <v-flex xs12 sm12 md12 lg12 class="ml-1 mx-5">
                                        <v-text-field v-model="categoryAbout" label="Category">
                                            
                                        </v-text-field>
                                    </v-flex>                             
                                </v-layout>
                                 <v-layout row wrap justify-center>
                                        <v-flex xs10 md10 lg10  text-center >
                                            <v-btn  type="submit" small color="green" block class="my-3">Create New About Section</v-btn>
                                        </v-flex>
                                    </v-layout>
                      
                        </v-flex>
                        </v-layout>
                        </v-form>
                 </v-flex>
             </v-layout>
        <v-form class="mx-3"  @submit.prevent="onUploadProduct">
               <v-layout row wrap justify-center class="my-1" style=" border-top: outset; border-color:grey">
                    <v-flex xs11 sm10 md10 lg10 text-center class="my-2 ml-2">
                        <v-layout row wrap justify-center class="my-3">
                            <v-flex xs12 sm6 md6 lg6 class="mx-2 mt-4">
                                 <v-select
                                    @change="subCategoryAdd"
                                    :items="categoriesItem"
                                     item-text="categoryName"
                                    v-model="category"
                                    label="Category*"
                                     dense
                                ></v-select>
                            </v-flex>                       
                                                     
                        
                              <v-flex v-if="this.addCategory" xs5 sm4 md4 lg4 class="mx-2 ">
                                  <v-text-field
                                label="Set Category"
                                v-model="category"
                                 ></v-text-field>
                            </v-flex>
                                                     
                             <v-flex v-if="!this.subCategoryValue.length == 0" xs12 sm5 md5 lg5 class="mx-2 mt-4">
                                <v-select
                                    :items="subCategoryValue"
                                    item-text="subCategoryName"
                                    v-model="subCategory"
                                    label="Sub Category*"
                                     dense
                                ></v-select>
                            </v-flex>
                        </v-layout>
                         <v-layout row wrap justify-center>
                            <v-flex xs12 sm11 md11 lg11>
                                <v-text-field
                                v-model="name"
                                label="Product Title*"
                            ></v-text-field>
                            </v-flex>
                            
                        </v-layout>
                        <v-layout row wrap justify-center >
                            <v-flex xs6 md6 sm6 lg6 text--center style=" border-right: outset; border-color:grey;">
                                  <v-btn small outlined class="  mt-7 mx-5" @click="onPickFile">Product Photo </v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="fileInput"
                                accept="image/*"
                                @change ="onFilePicked"
                                
                                >
                            </v-flex>
                            <v-flex xs6 sm6 md6 lg6 justify-center>
                                  <v-img class="mx-7 grey" :src="this.prodouctImages" height="150" width="190"></v-img>
                            </v-flex>
                        </v-layout>                                         
                    <v-btn :disabled="!formValidation" color="primary" type= "submit"  small block>Upate</v-btn>                     
                    </v-flex>
            </v-layout>
        </v-form>
         </v-flex>                
                 <v-flex  xs12 sm10 md8 lg8  class="my-2">
                     <v-form  @submit.prevent="onUploadSection">
                       <v-layout row wrap justify-start>
                            <v-flex xs12 md8 lg8 sm8 text-start class="ml-7" >
                                <v-btn @click="addAbout" v-if="!addAboutButton" x-small color="orange"> Update About + </v-btn>
                                <v-btn @click="addAbout"  v-if="addAboutButton" x-small color="error"> minimize section + </v-btn>
                            </v-flex>

                            <v-flex xs12 md12 lg12 sm12 v-if="addAboutButton">
                               <v-layout row wrap justify-center class="my-3">
                                    <v-flex xs12 sm6 md6 lg6 class="mx-2 mt-4">
                                        <v-select
                                            :items="categoriesAbout"
                                            item-text="categoryAbout"
                                            v-model="section"
                                            label="Set Section*"
                                            dense
                                        ></v-select>
                                    </v-flex>                                                                                                
                                    <v-flex xs5 sm4 md4 lg4 class="mx-2 ">
                                        <v-text-field
                                        label="Set sub Section"
                                        v-model="subSection"
                                        ></v-text-field>
                                    </v-flex>
                                                     
                                   
                                 </v-layout>
                                <v-layout row wrap justify-start>                             
                                      <v-flex  xs10 md10 lg10   class="mt-2 ml-10" text-end >
                                             <vue-editor placeholder="Description" v-model="descriptionSection"  :editorToolbar="customToolbar"><p></p></vue-editor>                 
                                         </v-flex> 
                                   
                                </v-layout>
                                 <v-layout row wrap justify-center>
                                        <v-flex xs10 md10 lg10  text-center >
                                            <v-btn  type="submit" small color="green" block class="my-3">Create</v-btn>
                                        </v-flex>
                                    </v-layout>
                      
                        </v-flex>
                        </v-layout>
                        </v-form>
                 </v-flex>
             </v-layout>
             <v-layout row justify-center>              
                 <v-flex  xs12 sm8 md8 lg8  class="my-2">
                     <v-form  @submit.prevent="onUploadBuyer">
                       <v-layout row wrap justify-start>
                            <v-flex xs12 md10 lg10 sm10 text-start class="ml-7" >
                                <v-btn @click="addBuyer" v-if="!addBuyerInfo" x-small color="blue"> Add New Buyer + </v-btn>
                                <v-btn @click="addBuyer"  v-if="addBuyerInfo" x-small color="error"> minimize section + </v-btn>
                            </v-flex>

                            <v-flex xs12 md12 lg12 sm12 v-if="addBuyerInfo">
                                <v-layout row wrap justify justify-center>
                                     <v-flex xs10 sm10 md10 lg10 class="mx-2 ">
                                        <v-text-field
                                        label="Buyer Name"
                                        v-model="buyerName"
                                        ></v-text-field>
                                    </v-flex>
                                    
                                   
                                   
                                </v-layout>
                                <v-layout row wrap justify-center>
                                    <v-flex xs6 sm3 md3 lg3 class="ml-3 mt-6 mr-10">
                                         <v-btn x-small color="primary" class=" mx-5" @click="onPickFileAbout">Product Photo </v-btn>
                                                 <input type="file" 
                                                 style="display: none" 
                                                ref="fileInputAbout"
                                                 accept="image/*"
                                                     @change ="onFilePickedAbout"
                                
                                >
                                    </v-flex>
                                    
                                     <v-flex xs4 md4 lg4>
                                        <v-img class="mx-7 grey" :src="this.imageLinkAbout" height="100" width="100"></v-img>
                                    </v-flex>
                                   
                                </v-layout>
                                 <v-layout row wrap justify-center>
                                        <v-flex xs10 md10 lg10  text-center >
                                            <v-btn  type="submit" small color="green" block class="my-3">Create</v-btn>
                                        </v-flex>
                                    </v-layout>
                      
                        </v-flex>
                        </v-layout>
                        </v-form>
                        
                 </v-flex>
             </v-layout>
              <v-layout row  justify-center>
                <v-flex  xs10 md11 lg11 sm10 text-start >
                    <v-layout row wrap justify-center>
                        <v-flex xs12 md8 lg8 sm8 text-start class="mr-4"  >
                                <v-btn @click="addEmploye" v-if="!addEmployeInfo" x-small color="primary"> Add new employ</v-btn>
                                <v-btn @click="addEmploye"  v-if="addEmployeInfo" x-small color="error"> minimize section + </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            
                     
                       
             <v-layout row wrap justify-center v-if="addEmployeInfo">
                 <v-flex xs12 sm8 md8 lg8 class="my-2">
                     <v-form  @submit.prevent="onUploadEmploye"> 
                        <v-layout row wrap justify-center class="my-3">
                            <v-flex xs12 sm10 md10 lg10 text-center>
                                <v-btn x-small class="white--text" color="green "> New Employe Information</v-btn>
                            
                            </v-flex>   
                           <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Type*"
                                v-model="typeEmploye"
                            ></v-text-field>
                            </v-flex>                                             
                        </v-layout>
                         <v-layout row wrap justify-center>
                            <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Name*"
                                v-model="nameEmploye"
                            ></v-text-field>
                            </v-flex>
                               <v-flex xs12  sm10 md10 lg10 class="mx-2">
                                <v-text-field
                                label="Mobile Number*"
                                v-model="mobileNoEmploye"
                                 ></v-text-field>
                            </v-flex>                          
                        </v-layout>
                        <v-layout row wrap justify-center >
                            <v-flex xs6 md4 sm4 lg4 text--center style=" border-right: outset; border-color:grey;">
                                  <v-btn small outlined class="  mt-7 " @click="onPickFileEmploye">Product Photo </v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="fileInputEmploye"
                                accept="image/*"
                                @change ="onFilePickedEmploye"
                                
                                >
                            </v-flex>
                            <v-flex xs6 sm6 md6 lg6 justify-center>
                                 <v-avatar size="90" class="ml-10">
                                      <v-img class="mx-7 grey" :src="imageUrlEmploye" height="150" width="190"></v-img>
                                 </v-avatar>
                            </v-flex>
                        </v-layout>

                        <v-layout row wrap justify-center class="my-5">
                           
                           <v-flex xs12 sm10 md10 lg10 class="mx-2">
                                <v-text-field
                                label="Other Email*"
                                v-model="emailEmploye"
                                 ></v-text-field>
                            </v-flex>
                           <v-flex xs12 sm10 md10 lg10>
                                 <v-btn color="black" type="submit" outlined small block >Upate</v-btn> 
                           </v-flex>
                            
                        </v-layout>
                      

                         </v-form>                    
                    </v-flex>
          </v-layout>

           <v-layout row  justify-center>
                <v-flex  xs10 md11 lg11 sm10 text-start >
                    <v-layout row wrap justify-center>
                        <v-flex xs12 md8 lg8 sm8 text-start class="mr-4"  >
                                <v-btn @click="addCompany" v-if="!addCompanyInfo" x-small color="orange"> Add Company +</v-btn>
                                <v-btn @click="addCompany"  v-if="addCompanyInfo" x-small color="error"> minimize section + </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-center v-if="addCompanyInfo">
                 <v-flex xs12 sm8 md8 lg8 class="my-2">
                     <v-form  @submit.prevent="onUploadCompanyDetails"> 
                        <v-layout row wrap justify-center class="my-3">
                            <v-flex xs12 sm10 md10 lg10 text-center>
                                <v-btn x-small class="white--text" color="green ">Legal Information</v-btn>
                            
                            </v-flex>  
                             <v-flex xs12 sm10 md10 lg10 class="mx-2">
                              <vue-editor placeholder="Company Details" v-model="descriptionCompany"  :editorToolbar="customToolbar"><p></p></vue-editor>
                            </v-flex> 
                           <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Company Name*"
                                v-model="companyName" 
                            ></v-text-field>
                            </v-flex>
                             <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Type of the company*"
                                v-model="typecompany" 
                            ></v-text-field>
                            </v-flex>
                             <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Type of Buisness*"
                                v-model="typeBuisness" 
                            ></v-text-field>
                            </v-flex> <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Registered Address*"
                                v-model="registeredAddress" 
                            ></v-text-field>
                            </v-flex> <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Commercial & Mailing Address*"
                                v-model="mailingAddress"   
                            ></v-text-field>
                            </v-flex> <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="Trade License Number*"
                                v-model="tradeLicense"
                            ></v-text-field>
                            </v-flex> <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="VAT Registration Number*"
                                v-model="vatRegistration"
                                                                

                            ></v-text-field>
                            </v-flex> <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="TIN Certificate Number*"
                                v-model="tinCertificate" 
                            ></v-text-field>
                            </v-flex>                                             
                        </v-layout>
                         <v-layout row wrap justify-center>
                            <v-flex xs12 sm10 md10 lg10 >
                                <v-text-field
                                label="ERC (Expot Registration Number) No*"
                                v-model="ercNo" 
                            ></v-text-field>
                            </v-flex>
                               <v-flex xs12  sm10 md10 lg10 class="mx-2">
                                <v-text-field
                                label="Member of the Trade Body *"
                                v-model="memberTrade"
                               
                                 ></v-text-field>
                            </v-flex>                          
                       
                           
                           <v-flex xs12 sm10 md10 lg10 class="mx-2">
                                <v-text-field
                                label="Enlisted With*"
                                v-model="enlistedWith" 
                                 ></v-text-field>
                            </v-flex>
                             <v-flex xs12 sm10 md10 lg10 class="mx-2">
                                <v-text-field
                                label="Bangladesh Bank  Permission No*"
                                v-model="bangladeshBank"
                              
                                 ></v-text-field>
                            </v-flex>
                              
                            
                             <v-flex xs12 sm10 md10 lg10 class="mx-2">
                              <vue-editor placeholder="Bank Details" v-model="descriptionBank"  :editorToolbar="customToolbar"><p></p></vue-editor>
                               
                            </v-flex>
                           <v-flex xs12 sm10 md10 lg10>
                                 <v-btn color="black" type="submit" outlined small block >Upate</v-btn> 
                           </v-flex>
                            
                        </v-layout>
                         </v-form>       
                                      
                    </v-flex>
                    
          </v-layout>        
            <v-layout row justify-center>             
                 <v-flex  11 sm8 md8 lg8  class="my-2">
                     <v-form  @submit.prevent="onUploadAboutCapacity">
                       <v-layout row wrap justify-start>
                            <v-flex xs12 md10 lg10 sm10 text-start class="ml-7" >
                                <v-btn @click="addititionalButtonCapacity" v-if="!addititionalButtonCapacityInfo" x-small color="green"> Add Capacity+ </v-btn>
                                <v-btn @click="addititionalButtonCapacity"  v-if="addititionalButtonCapacityInfo" x-small color="error"> minimize section + </v-btn>
                            </v-flex>
                            <v-flex xs10 md10 lg10 sm10 v-if="addititionalButtonCapacityInfo">
                               
                                <v-layout row wrap justify-center>
                                   
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                        <v-text-field v-model="capacityItem" label="Item Name">
                                            
                                        </v-text-field>
                                    </v-flex>  
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                        <v-text-field v-model="capacityUnit" label="Unit">
                                            
                                        </v-text-field>
                                    </v-flex>                             
                                </v-layout>
                                 <v-layout row wrap justify-center>
                                        <v-flex xs10 md10 lg10  text-center >
                                            <v-btn  type="submit" small color="green" block class="my-3">Create New About Section</v-btn>
                                        </v-flex>
                                    </v-layout>
                      
                        </v-flex>
                        </v-layout>
                        </v-form>
                 </v-flex>
             </v-layout>
              <v-layout row justify-center>             
                 <v-flex  11 sm8 md8 lg8  class="my-2">
                     <v-form  @submit.prevent="onUploadOffice">
                       <v-layout row wrap justify-start>
                            <v-flex xs12 md10 lg10 sm10 text-start class="ml-7" >
                                <v-btn @click="addititionalButtonCompany" v-if="!addititionalButtonCompanyInfo" x-small color="orange accent-4"> Add Capacity+ </v-btn>
                                <v-btn @click="addititionalButtonCompany"  v-if="addititionalButtonCompanyInfo" x-small color="error"> minimize section + </v-btn>
                            </v-flex>
                            <v-flex xs10 md10 lg10 sm10 v-if="addititionalButtonCompanyInfo">
                               
                                <v-layout row wrap justify-center>
                                   
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                        <v-text-field v-model="officeName" label="Office Name">
                                            
                                        </v-text-field>
                                    </v-flex>  
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                       
                                        <v-text-field v-model="nameController" label="Name Of office controller">
                                            
                                        </v-text-field>
                                    </v-flex>                             
                                </v-layout>
                                  <v-layout row wrap justify-center>   
                                   
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                        <v-text-field v-model="officeAddress" label="Address">
                                            
                                        </v-text-field>
                                    </v-flex>  
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                      
                                        <v-text-field v-model="officeContactNo" label="Contact No:">
                                            
                                        </v-text-field>
                                    </v-flex>                             
                                </v-layout>
                                  <v-layout row wrap justify-center>
                                   
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                           
                                        <v-text-field v-model="officeEmail" label="Email">
                                            
                                        </v-text-field>
                                    </v-flex>  
                                     <v-flex xs12 sm5 md5 lg5 class="ml-1 mx-5">
                                        
                                        <v-text-field v-model="webLink" label="Web Link">
                                            
                                        </v-text-field>
                                    </v-flex>                             
                                </v-layout>
                                 <v-layout row wrap justify-center>
                                        <v-flex xs10 md10 lg10  text-center >
                                            <v-btn  type="submit" small color="green" block class="my-3">Create New About Section</v-btn>
                                        </v-flex>
                                    </v-layout>
                      
                        </v-flex>
                        </v-layout>
                        </v-form>
                 </v-flex>
             </v-layout>
             
 </v-container>
</template>
<script>
import { VueEditor } from "vue2-editor";
import * as firebase  from 'firebase/app'
import 'firebase/firestore'
 export default {
      components: {
    VueEditor
  },
     data () {
        
         return {
             categoriesItem:[],
             addititionalInfoButtonDelete:false,
             addititionalButtonCompanyInfo:false,
             addititionalAboutButtonDelete:false,
             addBuyerInfo:false,
             addEmployeInfo:false,
             addititionalButtonCapacityInfo:false,
             addCompanyInfo:false,
             addititionalInfoButton:false,
             addititionalButtonAboutInfo:false,
             addAboutButton:false,
             addititionalCategoryButton:false,
             key: Math.random().toString(36).substring(2,9),
             imageLink:'',
             imageLinkAbout:'',

             capacityItem:'',
             capacityUnit:'',

            officeName:'',
            nameController:'',
            officeAddress:'',
            officeContactNo:'',
            officeEmail:'',
            webLink:'',

             descriptionBank:'',
             bangladeshBank:'',
             enlistedWith:'',
             typeBuisness:'',
             mailingAddress:'',
             tradeLicense:'',
             registeredAddress:'',
             descriptionCompany:'',
             companyName:'',
             typecompany:'',
             vatRegistration:'',
             tinCertificate:'',
             ercNo:'',
             memberTrade:'',


             imageUrlEmploye:'',

             descriptionSection:'',
             section:'',
             buyerName:'',
             subSection:'',
             nameEmploye:'',
             typeEmploye:'',
             emailEmploye:'',
             mobileNoEmploye:'',
              customToolbar: [
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [
                            { align: "" },
                            { align: "center" },
                            { align: "right" },
                            { align: "justify" }
                        ],
                        [{ color: [] }],
                        ],

             categoryName:'',
             categoriesAbout:[],
             categoryAbout:'',
             descriptionproductCat:'',
             subCategorieValue:{
                 subCategoryName:''
             },
             subCategoryValue:{},
             addCategory:'',
             subCategories:[],
             category:'',
             name:'',
             prodouctImages:'',        
                 subCategory:'',
             image: null,
         }
     },
     computed: {
         formValidation () {
             return this.category !== '' &&
              this.description !== '' 
              && this.id !== ''
             && this.name !== ''
            && this.ogPrice !== ''
              && this.quantity !== ''
            
         },

         
        
     },
       created(){
             firebase.firestore().collection('Categories').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.categoriesItem.push(doc.data())
                 })
             })
               firebase.firestore().collection('AboutCategories').get().then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.categoriesAbout.push( doc.data())
                 })
             })

        
     },
     methods: {
            statusAdd(){
                if(this.statusValue)
                    {
                        this.inStock = true
                    }
                    else{
                         this.inStock = false
                    }
            },
            onUploadBuyer(){
            var db = firebase.firestore();
             db.collection("Buyers").doc(this.key).set({
                                   
                buyerName:this.buyerName,
                buyerImage:this.imageLinkAbout,   
                id:this.key                   
              }).then(function() {
                    alert("Categorie Upded")
                    });
            },
            onUploadAboutCapacity(){
            var db = firebase.firestore();
             db.collection("CapacityItems").doc(this.key).set({
                                   
                capacityItem:this.capacityItem,
                capacityUnit:this.capacityUnit,
                categoryId:this.key,                      
              }).then(function() {
                    alert("Categorie Upded")
                    });
            },
              onUploadAboutCategory(){
            var db = firebase.firestore();
             db.collection("AboutCategories").doc(this.key).set({
                                   
                categoryAbout:this.categoryAbout,
                categoryId:this.key,                      
              }).then(function() {
                    alert("Categorie Upded")
                    });
            },
             onUploadOffice(){
            var db = firebase.firestore();
             db.collection("officeData").doc(this.key).set({
                                   
            officeName:this.officeName,
            nameController:this.nameController,
            officeAddress:this.officeAddress,
            officeContactNo:this.officeContactNo,
            officeEmail:this.officeEmail,
            webLink:this.webLink,
            OfficeId:this.key,                      
              }).then(function() {
                    alert("New Office Data Update")
                    });
            },
             onUploadCompanyDetails(){
            var db = firebase.firestore();
             db.collection("CompanyDetails").doc(this.key).set({
                                   
            descriptionBank:this.descriptionBank,
            
             bangladeshBank:this.bangladeshBank,
             enlistedWith:this.enlistedWith,
             typeBuisness:this.typeBuisness,
             mailingAddress:this.mailingAddress,
             tradeLicense:this.tradeLicense,
             registeredAddress:this.registeredAddress,
             descriptionCompany:this.descriptionCompany,
             companyName:this.companyName,
             typecompany:this.typecompany,
             vatRegistration:this.vatRegistration,
             tinCertificate:this.tinCertificate,
             ercNo:this.ercNo,
             memberTrade:this.memberTrade,
                categoryId:this.key,                      
              }).then(function() {
                    alert("Categorie Upded")
                    });
            },
          subCategoryAdd() {
                for ( let i = 0; i < this.categoriesItem.length ; i++) {
                    if(  this.category ==   this.categoriesItem[i].categoryName ){
                        this.subCategoryValue.length = 0
                         this.subCategoryValue = this.categoriesItem[i].subCategories
                    }
                }
            
        },
          onUploadEmploye(){
              var db = firebase.firestore();
             db.collection("Employe").doc(this.key).set({
                   
                typeEmploye:this.typeEmploye, 
                nameEmploye:this.nameEmploye,
                mobileNoEmploye:this.mobileNoEmploye,
                uid:this.key,
                profileImageUrl:this.imageUrlEmploye,
                emailEmploye:this.emailEmploye,

              }).then(function() {
                    alert("Employe Listed  ")
                    });
        },
           onPickFileEmploye ()  {
             
                this.$refs.fileInputEmploye.click()
         },
         
         onFilePickedEmploye (event) {
                if(event.target.files[0]){
                    const file = event.target.files[0]
                    var storageRef = firebase.storage().ref('profileImages/' +file.name);
                    var uploadTask = storageRef.put(file);
                    uploadTask.on('state_changed', ()=>{
                        }, (error)=> {
                           alert(error)
                    }, ()=> {
            
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
                        this.imageUrlEmploye=downloadURL
                      
             });
            });
             }
      },
        discountPrice(){
          
            const price = this.ogPrice
            let discount =   this.discountPercentage/100
            const discountPrice = price * discount
            this.price = (price  - discountPrice)
        },
        removeItem(e){
            this.subCategories.splice(this.subCategories.indexOf(e), 1);
        },
        onUploadProductCategory(){
              var db = firebase.firestore();
             db.collection("Categories").doc(this.key).set({
                   
                 
                categoryName:this.categoryName,
                categoryId:this.key,
                imageLink:this.imageLink,
                descriptionproductCat:this.descriptionproductCat,
                 subCategories:this.subCategories,         

              }).then(function() {
                    alert("Categorie Upded")
                    });
        },
         onUploadSection(){
              var db = firebase.firestore();
             db.collection("Section").doc(this.key).set({
                   
                 
                section:this.section,
                subSection:this.subSection,
                id:this.key,
                descriptionSection:this.descriptionSection,

              }).then(function() {
                    alert("Section Upded")
                    });
        },
          onDeleteCategorie (id) {
          
              this.DeleteDialog = false
            var db = firebase.firestore();
             db.collection("Categories").doc(id).delete().then(()=>{
             
               alert("Delete")
             })
                 
         },
         onUploadProduct () {
           
            var db = firebase.firestore();
             db.collection("Products").doc(this.key).set({
             category:this.category,
             id:this.key,
             subCategory:this.subCategory,
             name:this.name,           
             productImages:this.prodouctImages,
              }).then(function() {
                    alert("Product Uploaded")
                    });
           
            
         },
         onPickFile ()  {
                this.$refs.fileInput.click()
         },
            onPickFileCat ()  {
                this.$refs.fileInputCat.click()
         },
          onPickFileAbout ()  {
                this.$refs.fileInputAbout.click()
         },
         addsubCategory(){
           this.subCategories.push(this.subCategorieValue)
           this.subCategorieValue = {}
         },
         addititionalButtonCapacity(){
             this.addititionalButtonCapacityInfo = ! this.addititionalButtonCapacityInfo
          },
         addititionalButtonCategoryDelete(){
              this.addititionalInfoButtonDelete = !  this.addititionalInfoButtonDelete
         },
         addititionalButtonAbout(){
                    this.addititionalButtonAboutInfo = !  this.addititionalButtonAboutInfo
         },
         addititionalButton(){
             this.addititionalInfoButton = !  this.addititionalInfoButton
         },
         addititionalButtonCategory(){
            this.addititionalCategoryButton = !this.addititionalCategoryButton
         },
         addititionalButtonAboutDelete(){
             this.addititionalAboutButtonDelete = !this.addititionalAboutButtonDelete
         },
         addAbout(){
             this.addAboutButton = !this.addAboutButton
         },
         addBuyer(){
             this.addBuyerInfo = !this.addBuyerInfo
         },
          addEmploye(){
             this.addEmployeInfo = !this.addEmployeInfo
         },
         addCompany(){
             this.addCompanyInfo = !this.addCompanyInfo
         },
         addititionalButtonCompany(){
             this.addititionalButtonCompanyInfo = ! this.addititionalButtonCompanyInfo
         },
         onFilePicked (event) {
             if(event.target.files[0]){
                    const file = event.target.files[0]
                    var storageRef = firebase.storage().ref('productImages/' +file.name);
                    var uploadTask = storageRef.put(file);
                    uploadTask.on('state_changed', ()=>{

                        }, (error)=> {
                          alert(error)
                    }, ()=> {
            
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
                        this.prodouctImages = (downloadURL)
                     
             });
            });
             }
     
             },
              onFilePickedCat (event) {
        const file = event.target.files[0]
        var storageRef = firebase.storage().ref('categoryImages/' +file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', ()=>{

            }, (error)=> {
               alert(error)
        }, ()=> {
  
         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
              this.imageLink =downloadURL
           
             });
            });
             },
               onFilePickedAbout (event) {
        const file = event.target.files[0]
        var storageRef = firebase.storage().ref('aboutImages/' +file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', ()=>{

            }, (error)=> {
              alert(error)
        }, ()=> {
  
         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
              this.imageLinkAbout =downloadURL
            
             });
            });
             }
             
         }
    }
</script>
