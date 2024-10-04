<template>
    <div class="cell" @click="handleClick">
      <span>{{ value }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['value', 'index'],
    methods: {
      handleClick() {
        this.$emit('cell-click', this.index);
      },
    },
  };
  </script>
  
  <style scoped>
  .cell {
    width: 90px; /* Должно совпадать с cellSize в MainComponent.vue */
    height: 90px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  
  