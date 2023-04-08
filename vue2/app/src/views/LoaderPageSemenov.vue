<template>
  <div>
    <h1>Loaders:</h1>
    <div style="padding: 5px">
      <Loader ref="loaderSemenov" />
      <button class="loader__button" @click="() => loaderStart('default')">
        Default
      </button>
      <Loader ref="loader" />
      <button class="loader__button" @click="() => loaderStart('fav')">
        Der Frosch
      </button>
      <Loader ref="loader" />
      <button class="loader__button" @click="() => loaderStart('long')">
        Long Loading
      </button>
    </div>
    <div> 
      <img class="basic-image" src="https://images.wallpaperscraft.ru/image/single/pirs_gory_ozero_119190_3840x2400.jpg">
      <img class="basic-image" src="https://besthqwallpapers.com/Uploads/7-3-2021/159866/alps-evening-sunset-rocks-mountain-landscape.jpg">
      <img class="basic-image" src="https://w.wallhaven.cc/full/83/wallhaven-83ydmj.jpg">
      <img class="basic-image" src="https://mobimg.b-cdn.net/v3/fetch/a6/a690187c5de9495aba0ceb85d9c1eefd.jpeg">
    </div>
  </div>
</template>
    
<script>
import Loader from "../../../components/loaderSemenov/LoaderSemenov.vue";
export default {
  name: "LoaderPage",
  components: {
    Loader,
  },
  methods: {
    loaderStart(loaderStyle) {
      this.$refs.loader.loaderStart(loaderStyle);
    },
    loaderStop() {
      this.$refs.loader.loaderStop();
    },
  },
  mounted() {
    if(document.readyState != 'complete')
      this.loaderStart("long");

    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.loaderStop();
      }
    };
  },
};
</script>