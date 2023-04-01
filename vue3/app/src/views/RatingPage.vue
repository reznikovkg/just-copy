<template>
    <div class="about">
        <h1>Rating</h1>
        <StarRating v-model="rating"></StarRating>
    </div>
</template>

<script>
import StarRating from '../../../components/rating/StarRating.vue'

export default {
    name: 'BtnView',
    components: {
        StarRating
    },
    data() {
        return {
            rating: 0
        }
    }
}

</script>
