<template>
    <div class="switch-button" :class="{ enabled: value }" @click="toggle">
      <div class="circle"></div>
    </div>
</template>

<script>
export default {
  name: "SwitchButton",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean
  },
  methods: {
    toggle: function () {
      this.$emit("change", !this.value);
    }
  }
}


</script>

<style scoped lang="less">

@background_color_1: red;
@background_color_2: white;
@background_color_3: green;

.switch-button {
	height: 26px;
	display: inline-block;
	width: calc(25px * 2);
	border-radius: 35px;
	transition: 0.3s;
	margin-bottom: 20px;
	margin-top:20px;
	cursor: pointer;
	background-color: @background_color_1;
	.circle {
		height: calc(25px - (2 * 2px));
		width: calc(25px - (2 * 2px));
		border: 2px solid rgb(212, 206, 206);
		border-radius: calc(20px - (2 * 2px));
		background: red;
		transition: 0.3s;
		background-color: @background_color_2;
	}
}
.switch-button.enabled {
	background-color: @background_color_3;
	.circle {
		background: white;
		transform: translateX(calc(calc(25px - (2 * 2px)) + (2 *2px)));
	}
}

</style>
