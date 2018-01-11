<template>
  <div>
   Tooltip Component
   <div class='tooltip'>Hover over 
       <span class='tooltiptext'>Tool Tip</span>
   </div>
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