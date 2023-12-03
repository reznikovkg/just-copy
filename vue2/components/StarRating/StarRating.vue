<template>
  <div
    class="star-rating__wrap"
    :style="`width:${this.widthContainer}px`"
  >
    <div
      class="star-rating"
      @mouseleave="() => resetHover()"
      @click="() => setDecimal()"
    >
      <img
        v-for="index in starLimitProps"
        :key="index"
        src="@/assets/img/star-outlined.svg"
        class="star-rating__img"
        @mouseover="() => onMouse(index)"
        @mouseleave="() => onMouseLeave(index)"
        @click="() => setRating(index)"
      />
      <div
        class="star-rating__subwrap"
        :style="`width: ${this.ratingHoverWidth}%`"
      >
        <img
          v-for="index in starLimitProps"
          :key="index"
          src="@/assets/img/star-yellow.svg"
          class="star-rating__img"
          @mouseover="() => onMouse(index)"
          @mouseleave="() => onMouseLeave(index)"
          @click="() => setRating(index)"
        />
      </div>
      <div class="star-rating__subwrap" :style="`width: ${this.ratingWidth}%`">
        <img
          v-for="index in starLimitProps"
          :key="index"
          src="@/assets/img/star-yellow.svg"
          class="star-rating__img"
          @mouseover="() => onMouse(index)"
          @mouseleave="() => onMouseLeave(index)"
          @click="() => setRating(index)"
        />
      </div>
    </div>
    <div v-if="isCountProps" class="star-rating__count">{{ viewRating }}</div>
    <button class="star-rating__reset" @click="() => resetRating()">
      Reset
    </button>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    ratingProps: {
      type: Number,
      default: 0,
    },
    starLimitProps: {
      type: Number,
      default: 5,
    },
    isCountProps: {
      type: Boolean,
      default: false,
    },
    widthContainerProps: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      hoverRating: 0,
      rating: 0,
      ratingHidden: false,
    };
  },  
  computed: {
    ratingHoverWidth() {
      if (this.hoverRating <= this.starLimitProps) {
        return (
          (this.hoverRating / this.starLimitProps - 0.5 / this.starLimitProps) * 100
        );
      }
      return (this.hoverRating / this.starLimitProps) * 100;
    },
    ratingWidth() {
      if (!this.ratingHidden) {
        return (this.rating / this.starLimitProps) * 100;
      }
      return 0;
    },
    viewRating() {
      if (this.ratingHidden) {
        return `${this.hoverRating - 0.5} out of ${
          this.starLimitProps
        }`;
      }
      return `${this.rating} out of ${this.starLimitProps}`;
    },
  },
  mounted: function () {
    this.$nextTick(() => {
      this.rating = this.ratingProps;
    });
    this.$nextTick(() => {
      if (this.widthContainerProps !== "") {
        this.widthContainer = this.widthContainerProps;
      } else {
        this.widthContainer = String(this.starLimitProps * 22.1);
      }
    });
  },
  methods: {
    onMouse(index) {
      this.ratingHidden = true;
      this.hoverRating = index;
    },
    onMouseLeave(index) {
      this.ratingHidden = true;
      this.hoverRating = index + 0.5;
    },
    setRating(index) {
      this.rating = index - 0.5;
    },
    setDecimal() {
      this.rating = this.hoverRating - 0.5;
    },
    resetHover() {
      this.ratingHidden = false;
      this.hoverRating = 0;
    },
    resetRating() {
      this.rating = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/StarRating.scss";
</style>