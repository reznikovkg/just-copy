<template>
  <div id="app">
    <div>
      <LoaderComponent
          :loading="true"
      />
    </div>
  </div>
</template>

<script>
import LoaderComponent from '../../../components/loader/Loader.vue'

export default {
  name: 'App',
  components: {
    LoaderComponent
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
</style>
