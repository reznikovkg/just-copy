<template>
    <div>
        <div style="display: flex; flex-direction: column; gap: 10px">
            <input :value="name" @change="onNameChange" placeholder="введите имя">
            <input :value="age" @change="onAgeChange"  type="number" placeholder="введите возраст">
            <input :value="task" @change="onTaskChange" placeholder="введите таску"/>
            <button @click="addMU">Добавить пользователя</button>
        </div>
        <div class="modal-user" v-for="mu in getModalUsers" :key="mu.id">
            <h3>{{mu.name}} {{mu.age}}</h3>
            <p>{{mu.task}}</p>
            <p @click="deleteMU($event, mu.id)" style="color: red; cursor: pointer">Удалить пользователя</p>
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
        onTaskChange(e) {
            this.task = e.target.value;
        },
        onAgeChange(e) {
            this.age = +e.target.value;
        },
        onNameChange(e) {
            this.name = e.target.value;
        },
        deleteMU(e, id) {
            e.stopPropagation()
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
