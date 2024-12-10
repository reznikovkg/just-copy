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
        <label>
          <input type="radio" value="lune-curve" v-model="lineType" /> Прямая кривая линия
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
            :key="'point-' + point.id"
            :cx="point.x"
            :cy="point.y"
            r="5"
            :fill="index === activePoint ? 'orange' : 'red'"
            @mousedown.stop="startDraggingPoint(index)"
          />
          <line
            v-if="isEditing && point.control1 && point.lineType !== 'line'"
            v-for="(point, index) in points"
            :key="'control-line1-' + point.id"
            :x1="point.x"
            :y1="point.y"
            :x2="point.control1.x"
            :y2="point.control1.y"
            stroke="blue"
          />
          <line
            v-if="isEditing && point.control2 && point.lineType !== 'line'"
            v-for="(point, index) in points"
            :key="'control-line2-' + point.id"
            :x1="point.x"
            :y1="point.y"
            :x2="point.control2.x"
            :y2="point.control2.y"
            stroke="blue"
          />
          <circle
            v-if="isEditing && point.control1 && point.lineType !== 'line'"
            v-for="(point, index) in points"
            :key="'control-point1-' + point.id"
            :cx="point.control1.x"
            :cy="point.control1.y"
            r="4"
            fill="blue"
            @mousedown.stop="draggingControlPoint = [index, 'control1']"
          />
          <circle
            v-if="isEditing && point.control2 && point.lineType !== 'line'"
            v-for="(point, index) in points"
            :key="'control-point2-' + point.id"
            :cx="point.control2.x"
            :cy="point.control2.y"
            r="4"
            fill="blue"
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
      const clickedPointIndex = this.points.findIndex(point => {
        const dx = point.x - offsetX;
        const dy = point.y - offsetY;
        return Math.sqrt(dx * dx + dy * dy) <= 5;
      });

      if (clickedPointIndex !== -1) {
        this.draggingPointIndex = clickedPointIndex;
        return;
      }

      const newPoint = {
        id: Date.now(),
        x: offsetX,
        y: offsetY,
        lineType: this.lineType,
        control1: this.lineType === "curve" || this.lineType === "lune-curve" ? { x: offsetX - 20, y: offsetY - 20 } : null,
        control2: this.lineType === "curve" || this.lineType === "lune-curve" ? { x: offsetX + 20, y: offsetY + 20 } : null,
      };

      this.points.push(newPoint);
      this.activePoint = this.points.length - 1;
    },
    onMouseMove(event) {
      const offsetX = event.offsetX;
      const offsetY = event.offsetY;

      if (this.draggingPointIndex !== null) {
        const draggedPoint = this.points[this.draggingPointIndex];
        this.$set(draggedPoint, "x", offsetX);
        this.$set(draggedPoint, "y", offsetY);

        if (draggedPoint.control1) {
          this.$set(draggedPoint.control1, "x", offsetX - 20);
          this.$set(draggedPoint.control1, "y", offsetY - 20);
        }
        if (draggedPoint.control2) {
          this.$set(draggedPoint.control2, "x", offsetX + 20);
          this.$set(draggedPoint.control2, "y", offsetY + 20);
        }
      } else if (this.draggingControlPoint) {
        const [index, control] = this.draggingControlPoint;
        const mainPoint = this.points[index];
        const dx = offsetX - mainPoint.x;
        const dy = offsetY - mainPoint.y;

        this.$set(mainPoint[control], "x", offsetX);
        this.$set(mainPoint[control], "y", offsetY);

        if (mainPoint.lineType === "lune-curve") {
          const oppositeControl = control === "control1" ? "control2" : "control1";
          const oppositeControlPoint = mainPoint[oppositeControl];

          const length = Math.sqrt(
            (oppositeControlPoint.x - mainPoint.x) ** 2 +
            (oppositeControlPoint.y - mainPoint.y) ** 2
          );

          const angle = Math.atan2(dy, dx) + Math.PI;
          const newX = mainPoint.x + length * Math.cos(angle);
          const newY = mainPoint.y + length * Math.sin(angle);

          this.$set(mainPoint[oppositeControl], "x", newX);
          this.$set(mainPoint[oppositeControl], "y", newY);
        }
      }
    },
    stopDragging() {
      this.draggingPointIndex = null;
      this.draggingControlPoint = null;
    },
    startDraggingPoint(index) {
      this.draggingPointIndex = index;
    },
  },
  computed: {
    svgPath() {
      if (this.points.length === 0) return "";

      let path = `M${this.points[0].x} ${this.points[0].y}`;

      for (let i = 1; i < this.points.length; i++) {
        const point = this.points[i];
        const prevPoint = this.points[i - 1];

        if (point.lineType === "lune-curve" && prevPoint.control2 && point.control1) {
          path += ` C${prevPoint.control2.x} ${prevPoint.control2.y}, ${point.control1.x} ${point.control1.y}, ${point.x} ${point.y}`;
        } else if (point.lineType === "curve" && point.control1 && point.control2) {
          path += ` C${point.control1.x} ${point.control1.y}, ${point.control2.x} ${point.control2.y}, ${point.x} ${point.y}`;
        } else {
          path += ` L${point.x} ${point.y}`;
        }
      }

      const firstPoint = this.points[0];
      const lastPoint = this.points[this.points.length - 1];

      if (lastPoint.lineType === "lune-curve" && lastPoint.control2 && firstPoint.control1) {
        path += ` C${lastPoint.control2.x} ${lastPoint.control2.y}, ${firstPoint.control1.x} ${firstPoint.control1.y}, ${firstPoint.x} ${firstPoint.y}`;
      } else if (lastPoint.lineType === "curve" && lastPoint.control2 && firstPoint.control1) {
        path += ` C${lastPoint.control2.x} ${lastPoint.control2.y}, ${firstPoint.control1.x} ${firstPoint.control1.y}, ${firstPoint.x} ${firstPoint.y}`;
      } else {
        path += ` L${firstPoint.x} ${firstPoint.y}`;
      }

      return path;
    },
  },
  watch: {
    lineType(newType) {
      this.points = this.points.map(point => {
        if (newType === "line") {
          return { ...point, control1: null, control2: null };
        } else if (newType === "curve") {
          return {
            ...point,
            control1: point.control1 || { x: point.x - 20, y: point.y - 20 },
            control2: point.control2 || { x: point.x + 20, y: point.y + 20 },
          };
        } else if (newType === "lune-curve") {
          return {
            ...point,
            control1: point.control1 || { x: point.x - 20, y: point.y - 20 },
            control2: point.control2 || { x: point.x + 20, y: point.y + 20 },
          };
        }
        return point;
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
