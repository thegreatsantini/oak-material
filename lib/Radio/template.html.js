module.exports = `
<div>
  <radio-button v-for="(option, index) in options" 
    :option="option"
    :key="index">
  </radio-button>
</div>`
