import Vue from 'vue'
import App from './App'
require('../src')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  render: function (createElement) {
    return createElement(App)
  }
})
