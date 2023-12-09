<template>
  <div class="star-rating__wrap" :style="`width:${widthDefault}px`">
    <div class="star-rating" @mouseleave="() => resetHover()" @click="() => setDecimal()">
      <img
        v-for="index in starLimit"
        :key="index"
        src="@/assets/img/star-outlined.svg"
        class="star-rating__img"
        @mouseover=" () => onMouse (index)"
        @mouseleave=" () => onMouseLeave (index)"
        @click=" () => setRating (index)"
      />
      <div class="star-rating__subwrap" :style="`width: ${ratingHoverWidth}%`">
        <img
          v-for="index in starLimit"
          :key="index"
          src="@/assets/img/star-yellow.svg"
          class="star-rating__img"
          @mouseover=" () => onMouse (index)"
          @mouseleave=" () => onMouseLeave (index)"
          @click=" () => setRating (index)"
        />
      </div>
      <div class="star-rating__subwrap" :style="`width: ${ratingWidth}%`">
        <img
          v-for="index in starLimit"
          :key="index"
          src="@/assets/img/star-yellow.svg"
          class="star-rating__img"
          @mouseover=" () => onMouse (index)"
          @mouseleave=" () => onMouseLeave (index)"
          @click=" () => setRating (index)"
        />
      </div>
    </div>
    <div v-if="isCount" class="star-rating__count">{{ viewRating }}</div>
    <button class="star-rating__reset" @click=" () => resetRating ()">Reset</button>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
    isCount: {
      type: Boolean,
      default: false,
    },
    widthContainer: {
      type: String,
      default: "",
    },
  },
  data () {
    return {
      hoverRating: 0,
      rating: 0,
      ratingHidden: false,
      widthDefault: "",
    };
  },  
  computed: {
    ratingHoverWidth() {
      const baseRating = this.hoverRating / this.starLimit;
      const hoverWidth = this.hoverRating <= this.starLimit ? (baseRating - 0.5 / this.starLimit) * 100 : baseRating * 100;
      return hoverWidth;
    },
    ratingWidth () {
      return this.ratingHidden ? 0 : (this.rating / this.starLimit) * 100;
    },
    viewRating () {
      return this.ratingHidden ? `${this.hoverRating - 0.5} out of ${this.starLimit}` : `${this.rating} out of ${this.starLimit}`;
    },
    ratingValue: {
      get() {
        return this.rating;
      },
      set(newVal) {
        this.$emit('update:modelValue', newVal);
      }
    },
  },
  mounted () {
    this.rating = this.modelValue;
    this.widthDefault = this.widthContainer ? this.widthContainer : String(this.starLimit * 22.1);
  },  
  methods: {
    onMouse (index) {
      this.ratingHidden = true;
      this.hoverRating = index;
    },
    onMouseLeave (index) {
      this.ratingHidden = true;
      this.hoverRating = index + 0.5;
    },
    setRating (index) {
      this.$emit ("update:modelValue", index - 0.5);
    },
    setDecimal () {
      this.rating = this.hoverRating - 0.5;
      this.$emit ("update:modelValue", this.rating);
    },
    resetHover () {
      this.ratingHidden = false;
      this.hoverRating = 0;
    },
    resetRating () {
      this.rating = 0;
      this.$emit ("update:modelValue", this.rating);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/StarRating.scss";
</style>
