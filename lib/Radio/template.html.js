module.exports = `
<div>
  <radio-button v-for="(option, index) in options"
    :active="active"
    :index="index" 
    :option="option"
    :key="index">
  </radio-button>
</div>`
