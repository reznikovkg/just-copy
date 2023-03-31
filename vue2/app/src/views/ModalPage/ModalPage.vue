<template>
    <div>
        <button :disabled="isVisible" @click="(e) => setIsVisible({event: e, value: true})">Открыть</button>
        <ModalComponent
            title="Модальное окно"
            okBtnText="Ок"
            :is-visible="isVisible"
            @setIsVisible="setIsVisible"
        >
            <ModalContent/>
        </ModalComponent>
    </div>
</template>

<script>
import ModalComponent from '../../../../components/modal/ModalComponent.vue'
import ModalContent from "./ModalContent.vue";
export default {
    name: 'ModalPage',
    components: {
        ModalComponent,
        ModalContent
    },
    data: () => ({
        isVisible: false
    }),
    methods: {
        setIsVisible({ event, value }) {
            if (event) {
                event.stopPropagation();
            }
            this.isVisible = value;
        }
    }
}
</script>
