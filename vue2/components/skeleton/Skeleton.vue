<template>
  <div
    class="Skeleton"
    :style="style"
  />
</template>

<script>
export default {
    name: "Skeleton",
    props: ["shape", "width", "height", "size", "borderRadius"],
    computed:{
        style(){
            let styleString = ""
            if(this.size !== undefined){
                styleString = `width: ${this.size}; height: ${this.size};`
            }
            else{
                if(this.width !== undefined){
                    styleString = `width: ${this.width};`
                }
                if(this.height !== undefined){
                    styleString = `${styleString} height: ${this.height};`
                }
            }
            if(this.borderRadius !== undefined){
                styleString = `${styleString} border-radius: ${this.borderRadius};`
            }
            if(this.shape !== undefined){
                let addition = "";
                switch (this.shape){
                    case "circle":{
                       addition = `border-radius: 50%;`
                    }
                }
                styleString = `${styleString} ${addition}`
            }
            return styleString
        },
    },
}
</script>

<style lang="less">
  @import "styles/style.less";
</style>