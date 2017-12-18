<template>
  <div>
    Oi Lucas!
    <oak-checkbox
      :checked="active"
      @click="onClickChild">
    </oak-checkbox>	
  </div>
</template>

<script>

export default {

	data () { 
      return {
      	active: true
	}

 },

  methods: {
    onClickChild (value) {
      this.active = value
    }
  }	

}
</script>

<style scoped>
</style>