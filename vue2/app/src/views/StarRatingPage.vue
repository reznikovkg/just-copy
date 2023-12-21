<template>
  <div class="wrapper">
    <div>
      <StarRating v-model="rating1" :star-limit="10" :width-container="'500'" />
      <StarRating v-model="rating2" :star-limit="8" :is-count="false" :width-container="'50'" />
      <StarRating v-model="rating3" :star-limit="5" />
    </div>
  </div>
</template>

<script>
import StarRating from "./components/StarRating.vue";
export default {
  name: "App",
  components: {
    StarRating,
  },
  data() {
    return {
      rating1: 2.5,
      rating2: 6.5,
      rating3: 3,
    };
  },
};
</script>

<style>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
