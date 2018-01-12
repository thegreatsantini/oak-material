// <input> material design component for Vue.js
//
// usage (all properties optional):
// <oak-input
//   @output=[Function]           your update method
//   value=[String]               parent data bound to this instance
//   label=[String]               label for displayed data
//   placeholder=[String]         input placeholder
//   theme=[OakTheme Object]      oak material theme definition
//   width=[???]
//   params= see below
// />
//   params object properties are all optional.  Default settings shown.
//     all props above (except output) can be attached to params for brevity
import Vue from 'vue'

Vue.component('oak-input', {
  template: require('./template.html'),
  props: [ 'value', 'label', 'placeholder', 'theme', 'width' ],
  data () {
    return {
      local: {
        value: this.value
      },
      showInput: false
    }
  },

  computed: {
    localLabel () {
      if (this.label != null) return this.label
      else return false
    },
    localStyle () {
      if (this.theme != null) return this.theme
      else return false
    }
  },
  methods: {
    output () {
      this.$emit('output', this.local.value)
      this.showInput = false
    },
    parse () {
      this.$emit('output', this.local.value)
    },
    showUI () {
      this.showInput = true
    }
  }
})
