<template>
    <div class="home">
        <router-link :to="{ name: 'btn' }">
            Btn
        </router-link>
        <router-link :to="{ name: 'rating' }">
            Rating
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>
