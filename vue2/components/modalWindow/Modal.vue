<template>
  <Transition name="modal-fade"
    enter-active-class="modal-fade--smooth"
    enter-class="modal-fade--invisible"
    leave-active-class="modal-fade--smooth"
    leave-to-class="modal-fade--invisible"
  >
    <div ref="wrapper" class="modal__wrapper modal--active" @click="onClose">
      <div class="modal__content">
        <div class="modal-header" v-if="title || withCloseButton">
          <div class="modal-header__title">{{ title }}</div>
          <div v-if="withCloseButton" id="close-modal-button" class="modal-header__close-button"
               @click="onCloseByButton">
            <svg style="text-align: right" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                fill="#000000"/>
            </svg>
          </div>
        </div>
          <component :is="$props.content"></component>
        <slot v-if="!$props.content"></slot>
      </div>
    </div>
  </Transition>
</template>

<script>
import ButtonComponent from "../button/Button.vue";

export default {
  name: `Modal`,
  components: {
      ButtonComponent,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    withCloseButton: {
      type: Boolean,
      default: false,
    },
    index: {
        type: Number,
    },
    content: {
      type: String | Object,
    },
  },
  methods: {
    onClose(e) {
      if (e.target === this.$refs.wrapper) {
        this.$root.$emit('removeModal', this.index);
      }
    },
    onCloseByButton() {
      this.$root.$emit('removeModal', this.index);
    }
  },
}
</script>

<style lang="less">
@import "styles/styles.less";
</style>
