
<template>
  <div class="popup-zone">
    <transition-group name="popup-div__anim">
      <div class="popup-div" v-for="(element, index) in popups" :key="index">
        <img class="popup-icon" :src="element.content.icon" />
        <p class="popup-title">
          {{ element.content.title }}
        </p>
        <p class="popup-text">
          {{ element.content.text }}
        </p>
        <button class="popup-close-button" @click="() => popupDiscard(element.id)">
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "popupKhaustov",
  computed: {
    ...mapGetters("popupKhaustov", [
      "getPopupArray",
      "getPopupTypes",
      "getLastId",
    ]),
    types() {
      return this.getPopupTypes;
    },
    popups() {
      return this.getPopupArray;
    },
  },
  methods: {
    ...mapActions("popupKhaustov", [
      "addPopup",
      "removePopup",
    ]),

    popupShow(popupType) {
      let id = this.getLastId;
      let popup = this.types[popupType];    
      if (popup == undefined) popup = this.types["default"];
      this.addPopup(popup)
      setTimeout(() => {
        this.removePopup(id);
      }, popup.duration * 1000)
    },

    popupDiscard(id) {
      this.removePopup(id);
    }
  },
};
</script>

<style lang="less">
@import "styles.less";
</style>
