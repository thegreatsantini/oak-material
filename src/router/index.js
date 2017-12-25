import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    }, {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    }, {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
