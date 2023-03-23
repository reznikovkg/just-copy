<template>
  <div class="home">
    <router-link :to="{ name: 'btn' }">
      Btn
    </router-link>
    <p><router-link :to="{ name: 'select' }">
      Select
    </router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
