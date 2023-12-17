<template>
  <div class="page">
    <button class="show-modal-button" @click="showModal">Показать модальное окно</button>
    <ModalWindow ref="modal"></ModalWindow>
  </div>
</template>

<script>
// Используйте относительный путь с префиксом '@'
import ModalWindow from './components/Modal-window.vue';

export default {
  name: 'App',
  components: {
    ModalWindow,
  },
  methods: {
    showModal() {
      this.$refs.modal.show = true;
    },
  },
};
</script>

<style lang="scss">
 body {
font-family: 'Source Sans Pro', sans-serif;
margin: 0;
padding: 0;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
.page {
position: relative;
width: 100%;
min-height: 100%;
}
/* Стили для кнопки */
.show-modal-button {
background-color: #0971c7;
color: #fff;
border: none;
padding: 10px 15px;
font-size: 16px;
border-radius: 8px;
cursor: pointer;
}
.show-modal-button:hover {
background-color: #2a4cc7;
}
</style>