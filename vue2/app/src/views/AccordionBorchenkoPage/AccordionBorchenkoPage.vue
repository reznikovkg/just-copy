<template>
    <body>
      <div id="app">
        <div class="content">
          <h3 class="content__title">Лабораторная работа №3</h3>
          <div class="container">
            <div class="container__lab-info">
              <h6 class="info-title">Вариант 8. Аккордеон</h6>
              <p class="info-author">Борченко Ирина, 61 группа</p>
            </div>
            <div class="accordion">
              <AccordionComponent 
                v-for="(accordion__item, i) in tabs"
                :accordion__item="accordion__item"
                :index="i" 
                :key="i"
                :open="accordion__item.open"
                :activeIndex="0"
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  <script>
  import AccordionComponent from '../../../../components/accordionBorchenko/AccordionComponent.vue'
  import {mapActions,mapGetters} from "vuex"
  
  export default {
    name: 'App',
    components: {
      AccordionComponent
    },
    computed: {
      ...mapGetters('accordionBorchenko', [
        'getAccordion',
        'getActiveAccordion'
      ]),
      tabs() {
        return this.getAccordion
      },
    },
    methods: {  
      ...mapActions('accordionBorchenko', [
         'changeOpen',
         'setActiveIndex'
      ]),
    }
  }
  </script>
  
  <style lang="less">
  @import "styles/styles.less";
  </style>
  
  