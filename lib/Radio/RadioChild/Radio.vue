<template>
    <div>{{ option }}</div>
</template>

<script>
export default {
  props: ['option'],
  data () {
    return {
      option: ''
    }
  }
}
</script>

