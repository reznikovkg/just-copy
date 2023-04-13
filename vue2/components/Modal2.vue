<template>
    <div class="modal" @click.self="closeModal">
        <div class="modal__body">
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters, mapActions} from "vuex";
export default {
    data() {
        return {
            modalId: 0,
        }
    },
    computed: {
        ...mapGetters("modalStore", [
            "lastId",
            "getModalContent",
            "getModalState",
        ]),
        isVisible() {
            return this.getModalState(modalId);
        },
        modal() {
            return this.getModalContent(modalId);
        }
    },
    mounted() {
        this.modalId = this.lastId;
        console.log(this.lastId);
        this.addModalToStore("test");
    },
    methods: {
        ...mapActions("modalStore",[
            "addModal",
            "changeVisibility"
        ]),
        addModalToStore(test) {
            this.addModal(test);
        },
        closeModal() {
            console.log(this.modalId)
            //this.changeVisibility(modalId);
            this.$emit('close')
        }
    }
}
</script>

<style lang="less" scoped>
    .modal {
        top: 0;
        left: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        &__body {
        width: 600px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        }
        &__body h1 {
            color: #03cfb4;
            border: none;
            padding: 0;
        } 
    }
</style>
