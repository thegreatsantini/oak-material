<template>
  <div>
    Radio Component
    <oak-radio 
      @output="setRadio"
      :options="options"/>
<label class="container">One
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container">Two
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container">Three
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container">Four
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: ['One', 'Two', 'Three', 'Four']
    }
  },

  methods: {
    setRadio () { console.log('set Radio') }
  }
}
</script>