<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    body, h1, p {
        padding: 0;
        margin: 0;
    }
    div#app {
      height: 100vh;
    }
</style>
