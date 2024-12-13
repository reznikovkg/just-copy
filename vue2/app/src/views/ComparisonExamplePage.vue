<template>
 <div class="comparison-example-page">
   <h1>Пример сравнения объектов</h1>
   <ObjectComparison
     :originalObject="originalObject"
     :newObject="newObject"
     :exceptions="exceptions"
     :showUnchanged="showUnchanged"
   />
 </div>
</template>

<script>
import ObjectComparison from '../../../components/ObjectComparison/ObjectComparison.vue'

export default {
 name: 'ComparisonExamplePage',
 components: {
   ObjectComparison
 },
 data () {
   return {
     originalObject: {
       name: 'John',
       about: 'test about',
       age: 30,
       description: '12345',
       city: 'New York'
     },
     newObject: {
       description: '1234sdnjdks',
       name: 'John',
       age: 31,
       country: 'USA'
     },
     exceptions: {
      age: true
     },
     showUnchanged: true
   }
 },
}
</script>

<style scoped>
.comparison-example-page {
 padding: 20px;
}
</style>