<template>
  <div class="outer">
    <Accordion
      v-for="(accordion, index) in accordions"
      :items="accordion.items"
      :key="index"
      @itemToggle="(itemIndex) => toggleAccordionItemByAccordionId(index, itemIndex)"
      style = 'margin-top: 20px'
    />
  </div>
</template>
  
<script>
import Accordion from '../../../components/accordionStays/AccordionStays.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Accordion,
  },
  computed: {
    ...mapGetters('accordionStaysExpress', [
      'getAccordions'
    ]),
    accordions() {
      return this.getAccordions
    }
  },
  mounted() {
    this.loadAccordions()
  },
  methods: {
    ...mapActions('accordionStaysExpress', [
      'toggleAccordionItem',
      'loadAccordions'
    ]),
    toggleAccordionItemByAccordionId(accordionId, index) {
      this.toggleAccordionItem({ accordionId, index })
    }
  },
}
</script>

<style scoped>
Accordion + Accordion {
  margin-top: 10px;
}
</style>