<template>
    <div class="rating">
        <div v-for="i in starsCount" :key="i" @click="itemClicked(starsCount - i + 1)"
            :style="ratingItem(starsCount - i + 1)">
            <slot>★</slot>
        </div>
    </div>
</template>

<script>

export default {
    name: "StarRating",
    props: {
        starsCount: {
            type: Number,
            default: 5
        },
        modelValue: {
            type: Number,
            default: 0
        },
        starSize: {
            type: String,
            default: "50px"
        },
        transitionDuration: {
            type: String,
            default: ".2s"
        },
        inactiveColor: {
            type: String,
            default: "#dcdcdc"
        },
        activeColor: {
            type: String,
            default: "orange"
        },
        cursorStyle: {
            type: String,
            default: "pointer"
        }
    },
    emits: [
        "update:modelValue",
        "changed"
    ],
    methods: {
        itemClicked(index) {
            this.$emit("update:modelValue", index)
            this.$emit("changed", index)
        },
        ratingItem(index) {
            return {
                "font-size": this.starSize,
                "cursor": this.cursorStyle,
                "transition": this.transitionDuration,
                "color": index <= this.modelValue ? this.activeColor : this.inactiveColor
            }
        }
    }
}
</script>

<style>
@import "styles/styles.css"
</style>
