<template>
    <div id="app">
      <CheckBox v-model="switch1"></CheckBox>
      <SwitchButton v-model="switch1"></SwitchButton>
     </div>
    </template>

  <script>
  import SwitchButton from './../../components/switch_evseenko/SwitchButton.vue'
  import CheckBox from './../../components/checkbox_evseenko/Checkbox.vue'
  export default {
    name: 'App-evseenko',
    components: {
     SwitchButton,
     CheckBox
    },
    data:
      function () {
        return {
          switch1:false
        };
      }
  }
  </script>
  
  <style lang="less">
  #app {
    font-family: Lato, sans-serif;
  }
  
  </style>
  