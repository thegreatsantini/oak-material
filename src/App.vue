<template>
  <div id="app">
    <div class="app-row nav">
       <router-link to="/">Home</router-link>
    </div>
    <div class="app-row">
      <div>
        <div class="button">Button</div>
        <div class="button">Checkbox</div>
        <div class="button">Dialog</div>
        <div class="button">
          <router-link to="Input">Input</router-link>
        </div>
        <div class="button">Radio</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    showInput () { console.log('showInput') }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-row{
  display: flex;
  flex-flow: row nowrap;
}
.nav{
  width: 100%;
  background-color:blueviolet;
}
.button{
  cursor: pointer;
  border-radius: .5em;
}
</style>
