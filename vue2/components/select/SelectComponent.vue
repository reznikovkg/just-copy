<template>
  <div
    class="select"
    :tabindex="tabindex"
    :class="{
      'select--disabled': disabled,
    }"
    @focus="() => selectFocused()"
    @blur="() => selectFocusOut()"
  >
    <div
      class="select__button"
      :class="buttonClass"
      @mouseover="() => setTextHoverIfNotOpen()"
      @mouseleave="() => unHoverText()"
      @click="() => selectButtonClick()"
    >
      {{ buttonText }}
    </div>
    <transition name="select__slide-fade">
      <div class="select__dropdown" v-show="isOpen">
        <ul class="select__options">
          <div class="select__no-data" v-if="!areOptionsExist">
            {{ noDataMessage }}
          </div>
          <li
            class="select__option"
            v-for="(option, index) in options"
            :key="index"
            :class="{
              'select__option--selected': isOptionSelected(option),
              'select__option--highlighted': isOptionHighlighted(option),
            }"
            @mouseover="() => setHighlightedOption(option)"
            @click="() => onOptionClick(option)"
          >
            {{ customLabel(option) }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Select",

  model: {
    prop: "selected",
    event: "onSelectedOptionChanged",
  },

  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },

    selected: {
      type: String,
    },

    optionKey: {
      type: String,
      default: "value",
    },

    closeOnSelect: {
      type: Boolean,
      default: true,
    },

    placeholder: {
      type: String,
      default: "-",
    },

    tabindex: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0;
      },
    },

    noDataMessage: {
      type: String,
      default: "No Data",
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    customLabel: {
      type: Function,
      default: function (option) {
        return option.name;
      },
    },
  },

  created() {
    this.innerOptions = this.getInnerOptions();
    this.initDefaultHighlightedOption();
  },

  data() {
    return {
      innerOptions: null,
      highlightedOption: null,
      isOpen: false,
      isTextHover: false,
      isFocused: false,
    };
  },

  computed: {
    buttonText() {
      let result = this.placeholder;
      let selectedOption = this.innerOptions[this.selected];
      if (selectedOption) result = this.customLabel(selectedOption);
      return result;
    },

    buttonClass() {
      return {
        "select__button--focused": this.isFocused,
        "select__button--opened": this.isOpen,
        "select__button--highlighted": this.isTextHover,
      };
    },

    areOptionsExist() {
      return this.options.length;
    },
  },

  methods: {
    getInnerOptions() {
      let result = {};
      this.options.forEach((option) => {
        if (result[option[this.optionKey]]) {
          throw new Error("Data has not unique key");
        } else {
          result[option[this.optionKey]] = option;
        }
      });
      return result;
    },

    initDefaultHighlightedOption() {
      this.highlightedOption = this.selected;
    },

    isOptionSelected(option) {
      return option[this.optionKey] === this.selected;
    },

    isOptionHighlighted(option) {
      return option[this.optionKey] === this.highlightedOption;
    },

    selectFocused() {
      this.isFocused = true;
    },

    selectFocusOut() {
      this.hideSelect();
      this.isFocused = false;
    },

    setTextHoverIfNotOpen() {
      if (!this.isOpen) this.isTextHover = true;
    },

    unHoverText() {
      this.isTextHover = false;
    },

    setHighlightedOption(option) {
      this.highlightedOption = option[this.optionKey];
    },

    selectButtonClick(){
      if(this.isOpen){
        this.hideSelect();
      }
      else{
        this.openSelect();
      }
    },

    openSelect(){
      this.isOpen = true;
      this.$emit("visibleChange", true);
    },

    hideSelect(){
      this.isOpen = false;
      this.$emit("visibleChange", false);
    },

    onOptionClick(option) {
      let result = null;
      let optionKey = option[this.optionKey];

      if (optionKey !== this.selected) {
        result = optionKey;
        this.highlightedOption = optionKey;
        this.$emit("onSelectSetNewOption", option);
      } else {
        this.$emit("onSelectSetEmpty", this.innerOptions[this.selected]);
      }

      if (this.closeOnSelect) {
        this.hideSelect();
      }

      this.$emit("onSelectedOptionChanged", result);
    },
  },
};
</script>

<style scoped lang="less">
    @import "styles/styles.less";
</style>
