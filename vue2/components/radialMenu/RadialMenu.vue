<template>
	<div class="radial-menu">
		<button
			class="menu-button"
			:class="{ active: isMenuOpen }"
			@click="toggleMenu"
			:disabled="isAnimating"
		>
			<div class="burger" :class="{ active: isMenuOpen }">
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
			</div>
		</button>
		<div class="menu-items">
			<div
				v-for="(item, index) in items"
				:key="index"
				class="menu-item"
				:style="getItemStyle(index)"
				@click="item.callback"
			>
				<div class="item-content">
					<img :src="item.icon" alt="icon" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "RadialMenu",
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			isMenuOpen: false,
			isAnimating: false,
			itemTranslate: [],
			itemOpacity: [],
		};
	},

	mounted() {
		this.resetAnimation();
	},
	methods: {
		toggleMenu() {
			if (this.isAnimating) return;
			this.isAnimating = true;
			this.isMenuOpen = !this.isMenuOpen;
			this.animateItems(this.isMenuOpen);
		},
		animateItems(isOpening) {
			const itemsCount = this.items.length;
			const angleStep = 360 / itemsCount;

			if (isOpening) {
				this.performOpeningAnimation(itemsCount, angleStep);
			} else {
				this.performClosingAnimation(itemsCount);
			}
		},
		performOpeningAnimation(itemsCount, angleStep) {
			this.items.forEach((_, index) => {
				setTimeout(() => {
					this.$set(
						this.itemTranslate,
						index,
						this.openMenu(index, angleStep, 80),
					);
					this.$set(this.itemOpacity, index, 1);
				}, index * 100);
			});

			setTimeout(() => {
				this.isAnimating = false;
			}, itemsCount * 100);
		},
		performClosingAnimation(itemsCount) {
			this.itemTranslate = this.items.map(() => "translate(0, 0)");
			this.itemOpacity = this.items.map(() => 0);

			setTimeout(() => {
				this.isAnimating = false;
			}, 100);
		},
		openMenu(index, angleStep, radius) {
			return `translate(${
				Math.cos((angleStep * index * Math.PI) / 180) * radius
			}px, ${Math.sin((angleStep * index * Math.PI) / 180) * radius}px)`;
		},
		getItemStyle(index) {
			return {
				transform: this.itemTranslate[index],
				opacity: this.itemOpacity[index],
				backgroundColor: this.items[index].color,
			};
		},
		resetAnimation() {
			this.itemTranslate = this.items.map(() => "translate(0, 0)");
			this.itemOpacity = this.items.map(() => 0);
		},
	},
};
</script>
<style scoped lang="less">
@import "styles/styles.less";
</style>
