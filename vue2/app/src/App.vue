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
    body {
        padding: 0;
        margin: 0;
    }
</style>
