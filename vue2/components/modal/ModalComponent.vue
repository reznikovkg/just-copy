<template>
    <div
        @click="handleClickAway"
        @keydown.esc="e => handleIsVisible(e, false)"
        v-if="isVisible === true"
        ref="modal-wrapper"
        class="modal-wrapper"
        tabindex="0"
    >
        <div class="modal" ref="modal-window">
            <div class="modal__title">
                <p class="modal__title__text">{{title}}</p>
                <ion-icon
                    @click="e => handleIsVisible(e, false)"
                    class="modal__title__icon"
                    name="close-outline"
                />
            </div>
            <div class="modal__content">
                <slot></slot>
            </div>
            <div class="modal__actions">
                <button
                    v-if="okBtnText"
                    @click="e => handleIsVisible(e, false)"
                    class="modal__actions__btn">
                    {{okBtnText}}
                </button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'ModalComponent',
    props: {
        title: {
            type: String,
            required: true
        },
        okBtnText: {
            type: String,
            default: "Ok"
        },
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        handleIsVisible(e, value) {
            this.$emit("setIsVisible", { event: e, value } )
        },
        handleClickAway(e) {
            const modal = this.$refs["modal-window"];
            if (modal) {
                const clickInsideModal = modal.contains(e.target);
                if (!clickInsideModal) {
                    this.handleIsVisible(e, false)
                }
            }
        }
    },
    updated: function () {
        const modalWrapper = this.$refs["modal-wrapper"];
        if (modalWrapper) {
            modalWrapper.focus()
        }
    }
}
</script>

<style lang="less">
    @import "styles/styles";
</style>

