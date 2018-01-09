<template>
  <div>
    Radio Component
    <oak-input-number label="Settings " placeholder="Choose your preferances"
      :theme="numberTheme"
      :value="amount"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checked: true,
      amount: 5,
      theme: {
        accent: '#A1A1A1',
        backgrotundColor: '#212121',
        color: '#717171'
      },
      showBasicModal: false
    }
  },

  computed: {
    buttonTheme () {
      return {
        backgroundColor: this.theme.color,
        border: 'solid',
        borderColor: this.theme.accent
      }
    },
    numberTheme () {
      return {
        active: Object.assign({}, this.theme, { borderColor: 'yellow' }),
        complete: Object.assign({}, this.theme, { border: 'none' }),
        err: Object.assign({}, this.theme, { borderColor: 'red', backgroundColor: 'white' }),
        virgin: Object.assign({}, this.theme, { backgroundColor: 'white', color: this.theme.backgroundColor })
      }
    }
  },

  methods: {
    toggleCheck () {
      this.checked = !this.checked
    }
  }
}
</script>