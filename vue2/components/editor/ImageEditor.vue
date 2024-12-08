<template>
  <div id="app">
    <input type="file" @change="onImageUpload" />
    <div class="canvas-container">
      <canvas
        ref="canvas"
        width="800"
        height="600"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseout="stopDrawing"
      ></canvas>
    </div>
    <div class="controls">
      <label>
        Цвет карандаша:
        <input type="color" v-model="penColor" />
      </label>
      <label>
        Размер карандаша:
        <input type="range" v-model="penSize" min="1" max="10" class="pen-size-slider" />
      </label>
      <button @click="exportImage">Экспортировать изображение</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      penColor: '#000000',
      penSize: 5,
      isDrawing: false,
      ctx: null,
      startX: 0,
      startY: 0,
    };
  },
  methods: {
    onImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    startDrawing(event) {
      this.isDrawing = true;
      const rect = this.$refs.canvas.getBoundingClientRect();
      this.startX = event.clientX - rect.left;
      this.startY = event.clientY - rect.top;
      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY);
    },
    draw(event) {
      if (!this.isDrawing) return;
      const rect = this.$refs.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = this.penColor;
      this.ctx.lineWidth = this.penSize;
      this.ctx.stroke();
    },
    stopDrawing() {
      this.isDrawing = false;
      this.ctx.closePath();
    },
    exportImage() {
      const link = document.createElement('a');
      link.download = 'exported_image.png';
      link.href = this.$refs.canvas.toDataURL('image/png');
      link.click();
    },
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
  },
};
</script>

<style scoped lang="less">
#app {
  text-align: center;
}
.canvas-container {
  border: 1px solid #ccc;
  display: inline-block;
  margin-top: 20px;
}
.controls {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.pen-size-slider {
  width: 120px;
  height: 6px;
  margin-left: 10px;
  appearance: none;
  background: #ccc;
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: #333;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #333;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
