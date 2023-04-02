<template>
    <div>
        <Button v-for="(modal, index) in modalsData" :key="'button'+index" @click="() => addModal(modal)" size="large">
            {{ modal.name }}
        </Button>
        <div v-for="(modal, index) in getModals" :key="'modal'+index" style="margin: 10px">
            <Modal with-close-button :title="modal.name" :index="index">
                <p>
                    {{ modal.description }}
                </p>
                <p>
                    <a target="_blank" :href="modal.link">Link</a>
                </p>
                <Button v-for="(modal, index) in modalsData" :key="'button'+index" @click="() => addModal(modal)" size="large">
                    {{ modal.name }}
                </Button>
            </Modal>
        </div>
    </div>
</template>

<script>
import Button from "../../../components/button/Button.vue";
import Modal from "../../../components/modalWindow/Modal.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'ModalPage',
    components: {
        Button,
        Modal,
    },
    computed: {
        ...mapGetters('modals', [
            'getModals',
        ]),
        modalsData() {
            return [{
                link: 'https://react.dev/',
                name: 'React',
                description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug. Component-Based.'
            }, {
                link: 'https://nestjs.com/',
                name: 'Nest',
                description: 'NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). '
            }, {
                link: 'https://expressjs.com/ru/',
                name: 'Express',
                description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Performance. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love. Frameworks. Many popular frameworks are based on Express.'
            }]
        }
    },
    mounted() {
        this.$root.$on('addModal', (data) => this.addModal(data));
        this.$root.$on('removeModal', (i) => this.removeModal(i));
    },
    methods: {
        ...mapActions('modals', [
            'addModalAction',
            'removeModalAction',
        ]),
        addModal(modal) {
            this.addModalAction(modal);
        },
        removeModal(i) {
            this.removeModalAction(i);
        }
    },
}
</script>
