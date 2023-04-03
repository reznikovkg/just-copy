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
    <router-link :to="{name:'notifications'}">
      Notification
    </router-link>
    <p><router-link :to="{ name: 'progress' }">
      Progress
    </router-link></p>
    <p><router-link :to="{ name: 'tabs' }">
      Tabs
    </router-link></p>
    <p><router-link :to="{ name: 'modal' }">
      Modal
    </router-link></p>
    <p><router-link :to="{ name: 'modal2' }">
      Modal2
    </router-link></p>
    <p><router-link :to="{ name: 'loader' }">
      Loader
    </router-link></p>
    <p><router-link :to="{ name: 'progressAn' }">
      Progress 2
    </router-link></p>
    <router-link :to="{ name: 'accordion' }">
      Accordion
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeView'
}
</script>
