<template>
  <div>
    <Popup ref="popupKhaustov"/>
    <div style="margin: 5px; padding: 5px;">
      <p> default (5 sec) </p>
      <button @click="() => popupShow('default')">
        ShowPopup
      </button>
      <hr>

      <p> danger (10 sec) </p>
      <button @click="() => popupShow('danger')">
        ShowPopup
      </button>
      <hr>

      <p> important (4 sec) </p>
      <button @click="() => popupShow('important')">
        ShowPopup
      </button>
      <hr>

      <p> info (3 sec) </p>
      <button @click="() => popupShow('info')">
        ShowPopup
      </button>
      <hr>

      <p> notification (1 sec) </p>
      <button @click="() => popupShow('notification')">
        ShowPopup
      </button>
      <hr>

    </div>
  </div>
</template>

<script>
import Popup from "../../../components/popupKhaustov/PopupKhaustov.vue"
export default {
  name: "KhaustovPage",
  components: {
    Popup,
  },
  methods: {
    popupShow(popupType) {
      this.$refs.popupKhaustov.popupShow(popupType);
    },
    popupDiscard() {
      this.$refs.popup.popupDiscard();
    },
  },
};
</script>