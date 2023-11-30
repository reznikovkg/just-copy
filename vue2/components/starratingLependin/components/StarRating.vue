<template>
  <div class="star_rating__wrap" :style="`width:${starLimitProps * 22.1}px`">
    <div class="star_rating" @mouseleave="resetHover" @click="setDecimal">
      <span
        v-for="index in starLimitProps"
        :key="index"
        class="star_rating__img--outlined"
        @mouseover="onMouse(index)"
        @mouseleave="onMouseLeave(index)"
        @click="setRating(index)"
      ></span>
      <div
        class="star_rating__subwrap"
        :style="`width: ${this.ratingHoverWidth}%`"
      >
        <span
          v-for="index in starLimitProps"
          :key="index"
          class="star_rating__img--colored"
          @mouseover="onMouse(index)"
          @mouseleave="onMouseLeave(index)"
          @click="setRating(index)"
        ></span>
      </div>
      <div class="star_rating__subwrap" :style="`width: ${this.ratingWidth}%`">
        <span
          v-for="index in starLimitProps"
          :key="index"
          class="star_rating__img--colored"
          @mouseover="onMouse(index)"
          @mouseleave="onMouseLeave(index)"
          @click="setRating(index)"
        ></span>
      </div>
    </div>
    <div class="star_rating__count" v-if="isCountProps">{{ viewRating }}</div>
    <button class="star_rating__reset" @click="resetRating">Reset</button>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  data() {
    return {
      ratings: {
        hoverRating: 0,
        rating: this.ratingProps,
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
      default: true,
    },
  },
  computed: {
    ratingHoverWidth() {
      if (this.ratings.hoverRating <= this.starLimitProps) {
        return ((this.ratings.hoverRating / this.starLimitProps - 0.5 / this.starLimitProps) * 100);
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
        return `${this.ratings.hoverRating - 0.5} out of ${this.starLimitProps}`;
      }
      return `${this.ratings.rating} out of ${this.starLimitProps}`;
    },
  },
  methods: {
    onMouse: function (index) {
      this.ratings.ratingHidden = true;
      this.ratings.hoverRating = index;
    },
    onMouseLeave: function (index) {
      this.ratings.ratingHidden = true;
      if (index < this.starLimitProps) {
        this.ratings.hoverRating = index + 0.5;
      } else {
        this.ratings.hoverRating = index + 0.5;
      }
    },
    setRating: function (index) {
      this.ratings.rating = index - 0.5;
    },
    setDecimal: function () {
      this.ratings.rating = this.ratings.hoverRating - 0.5;
    },
    resetHover: function () {
      this.ratings.ratingHidden = false;
      this.ratings.hoverRating = 0;
    },
    resetRating: function () {
      this.ratings.rating = 0;
    },
  },
};
</script>


<style lang="scss" scoped>
.star_rating__wrap {
  display: block;
  border: 1px solid lightgray;
  padding: 5px;
  border-radius: 5px;

  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  margin-bottom: 10px;
  .star_rating {
    position: relative;
    display: inline-flex;
    &__img--outlined {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin: 0 3px;
      flex-shrink: 0;
      background: url("@/assets/img/star-outlined.svg") center no-repeat;
    }
    &__subwrap {
      display: inline-flex;
      position: absolute;
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
      transition: 0.2s;
      .star_rating__img--colored {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 3px;
        flex-shrink: 0;
        background: url("@/assets/img/star-yellow.svg") center no-repeat;
      }
    }
    &__count {
      text-align: center;
      margin: 0 auto;
      margin-top: 5px;
      border: 1px solid lightgray;
      font-size: 15px;
    }
    &__reset {
      display: block;
      width: 70px;
      margin: 0 auto;
      margin-top: 5px;
    }
  }
}
</style>

