<template>
    <div>
        <div style="display: flex; flex-direction: column; gap: 10px">
            <input v-model="name" placeholder="введите имя">
            <input v-model="age" type="number" placeholder="введите возраст">
            <input v-model="task" placeholder="введите таску"/>
            <button @click="() => addMU()">Добавить пользователя</button>
        </div>
        <div class="modal-user" v-for="mu in getModalUsers" :key="mu.id">
            <h3>{{mu.name}} {{mu.age}}</h3>
            <p>{{mu.task}}</p>
            <button @click="() => deleteMU(mu.id)" style="color: red">Удалить пользователя</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: 'ModalContent',
    data: () => ({
        name: '',
        age: 0,
        task: ''
    }),
    methods: {
        deleteMU(id) {
            this.deleteModalUser(id)
        },
        addMU() {
            if (this.name && (this.age !== null && this.age !== undefined) && this.task) {
                this.addModalUser({name: this.name, age: this.age, task: this.task})
            }
        },
        ...mapActions("modalUsers", ["addModalUser", "deleteModalUser"]),
    },
    computed: {
        ...mapGetters("modalUsers", ["getModalUsers", "getSelectedModalUser"])
    }
}
</script>
