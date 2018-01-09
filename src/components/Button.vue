<template>
  <div>
   Button Component
   <button>This is not the button</button>
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