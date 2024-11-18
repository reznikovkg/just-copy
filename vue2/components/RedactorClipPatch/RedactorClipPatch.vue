<template>
  <div class="clip-editor">
    <div class="clip-editor__controls">
      <button class="clip-editor__button" @click="() => toggleEditMode()">
        {{ isEditing ? 'Смотреть результат' : 'Редактировать' }}
      </button>
      <button class="clip-editor__button" @click="() => resetClipPath()">Сбросить</button>
    </div>

    <div 
      class="clip-editor__canvas-wrapper" 
      :style="{ clipPath: points.length > 2 && !isEditing ? clipPathStyle : 'none' }"
    >
      <canvas 
        class="clip-editor__canvas"
        ref="canvas" 
        @mousedown="($event) => onMouseDown($event)" 
        @mousemove="($event) => onMouseMove($event)"
        @mouseup="() => stopDragging()" 
        @mouseleave="() => stopDragging()"
      ></canvas>
    </div>

    <div class="clip-editor__output">
      <h3 class="clip-editor__output-title">Clip-path:</h3>
      <code class="clip-editor__output-code">{{ clipPathStyle }}</code>
    </div>
  </div>
</template>


<script>
export default {
  name: "RedactorClipPatch",
  data() {
    return {
      isEditing: true,
      points: [],
      draggingPointIndex: null,
      backgroundImage: "https://i.pinimg.com/736x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
      loadedImage: null,
    };
  },
  computed: {
    clipPathStyle() {
      if (this.points.length < 3) return "none";
      const pointsString = this.points.map(point => `${point.x}px ${point.y}px`).join(", ");
      return `polygon(${pointsString})`;
    },
  },
  methods: {
    toggleEditMode() {
      this.isEditing = !this.isEditing;
      this.drawCanvas();
    },
    resetClipPath() {
      this.points = [];
      this.drawCanvas();
    },
    onMouseDown(event) {
      if (!this.isEditing) return
      const { offsetX, offsetY } = event;
      const clickedPointIndex = this.points.findIndex(
        ({ x, y }) => Math.hypot(x - offsetX, y - offsetY) < 5
      );

      if (clickedPointIndex >= 0) {
        this.draggingPointIndex = clickedPointIndex;
      } else {
        for (let i = 0; i < this.points.length - 1; i++) {
          const point1 = this.points[i];
          const point2 = this.points[i + 1];
          const distance = this.distanceToSegment(offsetX, offsetY, point1.x, point1.y, point2.x, point2.y);
          if (distance < 5) {
            const newPoint = { x: offsetX, y: offsetY };
            this.points.splice(i + 1, 0, newPoint);
            this.drawCanvas();
            return;
          }
        }
        this.points.push({ x: offsetX, y: offsetY });
        this.drawCanvas();
      }
    },
    onMouseMove(event) {
      if (!this.isEditing) return
      if (this.draggingPointIndex === null) return;
      const { offsetX, offsetY } = event;
      this.$set(this.points, this.draggingPointIndex, { x: offsetX, y: offsetY });
      this.drawCanvas();
    },
    stopDragging() {
      this.draggingPointIndex = null;
    },
    drawCanvas() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      canvas.width = 500;
      canvas.height = 500;

      if (!this.loadedImage) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(this.loadedImage, 0, 0, canvas.width, canvas.height);

      if (this.points.length > 2) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach(point => ctx.lineTo(point.x, point.y));
        ctx.closePath();

        if (!this.isEditing) {
          ctx.clip();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(this.loadedImage, 0, 0, canvas.width, canvas.height);
        } else {
          ctx.clip();
          ctx.fillStyle = "rgba(128, 128, 128, 0.5)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.restore();
        }
      }

      if (this.isEditing) {
        ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.points[0]?.x || 0, this.points[0]?.y || 0);
        this.points.forEach(point => ctx.lineTo(point.x, point.y));
        ctx.closePath();
        ctx.stroke();

        this.points.forEach(point => {
          ctx.fillStyle = "#ff0000";
          ctx.beginPath();
          ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    },
    distanceToSegment(px, py, ax, ay, bx, by) {
      const abx = bx - ax;
      const aby = by - ay;
      const apx = px - ax;
      const apy = py - ay;
      const bpx = px - bx;
      const bpy = py - by;

      const dot = abx * apx + aby * apy;
      const len_sq = abx * abx + aby * aby;
      const param = len_sq === 0 ? -1 : dot / len_sq;

      let xx, yy;

      if (param < 0) {
        xx = ax;
        yy = ay;
      } else if (param > 1) {
        xx = bx;
        yy = by;
      } else {
        xx = ax + param * abx;
        yy = ay + param * aby;
      }

      const dx = px - xx;
      const dy = py - yy;
      return Math.sqrt(dx * dx + dy * dy);
    },
  },
  mounted() {
    const img = new Image();
    img.src = this.backgroundImage;

    img.onload = () => {
      this.loadedImage = img;
      this.drawCanvas();
    };
  },
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>