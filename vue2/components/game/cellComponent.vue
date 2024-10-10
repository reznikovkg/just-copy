<template>
  <div class="cell" @click="handleClick">
    <transition name="fade">
      <span v-if="value === 'X'" class="x-mark">{{ value }}</span>
      <span v-if="value === 'O'" class="o-mark">{{ value }}</span>
    </transition>
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
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: bold;
  background-color: #333;
  border-radius: 12px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: none; /* Remove shadow to eliminate grid effect */
}

.cell:hover {
  transform: scale(1.05);
  background-color: #444;
}

.x-mark {
  color: #FF6347; /* Red color for X */
  font-size: 40px;
  animation: pulse 0.5s ease;
}

.o-mark {
  color: #1E90FF; /* Blue color for O */
  font-size: 40px;
  animation: pulse 0.5s ease;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>