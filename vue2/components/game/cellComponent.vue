<template>
  <div class="cell" @click="handleClick">
    <transition name="fade">
      <span v-if="value" :class="{ 'x-mark': value === 'X', 'o-mark': value === 'O' }">{{ value }}</span>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('cell-click', this.index);
    },
  },
};
</script>

<style scoped lang="less">
@cell-size: 90px;
@x-color: #FF6347;
@o-color: #1E90FF;

.cell {
  width: @cell-size;
  height: @cell-size;
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
  box-shadow: none;

  &:hover {
    transform: scale(1.05);
    background-color: #444;
  }

  span {
    font-size: 40px;
    animation: pulse 0.5s ease;

    &.x-mark {
      color: @x-color;
    }

    &.o-mark {
      color: @o-color;
    }
  }
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
