<template>
  <nav class="menu">
    <input type="checkbox" class="menu-open" v-model="menuOpen" id="menu-open" />
    <label class="menu-open-button" for="menu-open">
      <span class="lines line-1"></span>
      <span class="lines line-2"></span>
      <span class="lines line-3"></span>
    </label>

    <a href="#" v-for="(item, index) in menuItems" :key="index" :class="['menu-item', item.color]"
      :style="getItemStyle(index, menuItems.length)" @click.prevent="item.action">
      <i :class="item.icon"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent",
  props: {
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      menuOpen: false,
      radius: 120,
    };
  },
  methods: {
    getItemStyle(index, totalItems) {
      if (!this.menuOpen) {
        return {
          transform: `translate3d(0px, 0px, 0)`,
        };
      }

      const angle = (index / totalItems) * 2 * Math.PI;
      const x = this.radius * Math.cos(angle);
      const y = this.radius * Math.sin(angle);

      return {
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transitionDuration: `${200 + index * 100}ms`,
      };
    },
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  background: #596778;
  color: #eeeeee;
  text-align: center;
  font-family: "Lato", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.menu-item,
.menu-open-button {
  background: #eeeeee;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-left: -40px;
  position: absolute;
  color: #ffffff;
  text-align: center;
  line-height: 80px;
  transform: translate3d(0, 0, 0);
  transition: transform ease-out 200ms;
}

.menu-open {
  display: none;
}

.lines {
  width: 25px;
  height: 3px;
  background: #596778;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -12.5px;
  margin-top: -1.5px;
  transition: transform 200ms;
}

.line-1 {
  transform: translate3d(0, -8px, 0);
}

.line-2 {
  transform: translate3d(0, 0, 0);
}

.line-3 {
  transform: translate3d(0, 8px, 0);
}

.menu-open:checked+.menu-open-button .line-1 {
  transform: translate3d(0, 0, 0) rotate(45deg);
}

.menu-open:checked+.menu-open-button .line-2 {
  transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.menu-open:checked+.menu-open-button .line-3 {
  transform: translate3d(0, 0, 0) rotate(-45deg);
}

.menu {
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80px;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  font-size: 26px;
}

.menu-item:hover {
  background: #eeeeee;
  color: #3290b1;
}

.menu-open-button {
  z-index: 2;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  cursor: pointer;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.menu-open-button:hover {
  transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

.menu-open:checked~.menu-item {
  transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

.blue {
  background-color: #669ae1;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.green {
  background-color: #70cc72;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.red {
  background-color: #fe4365;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.purple {
  background-color: #c49cde;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.orange {
  background-color: #fc913a;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.lightblue {
  background-color: #62c2e4;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}
</style>
