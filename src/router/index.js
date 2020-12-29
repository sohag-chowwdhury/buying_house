import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/User/Signin'
import UploadProduct from '../views/UploadProduct'
import Home from '../views/Home'
import AdminInfo from '../views/AdminInfo'
import Slider from '../views/Slider'
import Admins from '../views/Admins'
import Products from '../views/Products'
import SingleProduct from '../views/SingleProduct'
import Client from '../views/Client'
import Contact from '../views/Contact'
import About from '../views/About'
import LegalInformation from '../views/LegalInformation'
import Delete from '../views/Delete'
import ContactForm from '../views/ContactForm'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  
  {
    path: '/product/new',
    name: 'UploadProduct',
    component: UploadProduct,
  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  },
  {
    path: '/legal/information',
    name: 'LegalInformation',
    component: LegalInformation
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/delete/item',
    name: 'Delete',
    component: Delete
  },
  
  
  {
    path: '/contact/new',
    name: 'ContactForm',
    component: ContactForm
  },
  {
    path: '/products',
    name: 'Products',
    props:true,
    component: Products
    
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
    
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/product/:id',
    name: 'SingleProduct',
    props:true,
    component:SingleProduct,
  },
 
  {
    path: '/admins',
    name: 'Admins',
    component: Admins
  },
  {
    path: '/admin/info',
    name: 'AdminInfo',
    component: AdminInfo
  },
  
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
