<template>
  <div class="loader-blocks">
    <div class="loader-blocks__block">
      <h2>LOAD PRODUCTS</h2>
      <button @click.prevent="loadInfo()" v-if="getProducts.length === 0">click</button>
      <LoaderComponent
          :loading="block"
          :percents="false"
          isGlobal
      />
      <div v-for="product in getProducts" :key="product.id">
        <div class="loader-blocks">
          <div class="loader-blocks__block">
              {{product.id}}<br>
              {{product.name}}<br>
              {{product.type}}<br>
              {{product.value}}<br>
              <button @click="removeProduct(product.id)">Delete</button>
            <LoaderComponent
                :loading="blockProducts.some((id) => id === product.id)"
                :percents="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderComponent from '../../../components/loader/Loader.vue'
import {mapGetters} from "vuex";

export default {
  name: 'LoaderPage',
  components: {
    LoaderComponent
  },
  data() {
    return {
      block: false,
      blockProducts: []
    }
  },
  methods: {
    loadInfo() {
      this.block = true;
      this.$store.dispatch('exp/loadProducts')
          .then(() => {
            this.block = false;
          })
          .catch(() => {
            this.block = false;
            alert('Loading error');
          })
    },
    removeProduct(id) {
      this.blockProducts.push(id);
      this.$store.dispatch('exp/removeProductAction', {id}).catch(() => {
        alert('Removing error');
      })
        .finally(() => {
          const index = this.blockProducts.indexOf(id);
          if (index > -1) {
            this.blockProducts.splice(index, 1);
          }
        })
    }
  },
  computed: {
    ...mapGetters('exp', [
      'getProducts'
    ]),
  }
}
</script>

<style lang="less">
.loader-blocks {
  display: flex;
  flex-direction: column;
  padding: 10px;

  &__block {
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
}
</style>
