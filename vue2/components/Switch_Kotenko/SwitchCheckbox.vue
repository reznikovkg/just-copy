<template>
    <div>
      <div class="switch-field" :class="{ 'switch-field_on': switchState1, 'switch-field_off': !switchState1 }" @click="toggleSwitch1">
        <input type="checkbox" v-model="switchState1" class="checkbox-field_checkbox">
        <label class="checkbox-text flag-selected" for="checkbox_1">Переключатель_1</label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        switchState1: false
      };
    },
    methods: {
      toggleSwitch1() {
        this.switchState1 = !this.switchState1;
      }
    }
  };
  </script>
  
  <style scoped lang="less">
  .switch-field {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50px;
    height: 25px;
    border-radius: 12px;
    z-index: 1;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    position: relative;
    transition-duration: 300ms;
  
    &.switch-field_off {
      background: #f50505;
    }
  
    &::after {
      content: "";
      height: 20px;
      width: 20px;
      border-radius: 18px;
      background: #fff;
      top: -10px;
      left: -10px;
      transition-duration: 300ms;
      box-shadow: 0 0 10px 0 #999999;
      position: absolute;
      z-index: 1;
    }
  
    &.switch-field_off::after {
      top: 2px;
      left: 6px;
    }
  
    &.switch-field_on {
      background: #1aff00;
    }
  
    &.switch-field_on::after {
      top: 2px;
      left: 25px;
    }
  }
  
  .checkbox-field_checkbox {
    position: relative;
    top: 5px;
    left: 70px;
  }
  
  .checkbox-text {
    position: relative;
    top: 6px;
    left: 80px;
  }
  </style>
  
  