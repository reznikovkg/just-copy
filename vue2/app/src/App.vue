<template>
  <body>
    <div id="app">
      <div class="content">
        <h3 class="content__title">Лабораторная работа №2</h3>
        <div class="container">
          <div class="container__lab-info">
            <h6 class="info-title">Вариант 8. Аккордеон</h6>
            <p class="info-author">Борченко Ирина, 61 группа</p>
          </div>
          <div class="accordion">
            <AccorditionComponent 
            v-for="(accordion__item, i) in accordion"
            :accordion__item="accordion__item"
            :index="i" 
            :key="i"
            :open="accordion__item.open"
            @clickHandler="clickHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import AccorditionComponent from '../../components/accorditionBorchenko/AccorditionComponent.vue'

export default {
  name: 'App',
  components: {
    AccorditionComponent
  },
  data() {
    return {
      accordion: [
        {
          title: "Мудрость",
          content: "Sub specie aeternitatis", 
          open: false
        },
        {
          title: "Вопрос",
          content: "Когда", 
          open: false
        },
        {
          title: "11010000 10010110",
          content: "11010000 10110000 11010000 10110001 11010000 10110000", 
          open: false
        }
      ]
    }
  },
  methods: {
    clickHandler: function(index) {
      this.accordion = this.accordion.map((accordion__item,  i) => {
        if(index === i) {
          accordion__item.open = !accordion__item.open;
        }
        return accordion__item;
      })
    }
  }
}
</script>

<style lang="less">
@import "styles/styles.less";
</style>

