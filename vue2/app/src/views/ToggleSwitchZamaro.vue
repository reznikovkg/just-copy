<template>
    <div id="app">
        <div class="container">
            <div>
                <select v-model="selectValue">
                    <option :value="switchesTypes.SWITCH">switch</option>
                    <option :value="switchesTypes.CHECKBOX">checkbox</option>
                </select>
                <input v-model="giveName" class="container__input" placeholder="введите название"/>
                <button @click="() => addSW()">Добавить</button>
            </div>
            <div class="container__align" v-for="(sw) in getToggleSwitches" :key="sw.name">
                <Checkbox v-if="sw.type === switchesTypes.CHECKBOX"
                          :label="sw.name"
                          v-model="sw.value"
                          @change="change"/>
                <SwitchButton v-else-if="sw.type === switchesTypes.SWITCH"
                              :label="sw.name"
                              v-model="sw.value"
                              @change="change"/>
                <button class="container__button" @click="() => deleteFromToggleSwitches(sw.name)">delete switch</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import SwitchButton from "../../../components/SwitchButtonZamaro/SwitchButton.vue";
import Checkbox from "../../../components/CheckBoxZamaro/CheckBox.vue";
import {switchesTypes} from "@/constants";

export default {
    name: 'CustomCheckbox',
    data: () => ({
        giveName: "",
        selectValue: switchesTypes.SWITCH
    }),
    components: {
        SwitchButton,
        Checkbox
    },
    computed: {
        ...mapGetters(
            'ToggleSwitches', [
                'getToggleSwitches'
            ]),
        switchesTypes() {
            return switchesTypes
        },
    },
    methods: {
        ...mapActions(
            'ToggleSwitches', [
                'addToToggleSwitches',
                'deleteFromToggleSwitches',
                'changeSwitch'
            ]),
        change(name) {
            this.changeSwitch(name);
        },
        addSW() {
            this.addToToggleSwitches({name: this.giveName, type: this.selectValue})
        },
    },
};
</script>

<style lang="less">
.checkbox{
    color: aqua;
}

.switch-button{
    color: aqua;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;

    .container__align{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

  &__input {
    width: 200px;
  }
}


</style>