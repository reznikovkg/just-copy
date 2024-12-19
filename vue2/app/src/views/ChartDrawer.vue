<template>
  <div>
    <svg class="chart-canvas" ref="chartSvg">
      <template v-if="drawer != null">
        <rect
            v-if="currentRect"
            :x="currentRect.x"
            :y="currentRect.y"
            :width="currentRect.w"
            :height="currentRect.h"
            stroke="black"
            fill="none"
        />
        <polyline
            v-for="(seg, i) in arrowsAsPoints"
            :key="`a${i}`"
            :points="seg"
            fill="none"
            stroke="red"
            stroke-width="0.5"
        />
        <rect
            v-for="(rect, i) in drawer.rectangles"
            :key="`r${i}`"
            :x="rect.x"
            :y="rect.y"
            :width="rect.w"
            :height="rect.h"
            fill="blue"
        />
        <polyline
            :points="previewArrow"
            fill="none"
            stroke="red"
            stroke-width="0.5"
        />
      </template>
    </svg>
  </div>
</template>

<script>
import { ChartDrawer } from "../../../components/chartDrawer/ChartDrawer";

export default {
  name: "ChartDrawer",
  computed: {
    currentRect() {
      return this.drawer.currentRectangle?.abs();
    },
    arrowsAsPoints() {
      return this.drawer.arrows.map((arrow) => {
        return [arrow.start, ...arrow.path.map(val => val), arrow.end].join(" ");
      }, []);
    },
    previewArrow() {
      if(this.drawer.startPoint && this.drawer.endPoint) {
        return [this.drawer.startPoint, this.drawer.endPoint].join(" ");
      } else {
        return "";
      }
    }
  },
  data() {
    return {
      /** @type ChartDrawer */
      drawer: null,
    }
  },
  mounted() {
    let bb = this.$refs.chartSvg.getBoundingClientRect();
    let scale = 4;
    let width = Math.floor(bb.width / scale);
    let height = Math.floor(bb.height / scale);
    this.$refs.chartSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    this.drawer = new ChartDrawer(
        width,
        height,
        scale,
        this.$refs.chartSvg
    );
  },
  beforeDestroy() {
    this.drawer.destroy();
  }
}
</script>

<style scoped lang="less">
.chart-canvas {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>