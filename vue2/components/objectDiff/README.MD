# ObjectDiff

Показывает разницу между объектами

___

## Props

|   name    |               Description               |      Type       | required | Default |
|:---------:|:---------------------------------------:|:---------------:|:--------:|:-------:|
| newObject |          New object to compare          | Object or Array |   Yes    |    —    |—        |
| oldObject |          Old object to compare          | Object or Array |   Yes    |    —    |
| excluded  | Fields names to exclude from comparison |      Array      |    No    |   []    |

___

## Basic usage

```vue

<template>
  <ObjectDiff :newObject="getNew" :oldObject="getOld" :excluded="getExcluded"/>
</template>

<script>
  import {mapGetters} from "vuex";
  import ObjectDiff from "../../../components/objectDiff/ObjectDiff.vue";

  export default {
    name: "ObjectDiffPage",
    components: {
      ObjectDiff
    },
    computed: {
      ...mapGetters("objectDiff", ["getOld", "getNew", "getExcluded"]),
    },
  }
</script>

<style scoped>
</style>
```

___

