/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import Dialog from '@/components/Dialog'
import Radio from '@/components/Radio'
import Button from '@/components/Button'
 

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
    }, {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    },  {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },  {
      path: '/Button',
      name: 'Button',
      component: Button
    }
  ]
})
