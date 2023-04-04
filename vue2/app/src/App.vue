<template>
  <div id="app">
    <SwitchButton v-model="switch1"/>
    <CheckBox v-model="switch1"/>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox-Krivov/CheckBox.vue';
import SwitchButton from './components/SwitchButton-Krivov/SwitchButton.vue';

export default {
  name: 'App',
  components: {
    CheckBox,
    SwitchButton
  },
  data: function()
  {
    return{
      switch1:true
    }
  }
}
</script>

<style>
#app {
  font-family: Lato, sans-serif;
}

#app .switch-button {
  margin: 10px 0;
}
</style>
