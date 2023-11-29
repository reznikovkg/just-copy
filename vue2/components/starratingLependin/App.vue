<template>
  <div class="wrapper">
    <div>
      <star-rating :ratingProps="2.5" :starLimitProps="10" />
      <star-rating
        :ratingProps="6.5"
        :starLimitProps="8"
        :isCountProps="false"
      />
      <star-rating :ratingProps="3" :starLimitProps="5" />
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
