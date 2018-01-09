<template>
  <div>
    Dialog Component
    <oak-input-number label="Amount: " placeholder="Enter your information"
      @output="setAmount"
      :theme="theme"
      :value="amount"/>
    <button @click="openBasicModal">Basic Dialog</button>
    <oak-modal v-if="showBasicModal"
    @cancel="showBasicModal = false"
    @ok="showBasicModal = false">
    <h2 slot="header">Basic Dialog</h2>
   <div slot="content"> A basic dialog </div>
  </oak-modal>
  </div>
</template>

<<script>
export default {
  data () {
    return {
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
    }
  },

  methods: {
    openBasicModal () {
      this.showBasicModal = true
      console.log('show basic')
    },

    setAmount () {
      console.log('set amount')
    }
  }
}
</script>
