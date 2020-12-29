import Vue from 'vue'
import App from './App.vue'
import * as firebase  from 'firebase/app'
import 'firebase/firestore'
import router from './router'
import vuetify from './plugins/vuetify';
import AlertCmp from './components/shared/Alert.vue';
import DatetimePicker from 'vuetify-datetime-picker'
import NewAdmin from './components/User/NewAdmin.vue'
import Signin  from './components/User/Signin.vue'
import UnitUpdate from './components/UpdateProduct/UnitUpdate.vue'
import DeleteProduct from './components/UpdateProduct/DeleteProduct.vue'
import Contact from './components/ReuseComponent/Contact.vue'
import Products from './components/ReuseComponent/Products.vue'
import Client from './components/ReuseComponent/Client.vue'
import TopButton from './components/ReuseComponent/TopButton.vue'









Vue.config.productionTip = false

Vue.component ('app-alert', AlertCmp)
Vue.component ('new-admin', NewAdmin)
Vue.component ('signin', Signin)

Vue.component ('unit-update', UnitUpdate)
Vue.component ('delete-product', DeleteProduct)
Vue.component ('contact', Contact)
Vue.component ('products', Products)
Vue.component ('client', Client)
Vue.component ('top-button', TopButton)






Vue.use(DatetimePicker)

import { store } from './store'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
     //furebase config key.
    })
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')
