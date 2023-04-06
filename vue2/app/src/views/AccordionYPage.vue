<template>
  <div class=component-page>
    <h1>Лабораторная №2-3</h1>
    <h2>Найдите жабу <span>&#128079;&#127995;</span> </h2>
    <AccordionComponent
        class="acc"
        :elems=getElems(0)
        :active-elems=getActiveElems(0)
        :contentArrayIndex="0"
        @updateElement="(event) => dispatchSetActive(event)" 
    />

      <h2>Демонстрация Жабы: </h2>
    <AccordionComponent
        class="acc"
        :elems=getElems(1)
        :active-elems=getActiveElems(1)
        :contentArrayIndex="1"
        @updateElement="(event) => dispatchSetActive(event)" 
    />
  </div>
</template>

<script>
import AccordionComponent from '../../../components/accordionY/AccordionComponent.vue'
import {mapActions, mapGetters} from "vuex"

export default {
  name: 'AccComp',
  components: {
    AccordionComponent
  },
  computed: {
    ...mapGetters('accordionY', {
      getElems: 'getAccordionData',
      getActiveElems: 'getActiveElements'
    }),
  },
  methods: {
    ...mapActions('accordionY', {
      setActive: 'setElementActiveAction'
    }),
    dispatchSetActive({accordionIndex, index}) {
      this.setActive({accordionIndex: accordionIndex, index: index})
    }
  }
}
</script>

<style>
.acc {
  margin: auto auto 15px;
}
</style>
