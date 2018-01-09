<template>
  <div>
   Button Component
   <oak-checkbox
     @click="toggleCheck"
     :checked="checked"/>
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