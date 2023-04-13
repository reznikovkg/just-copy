<template>
  <div class="section">
    <p align="center" style="font-size:30px">Some title</p>
      <Modal2 v-if="showModal" @close="toggleModal">
        <p align="center" style="color:black; font-size:30px">Modal 1</p>
        <p align="center" style="color:orangered; font-size:30px">Modal body 1</p>
      </Modal2>
      <Modal2 v-if="showModal2" @close="toggleModal2">
        <p align="center" style="color:black; font-size:30px">Modal 2</p>
        <p align="center" style="color:pink; font-size:30px">Modal body 2</p>
        <img src="https://i.pinimg.com/originals/5e/95/ab/5e95abd8a8140547e370499788821eba.jpg" alt="some nice photo" style="width:100%;"/>
      </Modal2>
    <p>Welcome...</p>
    <button @click.alt="toggleModal" @click.shift="toggleModal2">open modal (alt) (shift)</button>
  </div>
</template>


<script>
  import Modal2 from '../../../components/Modal2.vue'
  export default {
    components: {
      Modal2
    },
    data() {
        return {
            showModal: false,
            showModal2: false,
        }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      toggleModal2() {
        this.showModal2 = !this.showModal2
      },
    }
    
  };
</script>

<style>
  .section {
    color: #ffe96d;
    font-size: 24px;
    font-family:Arial, Helvetica, sans-serif;
    font-style: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: rgb(73, 209, 20) url("https://phonoteka.org/uploads/posts/2021-03/1616689580_28-p-krasivii-fon-dlya-shapki-32.jpg") center/cover no-repeat;
  }   
</style>
