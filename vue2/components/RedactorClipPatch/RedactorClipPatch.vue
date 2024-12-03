<template>
  <div class="clip-editor">
    <header class="clip-editor__header">
      <button class="clip-editor__button" @click="() => toggleEditMode()">
        {{ isEditing ? "Смотреть результат" : "Редактировать" }}
      </button>
      <button class="clip-editor__button" @click="() => resetClipPath()">Сбросить</button>
      <div class="clip-editor__line-type">
        <label>
          <input type="radio" value="line" v-model="lineType" /> Прямые линии
        </label>
        <label>
          <input type="radio" value="curve" v-model="lineType" /> Кривые линии
        </label>
      </div>
    </header>

    <main class="clip-editor__content">
      <div class="clip-editor__svg-container">
        <svg
          class="clip-editor__svg"
          :width="svgWidth"
          :height="svgHeight"
          xmlns="http://www.w3.org/2000/svg"
          @mousedown="($event) => onMouseDown($event)"
          @mousemove="($event) => onMouseMove($event)"
          @mouseup="() => stopDragging()"
          @mouseleave="() => stopDragging()"
        >
          <defs v-if="!isEditing">
            <clipPath id="clipPath">
              <path :d="svgPath" />
            </clipPath>
          </defs>
          <image
            :href="backgroundImage"
            :width="svgWidth"
            :height="svgHeight"
            :clip-path="!isEditing ? 'url(#clipPath)' : null"
          />
          <path
            v-if="isEditing"
            :d="svgPath"
            fill="none"
            stroke="rgba(0, 255, 0, 0.5)"
            stroke-width="2"
          />
          <circle
            v-if="isEditing"
            v-for="(point, index) in points"
            :key="`point-${point.id}`"
            :cx="point.x"
            :cy="point.y"
            r="5"
            :fill="index === activePoint ? 'orange' : 'red'"
            @mousedown.stop="startDraggingPoint(index)"
          />
          <line
            v-if="isEditing && point.control1"
            v-for="(point, index) in points"
            :key="`control1-${point.id}`"
            :x1="point.x"
            :y1="point.y"
            :x2="point.control1.x"
            :y2="point.control1.y"
            stroke="blue"
          />
          <line
            v-if="isEditing && point.control2"
            v-for="(point, index) in points"
            :key="`control2-${point.id}`"
            :x1="point.x"
            :y1="point.y"
            :x2="point.control2.x"
            :y2="point.control2.y"
            stroke="blue"
          />
          <circle
            v-if="isEditing && point.control1"
            v-for="(point, index) in points"
            :key="`control-point1-${point.id}`"
            :cx="point.control1.x"
            :cy="point.control1.y"
            r="4"
            fill="blue"
            :stroke="index === activePoint ? 'black' : 'none'"
            stroke-width="1"
            @mousedown.stop="draggingControlPoint = [index, 'control1']"
          />
          <circle
            v-if="isEditing && point.control2"
            v-for="(point, index) in points"
            :key="`control-point2-${point.id}`"
            :cx="point.control2.x"
            :cy="point.control2.y"
            r="4"
            fill="blue"
            :stroke="index === activePoint ? 'black' : 'none'"
            stroke-width="1"
            @mousedown.stop="draggingControlPoint = [index, 'control2']"
          />
        </svg>
      </div>
      <textarea
        v-if="!isEditing"
        class="clip-editor__code"
        readonly
        :value="svgContent"
      ></textarea>
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
      activePoint: null,
      draggingPointIndex: null,
      draggingControlPoint: null,
      lineType: "line",
      backgroundImage: "https://i.pinimg.com/736x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
      svgWidth: 500,
      svgHeight: 500,
    };
  },
  methods: {
    toggleEditMode() {
      this.isEditing = !this.isEditing;

      if (!this.isEditing) {
        this.svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="${this.svgWidth}" height="${this.svgHeight}">
            <defs>
              <clipPath id="clipPath">
                <path d="${this.svgPath}" />
              </clipPath>
            </defs>
            <image href="${this.backgroundImage}" width="${this.svgWidth}" height="${this.svgHeight}" clip-path="url(#clipPath)" />
          </svg>
        `.trim();
      }
    },
    resetClipPath() {
      this.points = [];
      this.activePoint = null;
      this.draggingPointIndex = null;
      this.draggingControlPoint = null;
    },
    onMouseDown(event) {
      const offsetX = event.offsetX;
      const offsetY = event.offsetY;

      const lineIndex = this.findLineUnderMouse(offsetX, offsetY);

      if (lineIndex !== -1) {
        this.insertPointOnLine(lineIndex, offsetX, offsetY);
        return;
      }

      const newPoint = {
        id: Date.now(),
        x: offsetX,
        y: offsetY,
        control1: this.lineType === "curve" ? { x: offsetX - 20, y: offsetY - 20 } : null,
        control2: this.lineType === "curve" ? { x: offsetX + 20, y: offsetY + 20 } : null,
      };
      this.points.push(newPoint);
      this.activePoint = this.points.length - 1;
    },

    onMouseMove(event) {
      if (this.draggingPointIndex !== null) {
        const offsetX = event.offsetX;
        const offsetY = event.offsetY;

        this.$set(this.points, this.draggingPointIndex, {
          ...this.points[this.draggingPointIndex],
          x: Math.round(offsetX),
          y: Math.round(offsetY),
        });
      }

      if (this.draggingControlPoint) {
        const [index, control] = this.draggingControlPoint;
        const offsetX = event.offsetX;
        const offsetY = event.offsetY;
        const sensitivityFactor = 1.5;
        const deltaX = (offsetX - this.points[index][control].x) * sensitivityFactor;
        const deltaY = (offsetY - this.points[index][control].y) * sensitivityFactor;
        this.$set(this.points[index][control], "x", Math.round(offsetX));
        this.$set(this.points[index][control], "y", Math.round(offsetY));
      }
    },


    stopDragging() {
      this.draggingPointIndex = null;
      this.draggingControlPoint = null;
    },
    startDraggingPoint(index) {
      this.draggingPointIndex = index;
    },
    findLineUnderMouse(x, y) {
      for (let i = 0; i < this.points.length - 1; i++) {
        const p1 = this.points[i];
        const p2 = this.points[i + 1];

        if (this.isPointOnLine(x, y, p1, p2)) {
          this.activePoint = i;
          return i;
        }
      }
      return -1;
    },
    isPointOnLine(x, y, p1, p2) {
      const distance = this.calculateDistanceFromLine(x, y, p1, p2);
      return distance < 5;
    },
    calculateDistanceFromLine(x, y, p1, p2) {
      const num = Math.abs((p2.y - p1.y) * x - (p2.x - p1.x) * y + p2.x * p1.y - p2.y * p1.x);
      const denom = Math.sqrt((p2.y - p1.y) ** 2 + (p2.x - p1.x) ** 2);
      return num / denom;
    },
    insertPointOnLine(lineIndex, x, y) {
      const p1 = this.points[lineIndex];
      const p2 = this.points[lineIndex + 1];

      const t = this.getPointOnLineParameter(p1, p2, x, y);
      const newPoint = this.getPointOnLine(p1, p2, t);
      this.points.splice(lineIndex + 1, 0, newPoint);
      this.activePoint = lineIndex + 1;
    },
    getPointOnLineParameter(p1, p2, x, y) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const t = ((x - p1.x) * dx + (y - p1.y) * dy) / (dx * dx + dy * dy);
      return t;
    },
    getPointOnLine(p1, p2, t) {
      const x = p1.x + t * (p2.x - p1.x);
      const y = p1.y + t * (p2.y - p1.y);
      return { id: Date.now(), x, y, control1: null, control2: null };
    },
  },
  computed: {
    svgPath() {
      let path = `M${this.points[0]?.x} ${this.points[0]?.y}`;

      for (let i = 1; i < this.points.length; i++) {
        const point = this.points[i];
        if (point.control1 && point.control2) {
          path += ` C${point.control1.x} ${point.control1.y}, ${point.control2.x} ${point.control2.y}, ${point.x} ${point.y}`;
        } else {
          path += ` L${point.x} ${point.y}`;
        }
      }
      path += " Z";
      return path;
    },
  },
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
