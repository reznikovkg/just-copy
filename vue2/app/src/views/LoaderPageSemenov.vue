<template>
  <div>
    <Loader ref="loaderSemenov" />
    <div class="outer-div">
      <div class="database-div" style="width: 75%">
        <div class="user-div" v-for="(element, index) in getItems" :key="index">
          <p class="user-login">@{{ element.login }}</p>
          <p class="user-name"> {{ element.username }}</p>
          <hr>
          <p class="user-status">{{ element.status }}</p>
        </div>
      </div>
      <div class="buttons-div">
        <button class="loader__button" @click="fetchDB">
          Refresh DB
        </button>
      </div>
    </div>
    <h1>Loaders:</h1>
    <div style="padding: 5px">
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
import { mapGetters, mapActions } from "vuex";
import Loader from "../../../components/loaderSemenov/LoaderSemenov.vue";
export default {
  name: "LoaderPage",
  components: {
    Loader,
  },
  mounted() {
    if(document.readyState != 'complete')
      this.loaderStart("indefinite");

    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.loaderStop();
      }
    };
  },
  computed:
  {
    ...mapGetters("expressDb", [
      "getItems",
      "getState", 
    ]),
    dbIsLoaded() {
      if (this.getState)
        this.loaderStop()
      return true
    }
  },
  methods: {
    ...mapActions("expressDb", [
      "loadItems",
    ]),
    loaderStart(loaderStyle) {
      this.$refs.loader.loaderStart(loaderStyle);
    },
    loaderStop() {
      this.$refs.loader.loaderStop();
    },
    async fetchDB() {
      this.$refs.loader.$data.showStopBtn = false;
      this.loaderStart("indefinite");
      await this.loadItems();
      this.loaderStop();
      this.$refs.loader.$data.showStopBtn = true;
    }
  },
};
</script>