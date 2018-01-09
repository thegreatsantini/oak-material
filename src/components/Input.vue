<template>
  <div>
    Input Component
    <oak-input-number label="Amount: " placeholder="Enter an Amount"
      @output="setAmount"
      :theme="numberTheme"
      :value="amount"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      amount: 5,
      theme: {
        accent: '#A1A1A1',
        backgroundColor: '#212121',
        color: '#717171'
      }
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
    setAmount (x) {
      this.amount = Number(x)
    }
  }
}
</script>

<style>
</style>