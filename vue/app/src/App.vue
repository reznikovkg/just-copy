<template>
  <div id="app">
      <ButtonComponent @click="() => click()" >
        Confirm
      </ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from './../../components/button/Button.vue'

export default {
  name: 'App',
  components: {
    ButtonComponent
  },
  methods: {
    click () {
      alert('The button was clicked')
    }
  }
}
</script>

<style>
</style>
