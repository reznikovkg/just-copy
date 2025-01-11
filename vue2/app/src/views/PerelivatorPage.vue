<template>
    <div class="game-page">
      <h1>Добро пожаловать в игру "Переливатор"</h1>
      <Game />
    </div>
  </template>
  
  <script>
  import Game from '../../../components/Perelivator/Game.vue';
  
  export default {
    name: 'GamePage',
    components: {
      Game
    },
  };
  </script>
  
  <style scoped lang="less">
  .game-page {
    text-align: center;
    padding: 2em;
  }
  </style>
  