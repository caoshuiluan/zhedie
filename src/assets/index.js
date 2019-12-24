import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import houtai from '@/components/houtai'
import shouye from '@/components/shouye'
import index from '@/components/index'
import ScrollPane from '@/components/ScrollPane'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/ScrollPane',
      name: 'ScrollPane',
      component: ScrollPane
    },
    {
      path:'/shouye',
      name: 'shouye',
      component:shouye,
  },
  {
    path:'/caidanlan',
    name: 'caidanlan',
    component:caidanlan,
},
    {
      path: '/houtai',
      name: 'houtai',
      component: houtai,
      children:[
        
        // {
        //     path:'/mine/c',
        //     component:Cpage,
        // },
        // {
        //     path:'/mine/d',
        //     component:Dpage,
        // }
      ]

    }
  ]
})
