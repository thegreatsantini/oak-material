// register global gui components
import Vue from 'vue'
import RadioButton from './RadioChild/Radio'

Vue.component('oak-radio', {
  template: require('./template.html'),
  props: [ 'options' ],
  components: {
    RadioButton
  },
  data () {
    return {}
  },
  computed: {
    checkedSVG: function () {
      return require('./checked.svg')
    },
    notCheckedSVG: function () {
      return require('./notChecked.svg')
    }
  },
  methods: {
    toggleCheck: function () {
      this.$emit('click', !this.checked)
    }
  }
})
