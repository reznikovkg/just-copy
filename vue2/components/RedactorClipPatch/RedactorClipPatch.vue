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
          <input type="radio" value="line-curve" v-model="lineType" /> Прямая-кривая
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
  name: "ClipEditor",
  data() {
    return {
      isEditing: true,
      points: [],
      activePoint: null,
      draggingPointIndex: null,
      draggingControlPoint: null,
      lineType: "line", // 'line', 'curve', 'line-curve'
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

      const newPoint = {
        id: Date.now(),
        x: offsetX,
        y: offsetY,
        control1: null,
        control2: null,
      };

      if (this.lineType === "line") {

        if (this.points.length > 0) {
          const prevPoint = this.points[this.points.length - 1];
          const angle = Math.atan2(newPoint.y - prevPoint.y, newPoint.x - prevPoint.x);
          const controlLength = 50;

          newPoint.control1 = {
            x: prevPoint.x + controlLength * Math.cos(angle),
            y: prevPoint.y + controlLength * Math.sin(angle),
          };
          newPoint.control2 = {
            x: newPoint.x + controlLength * Math.cos(angle),
            y: newPoint.y + controlLength * Math.sin(angle),
          };
        }
      } else if (this.lineType === "curve") {

        if (this.points.length > 0) {
          const prevPoint = this.points[this.points.length - 1];
          const angle = Math.atan2(newPoint.y - prevPoint.y, newPoint.x - prevPoint.x);

          const controlLength = 50;

          newPoint.control1 = {
            x: prevPoint.x + controlLength * Math.cos(angle + Math.PI / 2),
            y: prevPoint.y + controlLength * Math.sin(angle + Math.PI / 2),
          };
          newPoint.control2 = {
            x: newPoint.x + controlLength * Math.cos(angle - Math.PI / 2),
            y: newPoint.y + controlLength * Math.sin(angle - Math.PI / 2),
          };
        }
      } else if (this.lineType === "line-curve") {

        if (this.points.length > 0) {
          const prevPoint = this.points[this.points.length - 1];
          const angle = Math.atan2(newPoint.y - prevPoint.y, newPoint.x - prevPoint.x);

          const controlLength = 50;

          newPoint.control1 = {
            x: prevPoint.x + controlLength * Math.cos(angle + Math.PI),
            y: prevPoint.y + controlLength * Math.sin(angle + Math.PI),
          };
          newPoint.control2 = {
            x: newPoint.x + controlLength * Math.cos(angle),
            y: newPoint.y + controlLength * Math.sin(angle),
          };
        }
      }

      this.points.push(newPoint);
      this.activePoint = this.points.length - 1;
    },
    onMouseMove(event) {
      const offsetX = event.offsetX;
      const offsetY = event.offsetY;

      if (this.draggingPointIndex !== null) {
        const point = this.points[this.draggingPointIndex];
        point.x = offsetX;
        point.y = offsetY;

        if (this.lineType === "line" && point.control1 && point.control2) {

          const prevPoint = this.points[this.draggingPointIndex - 1];
          const angle = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x);
          const controlLength = 50;

          point.control1.x = prevPoint.x + controlLength * Math.cos(angle);
          point.control1.y = prevPoint.y + controlLength * Math.sin(angle);

          point.control2.x = point.x + controlLength * Math.cos(angle);
          point.control2.y = point.y + controlLength * Math.sin(angle);
        } else if (this.lineType === "line-curve" && point.control1 && point.control2) {

          const prevPoint = this.points[this.draggingPointIndex - 1];
          const angle = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x);

          const controlLength = 50;

          point.control1.x = prevPoint.x + controlLength * Math.cos(angle + Math.PI);
          point.control1.y = prevPoint.y + controlLength * Math.sin(angle + Math.PI);

          point.control2.x = point.x + controlLength * Math.cos(angle);
          point.control2.y = point.y + controlLength * Math.sin(angle);
        }
      } else if (this.draggingControlPoint) {
        const [pointIndex, controlName] = this.draggingControlPoint;
        const point = this.points[pointIndex];

        if (controlName === "control1") {
          point.control1.x = offsetX;
          point.control1.y = offsetY;
        } else if (controlName === "control2") {
          point.control2.x = offsetX;
          point.control2.y = offsetY;
        }

        if (this.lineType === "line-curve") {
          const prevPoint = this.points[pointIndex - 1];
          const nextPoint = this.points[pointIndex + 1];

          if (controlName === "control1" && prevPoint) {
            prevPoint.control2 = {
              x: point.control1.x,
              y: point.control1.y,
            };
          }

          if (controlName === "control2" && nextPoint) {
            nextPoint.control1 = {
              x: point.control2.x,
              y: point.control2.y,
            };
          }
        }
      }
    },
    startDraggingPoint(index) {
      this.draggingPointIndex = index;
    },
    startDraggingControlPoint([index, controlName]) {
      this.draggingControlPoint = [index, controlName];
    },
    stopDragging() {
      this.draggingPointIndex = null;
      this.draggingControlPoint = null;
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
      return path + " Z";
    },
  },
};
</script>


<style scoped lang="less">
@import "styles/styles.less";
</style>
