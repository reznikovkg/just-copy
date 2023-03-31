<template>
  <div class="home">
    <router-link :to="{ name: 'btn' }">
      Btn
    </router-link>
    <p><router-link :to="{ name: 'exp' }">
      Express
    </router-link></p>
    <p><router-link :to="{ name: 'select' }">
      Select
    </router-link></p>
    <router-link :to="{ name: 'checkbox' }">
      Checkboxes
    </router-link>
    <p><router-link :to="{ name: 'tabs' }">
      Tabs
    </router-link></p>
  </div>
</template>
<script>
export default {
  name: 'HomeView'
}
</script>
