<template>
  <div>
    Dialog Component
    <oak-input-number label="Amount: " placeholder="Enter your information"
      @output="setAmount"
      :theme="numberTheme"
      :value="amount"/>
  </div>
</template>

<<script>
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
    }
  }
}
</script>
