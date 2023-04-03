# Accordion Component:

![gif](./DocAssets/accordion.gif)

# Props:

| name           | type   | comments                                                                                        |
|----------------|--------|-------------------------------------------------------------------------------------------------|
| infoArrayIndex | Number | Index of this accordion instance. It's used to fetch the data for the accordion from the store. |

# Usage Example:

```
<template>
  <AccordionComponent :infoArrayIndex =0 />
  <AccordionComponent :infoArrayIndex =1 />
</template>

<script>
import AccordionComponent from '../../../components/accordion/AccordionComponent.vue'

export default {
  name: 'App',
  components: {
    AccordionComponent
  }
}
</script>
```
