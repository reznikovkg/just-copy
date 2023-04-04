<template>
    <div>
        <div>
            <h2 v-if="rating > 0">{{ wantedMessage }}</h2>
            <img width="500" height="600" :src="currentImage">
        </div>
        <div>
            <StarRating :starsCount="6" v-model="rating" />
            <Button @click="previewClicked" :disabled="!hasPreview">Preview</Button>
            <Button @click="dropClicked" type="error">Drop</Button>
            <Button @click="saveClicked" type="success">Save</Button>
            <Button @click="nextClicked" :disabled="!hasNext">Next</Button>
        </div>
    </div>
</template>

<script>
import Button from "../../../vue2/components/button/Button.vue"
import StarRating from "../rating/StarRating.vue"
import { maxImageIndex, wantedLevelMessages } from './constants'
import { mapGetters, mapActions } from "vuex"


const getRandomInt = max => {
    return Math.floor(Math.random() * max)
}

export default {
    name: "WantedList",
    components: {
        Button,
        StarRating
    },
    computed: {
        wantedMessage() {
            if (this.rating <= 0)
                return

            const messages = wantedLevelMessages[this.rating - 1]
            return messages[getRandomInt(messages.length)]
        },
        currentImage() {
            return require(`./assets/${this.currentIndex + 1}.jpg`)
        },
        hasPreview() {
            return this.currentIndex > 0
        },
        hasNext() {
            return this.currentIndex < maxImageIndex
        },
        ...mapGetters("wantedList", [
            "getRatingById"
        ])
    },
    methods: {
        previewClicked() {
            --this.currentIndex
            this.rating = this.$store.getters['wantedList/getRatingById'](this.currentIndex)
        },
        dropClicked() {
            this.rating = 0
            this.saveRatingById({
                id: this.currentIndex,
                rating: this.rating
            })
        },
        saveClicked() {
            this.saveRatingById({
                id: this.currentIndex,
                rating: this.rating
            })
        },
        nextClicked() {
            ++this.currentIndex
            this.rating = this.$store.getters['wantedList/getRatingById'](this.currentIndex)
        },
        ...mapActions("wantedList", [
            "saveRatingById"
        ])
    },
    data() {
        return {
            rating: 0,
            currentIndex: 0
        }
    }
}
</script>

<style></style>
