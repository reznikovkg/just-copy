<template>
  <div class="about">
    <div v-for="product in getProducts" :key="product.id">
      <BtnComp>{{ product.name }} ({{ product.cat }}) <b>{{ product.price }}</b></BtnComp> 
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BtnComp from '../../../components/button/Button.vue'


export default {
  name: 'ExpView',
  components: {
    BtnComp
  },
  computed: {
    ...mapGetters('exp', [
      'getProducts'
    ])
  },
  mounted () {
    this.loadProducts()
  },
  methods: {
    ...mapActions('exp', [
      'loadProducts'
    ])
  }
}

</script>
