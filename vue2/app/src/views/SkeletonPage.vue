<template>
  <div>
    <div>
      <h1>Shapes</h1>
      <div style="display: flex">
        <div style="width: 40vw">
        <h3>Rectangle</h3>
        <Skeleton class="mb-2"></Skeleton>
        <Skeleton width="10rem" class="mb-2"></Skeleton>
        <Skeleton width="5rem" class="mb-2"></Skeleton>
        <Skeleton height="2rem" class="mb-2"></Skeleton>
        <Skeleton width="10rem" height="4rem"></Skeleton>
        </div>
        <div style="width: 10vw"></div>
        <div style="width: 40vw">
        <h3>Rounded</h3>
        <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
        <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
        <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
        <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
        <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
        </div>
      </div>
      <div style="display: flex">
        <div style="width: 40vw">
          <h3 class="mt-4">Square</h3>
          <div style="display: flex">
            <Skeleton size="2rem" class="mr-2"></Skeleton>
            <Skeleton size="3rem" class="mr-2"></Skeleton>
            <Skeleton size="4rem" class="mr-2"></Skeleton>
            <Skeleton size="5rem"></Skeleton>
          </div>
        </div>
        <div style="width: 10vw"></div>
        <div style="width: 40vw">
          <h3 class="mt-4">Circle</h3>
          <div style="display: flex">
            <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
            <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <Skeleton shape="circle" size="5rem"></Skeleton>
          </div>
        </div>
      </div>
    </div>

    <h1>Card</h1>
    <div style="border: gray 2px solid; padding: 50px; max-width: 600px">
      <div style="display: flex" class="mb-4">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
          <Skeleton height=".5rem"></Skeleton>
        </div>
      </div>
      <Skeleton width="100%" height="150px"></Skeleton>
      <div style="display: flex; justify-content: space-between" class="mt-4">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
      </div>
    </div>

    <h1>List</h1>
    <div style="max-width: 600px">
      <ul style="list-style-type: none">
        <li class="mb-4">
          <div style="display: flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
              <div style="flex: 1; align-self: center">
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
              </div>
          </div>
        </li>
        <li class="mb-4">
          <div style="display: flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
              <div class="self-center" style="flex: 1">
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
              </div>
          </div>
        </li>
        <li class="mb-4">
          <div style="display: flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <div class="self-center" style="flex: 1">
              <Skeleton width="100%" class="mb-2"></Skeleton>
              <Skeleton width="75%"></Skeleton>
            </div>
          </div>
        </li>
        <li>
          <div style="display: flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <div class="self-center" style="flex: 1">
              <Skeleton width="100%" class="mb-2"></Skeleton>
              <Skeleton width="75%"></Skeleton>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import Skeleton from "../../../components/skeleton/Skeleton.vue";

export default {
    name: "SkeletonPage",
    components: { Skeleton },
}
</script>

<style lang="less">
  @import "../../../components/skeleton/styles/style.less";
</style>