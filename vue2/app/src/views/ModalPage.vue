<template>
    <div>
        <ButtonComponent @click="() => handleOpen(this.getLastOpenedPackageId)" size="large" style="margin: 10px">
            Open recently viewed
        </ButtonComponent>
        <div v-for="item in packages" :key="item.pack.id" style="margin: 10px">
            <ButtonComponent @click="() => item.handleOpen()" size="large">
                {{ item.pack.name }}
            </ButtonComponent>
            <Modal :opened="item.opened" @onClose="() => item.handleClose()" with-close-button :title="item.pack.name">
                <p>
                    {{ item.pack.description }}
                </p>
                <p>
                    <a target="_blank" :href="item.pack.link">Link</a>
                </p>
            </Modal>
        </div>
    </div>
</template>

<script>
import ButtonComponent from "../../../components/button/Button.vue";
import Modal from "../../../components/modalWindow/Modal.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'ModalPage',
    components: {
        ButtonComponent,
        Modal,
    },
    computed: {
        ...mapGetters('packages', [
            'getLastOpenedPackageId',
        ]),
    },
    methods: {
        ...mapActions('packages', [
            'setLastOpenedPackageId',
        ]),
        handleOpen(id) {
            this.setLastOpenedPackageId(id);
            this.packages = this.packages.map(item => item.pack.id === id ? ({...item, opened: true}) : item)
        },

        handleClose(id) {
            this.packages = this.packages.map(item => item.pack.id === id ? ({...item, opened: false}) : item)
        }
    },
    data() {
        return {
            packages: this.$store.getters['packages/getPackages'].map(pack => ({
                pack,
                opened: false,
                handleOpen: () => {
                    this.handleOpen(pack.id);
                },
                handleClose: () => {
                    this.handleClose(pack.id);
                },
            }))
        }
    },
}
</script>
