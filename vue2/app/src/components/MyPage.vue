<template>
    <div>
      <ModalWindow :show="isModalVisible" :title="modalTitle" :content="modalContent" @close="closeModal">
        <!-- Передача данных через слоты -->
        <template v-slot:title>
          <h3 class="custom-title">{{ modalTitle }}</h3>
        </template>
        <template v-slot:body>
          <div class="custom-content">{{ modalContent }}</div>
        </template>
        <!-- Футер может оставаться без изменений или изменяться по необходимости -->
      </ModalWindow>
      <button class="show-modal-button" @click="openModal">Открыть модальное окно</button>
    </div>
  </template>
  
  <script>
  import ModalWindow from "@/components/Modal-window.vue";
  
  export default {
    components: {
      ModalWindow,
    },
    data() {
      return {
        isModalVisible: false,
        modalTitle: "Точно модальное окно?", // Данные для заголовка
        modalContent: "Новое содержание", // Данные для содержания
      };
    },
    methods: {
      openModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    },
  };
  </script>
  



<style scoped>
/* Импорт файла со стилями */
@import "@/styles.css";
</style>