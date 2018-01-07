<template>
  <div>
    Radio Component
    <oak-input-number label="Settings " placeholder="Choose your preferances"
      @output="setAmount"
      :theme="numberTheme"
      :value="amount"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checked: true
    }
  },

  methods: {
    toggleCheck () {
      this.checked = !this.checked
    }
  }
}
</script>