<template>
  <div id="app">
    <div class="app-row nav">
       <router-link to="/">Home</router-link>
    </div>
    <div class="app-row">
      <div>
        <div class="button">
          <router-link to="Button">Button</router-link>
        </div>
        <div class="button">
          <router-link to="Checkbox">Checkbox</router-link>
        </div>
        <div class="button">
          <router-link to="Dialog">Dialog</router-link>
        </div>
        <div class="button">
          <router-link to="Input">Input</router-link>
        </div>
        <div class="button">
          <router-link to="Radio">Radio</router-link>
        </div>
        <div class="button">
          <router-link to="Tooltip">Tooltip</router-link>
        </div>
        <div class="button">
          <router-link to="Accordion">Accordion</router-link>
        </div>
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

.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
 
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 105%;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}

/* Style the buttons that are used to open and close the accordion panel */
.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
    background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
    padding: 0 18px;
    background-color: white;
    display: none;
}

/* The container FOR RADIO COMPONENT*/
.container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
    background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
</style>
