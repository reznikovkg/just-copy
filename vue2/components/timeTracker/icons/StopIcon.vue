<template>
  <svg @click="$emit('click')" viewBox="-1 0 8 8" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1m5 1v6a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0"
          fill="#dc3545" fill-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "StopIcon"
}
</script>

<style scoped lang="less">

</style>