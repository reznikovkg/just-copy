<template>
  <div class="clip-editor">
    <header class="clip-editor__header">
      <button
        class="clip-editor__button"
        @click="() => toggleEditMode()"
      >
        {{ isEditing ? "Смотреть результат" : "Редактировать" }}
      </button>
      <button
        class="clip-editor__button clip-editor__button--reset"
        @click="() => resetClipPath()"
      >
        Сбросить
      </button>
    </header>

    <main class="clip-editor__content">
      <div v-if="isEditing" class="clip-editor__canvas-wrapper">
        <canvas
          class="clip-editor__canvas"
          ref="canvas"
          @mousedown="($event) => onMouseDown($event)"
          @mousemove="($event) => onMouseMove($event)"
          @mouseup="() => stopDragging()"
          @mouseleave="() => stopDragging()"
        ></canvas>
      </div>

      <div v-else class="clip-editor__result">
        <div class="clip-editor__svg-output" v-html="svgContent"></div>
        <textarea
          class="clip-editor__code"
          readonly
          :value="svgContent"
        ></textarea>
      </div>
    </main>
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
      svgContent: "",
    };
  },
  methods: {
    toggleEditMode() {
      this.isEditing = !this.isEditing;

      if (!this.isEditing) {
        this.generateSVG();
      } else {
        this.$nextTick(() => {
          this.drawCanvas();
        });
      }
    },

    resetClipPath() {
      this.points = [];
      this.svgContent = "";
      this.drawCanvas();
    },
    onMouseDown(event) {
      if (!this.isEditing) return;
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
      if (!this.isEditing || this.draggingPointIndex === null) return;
      const { offsetX, offsetY } = event;
      this.$set(this.points, this.draggingPointIndex, { x: offsetX, y: offsetY });
      this.drawCanvas();
    },
    stopDragging() {
      this.draggingPointIndex = null;
    },
    drawCanvas() {
      const canvas = this.$refs.canvas;
      if (!canvas) return
      const ctx = canvas.getContext("2d");
      canvas.width = 500;
      canvas.height = 500;

      if (!this.loadedImage) {
        return;
      }

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
    generateSVG() {
      if (this.points.length < 3 || !this.loadedImage) return;

      const minX = Math.min(...this.points.map(p => p.x));
      const minY = Math.min(...this.points.map(p => p.y));
      const width = Math.max(...this.points.map(p => p.x)) - minX;
      const height = Math.max(...this.points.map(p => p.y)) - minY;

      const svgPoints = this.points
        .map(point => `${point.x - minX},${point.y - minY}`)
        .join(" ");

      this.svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
          <clipPath id="clipPath">
            <polygon points="${svgPoints}" />
          </clipPath>
          <image href="${this.backgroundImage}" x="${-minX}" y="${-minY}" width="500" height="500" clip-path="url(#clipPath)" />
        </svg>
      `.trim();
    },
  },
  mounted() {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = this.backgroundImage;

    img.onload = () => {
      this.loadedImage = img;
      if (this.isEditing) {
        this.drawCanvas();
      }
    };
  },
  watch: {
    isEditing(newValue) {
      if (newValue && this.loadedImage) {
        this.drawCanvas();
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
