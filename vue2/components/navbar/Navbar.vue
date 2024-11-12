<template>
  <div class="menu-container">
    <div class="menu-container__bar">
      <div class="menu-container__bottom-bar">
        <div class="menu-container__group">
          <div 
            v-for="(icon, index) in leftIcons"
            :key="index"
            :class="['menu-container__icon', { 'menu-container__icon--active': selectedIndex === index }]" 
            @click="() => selectIcon(index)"
          >
            <img :src="icon" />
          </div>
        </div>

        <div class="menu-container__group">
          <div 
            v-for="(icon, index) in rightIcons"
            :key="index"
            :class="['menu-container__icon', { 'menu-container__icon--active': selectedIndex === leftIcons.length + index }]"
            @click="() => selectIcon(leftIcons.length + index)"
          >
            <img :src="icon" />
          </div>
        </div>

        <div class="menu-container__indicator" :style="indicatorStyle"></div>
      </div>

      <div class="menu-container__central">
        <div 
          class="menu-container__central-button"
          :class="{ 'menu-container__central-button--open': menuOpen }"
          @click="() => toggleMenu()"
        >
          +
        </div>
      </div>

      <div 
        :class="[
          'menu-container__raz',
          { 'menu-container__raz--open': menuOpen, 'menu-container__raz--closed': !menuOpen }
        ]"
      >
        <div
          v-for="(icon, index) in radialIcons"
          :key="index"
          class="menu-container__radial-icon"
          :style="getItemPosition(index)"
        >
          <img :src="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      menuOpen: false,
      selectedIndex: 0,
      radius: 72.5,
      leftIcons: [
        "https://img.icons8.com/material/24/chat--v1.png", 
        "https://img.icons8.com/material/24/computer-chat.png"
      ],
      rightIcons: [
        "https://img.icons8.com/material/24/high-priority-message.png", 
        "https://img.icons8.com/material/24/filled-sent.png"
      ],
      radialIcons: [
        "https://img.icons8.com/material/24/compact-camera--v1.png", 
        "https://img.icons8.com/material/24/image-gallery.png",
        "https://img.icons8.com/material/24/video-record--v1.png"
      ],
    };
  },
  computed: {
    indicatorStyle() {
      const positions = ["7%", "22.5%", "77%", "93%"];
      return {
        left: positions[this.selectedIndex],
        transform: "translateX(-50%)",
        transition: "left 0.3s ease",
      };
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    selectIcon(index) {
      this.selectedIndex = index;
    },
    getItemPosition(index) {
      const totalItems = this.radialIcons.length;
      const angle = (index / (totalItems - 1)) * Math.PI;
      
      const formatterY = this.getValueForAngleY(angle)
      const formatterX = this.getValueForAngleX(angle)

      const x = this.radius * Math.cos(angle) + formatterX;
      const y = this.radius * Math.sin(angle) + formatterY;

      return {
        position: 'absolute',
        left: `${this.radius + x}px`,
        top: `${this.radius - y}px`,
        transform: 'translate(-50%, -50%)',
      };
    },
    getValueForAngleX(angle) {
      return -20 + (40 / Math.PI) * angle;
    },
    getValueForAngleY(angle) {
      const halfPi = Math.PI / 2;
      const step = 1.4;

      if (angle === halfPi) {
        return -20;
      }
      if (angle < halfPi) {
        return 20 - (40 / halfPi) * (angle * step);
      }
      return 20 - (40 / halfPi) * ((Math.PI - angle) * step);
    }
  }

};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>