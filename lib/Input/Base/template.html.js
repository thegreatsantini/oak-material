module.exports =
`
<div class="oak-input oak-full">
  <div class="oak-row oak-between oak-button oak-faux-input"
    :style="localStyle"
    v-if="!showInput" @click="showUI">
    <div v-if="localLabel" style="text-align: left;">{{ localLabel }}</div>
    <div style="text-align: right;">
      {{local.value}}
    </div>
  </div>
  <div v-if="showInput" style="width: 90%;">
    <input @input="parse" @change="output" @blur="output"
      :placeholder="localPlaceholder"
      ref="ui"
      v-model="local.value">
  </div>
</div>`
