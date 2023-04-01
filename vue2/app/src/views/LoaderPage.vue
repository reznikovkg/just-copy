<template>
  <div>
    <h1>Loaders:</h1>
    <div>
      <p>Loader без параметров</p>
      <Loader></Loader>
      <br />
      <br />
      <Loader loaderStyle="red"></Loader>
      <Loader loaderStyle="long"></Loader>
      <Loader loaderStyle="wide"></Loader>
      <Loader loaderStyle="rus"></Loader>
      <Loader loaderStyle="blank"></Loader>
      <Loader loaderStyle="fav"></Loader>
    </div>
  </div>
</template>
    
<script>
import Loader from "../../../components/loader/Loader.vue";
export default {
  name: "LoaderPage",
  components: {
    Loader,
  },
};
</script>
