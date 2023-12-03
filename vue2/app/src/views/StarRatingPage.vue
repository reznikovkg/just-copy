<template>
  <div class="wrapper">
    <div>
      <StarRating
        :rating-props="2.5"
        :star-limit-props="10"
        :width-container-props="'500'"        
      />
      <StarRating
        :rating-props="6.5"
        :star-limit-props="8"
        :is-count-props="false"
      />
      <StarRating :rating-props="3" :star-limit-props="5" />
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
