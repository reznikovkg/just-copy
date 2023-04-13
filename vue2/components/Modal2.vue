<template>
    <div class="modal" @click.self="closeModal">
        <div class="modal__body">
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="less" scoped>
    .modal {
        top: 0;
        left: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        &__body {
        width: 600px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        }
        &__body h1 {
            color: #03cfb4;
            border: none;
            padding: 0;
        } 
        
    }
    .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: rgb(73, 209, 20) url("https://phonoteka.org/uploads/posts/2021-03/1616689580_28-p-krasivii-fon-dlya-shapki-32.jpg") center/cover no-repeat;
    }   
</style>
