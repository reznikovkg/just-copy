<template>
  <div>
    <h1>AccordionComponent</h1>
    <h2>Accordion with all elements closed by default: </h2>
    <AccordionComponent class="acc" :infoArrayIndex='0'/>

    <h2>Accordion with all elements open by default: </h2>
    <AccordionComponent class="acc" :infoArrayIndex='1'/>
  </div>
</template>

<script>
import AccordionComponent from '../../../components/accordion/AccordionComponent.vue'

export default {
  name: 'AccComp',
  components: {
    AccordionComponent
  },
}
</script>

<style>
.acc {
  margin: auto auto 15px;
}
</style>