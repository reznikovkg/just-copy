<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
      <div class="modal">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <slot name="title">
          <h3 class="modal-title">{{ title }}</h3>
        </slot>
        <slot name="body">
          <div class="modal-content">{{ content }}</div>
        </slot>
        <slot name="footer">
          <div class="modal-footer">
            <button class="modal-footer__button" @click="closeModal">
              Ок
            </button>
          </div>
        </slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      title: String, // Пропс для заголовка
      content: String, // Пропс для содержания
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>


<style scoped>
/* Импорт файла со стилями */
@import "@/styles.css";
</style>