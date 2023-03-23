<template>
  <div id="app">
    <div>
      <ButtonComponent @click="() => click()" >
        Confirm
      </ButtonComponent>

      <ButtonComponent @click="() => click()" size="small" >
        Confirm
      </ButtonComponent>

      <ButtonComponent @click="() => click()" size="large" >
        Confirm
      </ButtonComponent>

      <ButtonComponent @click="() => click()" type="warning" >
        Warning
      </ButtonComponent>

      <ButtonComponent @click="() => click()" type="success">
        Success
      </ButtonComponent>

      <ButtonComponent @click="() => click()" type="error">
        Error
      </ButtonComponent>
    </div>
    <div>
      <InputComponent v-model="text" />
      {{ text }}
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/checkbox"> Checkbox and switch</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import ButtonComponent from './../../components/button/Button.vue'
import InputComponent from './../../components/input/Input.vue'
export default {
  name: 'App',
  components: {
    ButtonComponent,
    InputComponent
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    click () {
      alert('The button was clicked')
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
