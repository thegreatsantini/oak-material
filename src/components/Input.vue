<template>
  <div>
    <div>
    Basic Input Component
    <oak-input
     @output="setBasic"
     :value="basic.value"
    />
    <div>{{basic.value}}</div>
    </div>
    Basic Input with Theming
    <div><small>Linked data goes here</small></div>
    <div>
    Basic Input with Width
    <div><small>Linked data goes here</small></div>
    </div>
    <div>
    Number Input Component
    <oak-input-number label="Amount: " placeholder="Enter an amount"
      @output="setAmount"
      :theme="numberTheme"
      :value="amount"/>
    <div><small>Linked data goes here</small></div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      basic: {
        value: 'Your text'
      },
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
    },
    setBasic (x) {
      this.basic.value = x
    }
  }
}
</script>

<style>
</style>