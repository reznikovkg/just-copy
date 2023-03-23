<template>
  <div class="about">
    <h1>BTN</h1>
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
      {{ getCount }}
      {{ getCountD }}
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../../../components/button/Button.vue'
import InputComponent from '../../../components/input/Input.vue'

export default {
  name: 'BtnView',
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
