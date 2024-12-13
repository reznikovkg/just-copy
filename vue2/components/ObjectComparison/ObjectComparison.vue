<template>
  <div class="container">
    <div class="comparison">
      
      <!-- Блок для исходного объекта -->
      <div class="comparison__block">
        <h3 class="comparison__title">Исходный объект</h3>
        <div
          v-for="item in preparedOriginalFields"
          :key="item.key"
          :class="['comparison__row', item.class]"
        >
          <span class="comparison__key">{{ item.key }}</span>
          <span class="comparison__value">{{ item.value }}</span>
        </div>
      </div>

      <!-- Блок для нового объекта -->
      <div class="comparison__block">
        <h3 class="comparison__title">Новый объект</h3>
        <div
          v-for="item in preparedNewFields"
          :key="item.key"
          :class="['comparison__row', item.class]"
        >
          <span class="comparison__key">{{ item.key }}</span>
          <span class="comparison__value">{{ item.value }}</span>
        </div>
      </div>
    </div>
    
    <!-- Кнопка переключения -->
    <div class="comparison__controls">
      <button class="comparison__button" @click="() => toggleShowUnchanged()">
        {{ showUnchanged ? 'Скрыть поля без изменений' : 'Показать поля без изменений' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObjectComparison',
  props: {
    originalObject: {
      type: Object,
      required: true
    },
    newObject: {
      type: Object,
      required: true
    },
    exceptions: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      showUnchanged: true // Состояние для отображения или скрытия полей без изменений
    }
  },
  computed: {
    allKeys() {
      // Собираем уникальный список ключей, сохраняя порядок из originalObject, а затем добавляем недостающие из newObject
      const originalKeys = Object.keys(this.originalObject);
      const newKeys = Object.keys(this.newObject).filter(key => !originalKeys.includes(key));
      return [...originalKeys, ...newKeys];
    },
    preparedOriginalFields() {
      // Формируем данные для исходного объекта
      return this.filteredKeys('original').map(key => ({
        key,
        value: this.formatValue(this.originalObject[key]),
        class: this.getClassForField(key, 'original')
      }));
    },
    preparedNewFields() {
      // Формируем данные для нового объекта
      return this.filteredKeys('new').map(key => ({
        key,
        value: this.formatValue(this.newObject[key]),
        class: this.getClassForField(key, 'new')
      }));
    }
  },
  methods: {
    toggleShowUnchanged() {
      // Переключение состояния
      this.showUnchanged = !this.showUnchanged;
    },
    filteredKeys(type) {
      // Фильтруем ключи для отображения
      return this.allKeys.filter(key => this.shouldDisplayField(key, type));
    },
    shouldDisplayField(key, type) {
      // Проверяем, нужно ли отображать поле
      const originalValue = this.originalObject[key];
      const newValue = this.newObject[key];

      if (!this.showUnchanged) {
        if (type === 'original' && originalValue === newValue) return false;
        if (type === 'new' && originalValue === newValue) return false;
      }

      return true;
    },
    getClassForField(key, type) {
      const originalValue = this.originalObject[key];
      const newValue = this.newObject[key];
      let resultClass = '';

      if (this.exceptions[key]) return 'comparison__field--exception';

      if (type === 'original') {
        if (!this.newObject.hasOwnProperty(key)) resultClass = 'comparison__field--deleted';
        else if (originalValue === newValue) resultClass = 'comparison__field--unchanged';
        else resultClass = 'comparison__field--changed';
      } else if (type === 'new') {
        if (!this.originalObject.hasOwnProperty(key)) resultClass = 'comparison__field--added';
        else if (originalValue === newValue) resultClass = 'comparison__field--unchanged';
        else resultClass = 'comparison__field--changed';
      }

      const value = type === 'original' ? originalValue : newValue;
      if (this.formatValue(value) === '—') resultClass += ' comparison__row--hidden';

      return resultClass;
    },
    formatValue(value) {
      return value === undefined ? '—' : value;
    }
  }
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>