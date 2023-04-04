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
import Button from "../../../../components/button/Button.vue"
import StarRating from "../../../../components/rating/StarRating.vue"
import { wantedLevelMessages } from "./constants"
import { domain, maxImageIndex } from "../../constants"
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
    data() {
        return {
            rating: 0,
            currentIndex: 0
        }
    },
    computed: {
        ...mapGetters("wantedList", [
            "getRatingById"
        ]),
        wantedMessage() {
            if (this.rating <= 0)
                return

            const messages = wantedLevelMessages[this.rating - 1]
            return messages[getRandomInt(messages.length)]
        },
        currentImage() {
            return `${domain}/image/${this.currentIndex}`
        },
        hasPreview() {
            return this.currentIndex > 0
        },
        hasNext() {
            return this.currentIndex < maxImageIndex
        }
    },
    methods: {
        ...mapActions("wantedList", [
            "saveRatingById"
        ]),
        async previewClicked() {
            --this.currentIndex
            this.rating = await this.getRatingById(this.currentIndex)
        },
        dropClicked() {
            this.rating = 0
            return this.saveRatingById({
                id: this.currentIndex,
                rating: this.rating
            })
        },
        saveClicked() {
            return this.saveRatingById({
                id: this.currentIndex,
                rating: this.rating
            })
        },
        async nextClicked() {
            ++this.currentIndex
            this.rating = await this.getRatingById(this.currentIndex)
        }
    }
}
</script>

<style></style>
