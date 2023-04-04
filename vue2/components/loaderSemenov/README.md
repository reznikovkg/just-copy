# Another Loader Component
## Purpose
##### This component is used to alert user that page or it's content is currently being loaded ~~`so user doesn't get bored`~~
+ This component takes up the entire page
+ This component consists of a `div` which contains `spinner image` and `text`
+ This component is compatible with any other componend which could call methods
+ This componend uses `Vue store` to store loader styles

## Usage
To add this component you need to import it to your page and add reference-methods
so your components could call thems

Then add `<Loader ref="laoderSemenov">` component to your page and you are good to go

If you want your page to start with active loader, you should add mounted action,
which activates your loader and stops it when page loading is complete
### Template Vue page
```vue
<<template>
    <div style="padding: 5px">
      <Loader ref="loaderSemenov" />
      <button :class="['loader__button']" @click="() => loaderStart('default')">
        Default
      </button>
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
    this.loaderStart("long");
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.loaderStop();
      }
    };
  },
};
</script>
```

## Loader in action
+ Default loader ![Image of a default loader](https://i.ibb.co/yB8rmCr/image.png)
+ Custom loader ![Image of a custom loader](https://i.ibb.co/5xXQxD3/image.png)
+ Another custom loader ![Image of a custom loader](https://i.ibb.co/JcM6zhB/image.png)