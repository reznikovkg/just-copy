<template>
  <div>
    <h1>AccordionComponent</h1>
    <h2>Accordion with all elements closed by default: </h2>
    <AccordionComponent
        class="acc"
        :elems=getElems(0)
        :active-elems=getActiveElems(0)
        :infoArrayIndex="0"
        @updateElement="dispatchSetActive($event)" />

      <h2>Accordion with all elements open by default: </h2>
      <AccordionComponent
          class="acc"
          :elems=getElems(1)
          :active-elems=getActiveElems(1)
          :infoArrayIndex="1"
          @updateElement="dispatchSetActive($event)" />
  </div>
</template>

<script>
import AccordionComponent from '../../../components/accordion/AccordionComponent.vue'
import {mapActions, mapGetters} from "vuex"

export default {
  name: 'AccComp',
  components: {
    AccordionComponent
  },
  computed: {
    ...mapGetters('accordion', {
      getElems: 'getElementsData',
      getActiveElems: 'getActiveElements'
    }),
  },
  methods: {
    ...mapActions('accordion', {
      setActive: 'setElementActiveAction'
    }),
    dispatchSetActive({aIndex, index}) {
      this.setActive({aIndex: aIndex, index: index})
    }
  }
}
</script>

<style>
.acc {
  margin: auto auto 15px;
}
</style>
