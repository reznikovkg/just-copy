<template>
  <div
    class="star-rating__wrap"
    :style="`width:${this.ratings.widthContainer}px`"
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
        class="star-rating__img--outlined"
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
          class="star-rating__img--colored"
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
          class="star-rating__img--colored"
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
  data() {
    return {
      ratings: {
        hoverRating: 0,
        rating: 0,
        ratingHidden: false,        
      },
    };
  },
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
  computed: {
    ratingHoverWidth() {
      if (this.ratings.hoverRating <= this.starLimitProps) {
        return (
          (this.ratings.hoverRating / this.starLimitProps - 0.5 / this.starLimitProps) * 100
        );
      }
      return (this.ratings.hoverRating / this.starLimitProps) * 100;
    },
    ratingWidth() {
      if (!this.ratings.ratingHidden) {
        return (this.ratings.rating / this.starLimitProps) * 100;
      }
      return 0;
    },
    viewRating() {
      if (this.ratings.ratingHidden) {
        return `${this.ratings.hoverRating - 0.5} out of ${
          this.starLimitProps
        }`;
      }
      return `${this.ratings.rating} out of ${this.starLimitProps}`;
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.ratings.rating = this.ratingProps;
    });
    this.$nextTick(function () {
      if (this.widthContainerProps !== "") {
        this.ratings.widthContainer = this.widthContainerProps;
      } else {
        this.ratings.widthContainer = String(this.starLimitProps * 22.1);
      }
    });
  },
  methods: {
    onMouse(index) {
      this.ratings.ratingHidden = true;
      this.ratings.hoverRating = index;
    },
    onMouseLeave(index) {
      this.ratings.ratingHidden = true;
      this.ratings.hoverRating = index + 0.5;
    },
    setRating(index) {
      this.ratings.rating = index - 0.5;
    },
    setDecimal() {
      this.ratings.rating = this.ratings.hoverRating - 0.5;
    },
    resetHover() {
      this.ratings.ratingHidden = false;
      this.ratings.hoverRating = 0;
    },
    resetRating() {
      this.ratings.rating = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/StarRating.scss";
</style>
