<template>
    <div class="checkbox" name="checkbox" :class="{ enabled: value }" @click="check" >
    </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean
  },
  methods: {
    check: function () {
      this.$emit("change", !this.value);
    }
  }
}


</script>


<style scoped lang="less">
@background_color_1: green;
@border_color_1: gray;

.checkbox {
	content: '';
	display: inline-block;
	width: 15px;
	height: 15px;
	flex-shrink: 0;
	flex-grow: 0;
	border: 2px solid #adb5bd;
	border-radius: 5px;
	margin-right: 20px;
  margin-bottom:30px;
  margin-top: 20px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 50% 50%;
  
}
.checkbox::before {
  margin-left:20px;
  content: "переключатель ";
}
.checkbox.enabled {
	border-color: @border_color_1;
	background-color: @background_color_1;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

</style>