import Vue from 'vue'
import VueRouter from 'vue-router'
// import Carts from '@/views/carts'
import homeRouter from './home'
import categoryRouter from './category'
import cartsRouter from './carts'
import userRouter from './user'
import goodslist from './goodslist'
// import goodetail from './goodslist/goodetail'

Vue.use(VueRouter)

const routes = [
  //重定向
  {
  path:'/',
  redirect:'/home', 
  },
  {
    name:'Goodetail',
    path:'/goodetail',
    component:()=>import('@/views/goodslist/goodetail'),
  },
  homeRouter,categoryRouter,cartsRouter,userRouter,goodslist
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
