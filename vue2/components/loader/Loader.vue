<template>
<div style="padding: 5px">   
    <button
    :class="['loader__button']" @click="() => loaderStart(loaderStyle)"
    :style="{ backgroundColor: loader[loaderStyle].buttonColor, width: loader[loaderStyle].buttonWidth + 'px', height: loader[loaderStyle].buttonHeight + 'px' }"
    >
    {{ loader[loaderStyle].buttonText }}
    </button>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'Loader',
    props: {
        loaderStyle: {
            type: String,
            default: 'default'
        }
    },
    computed:
    {
    ...mapGetters('loaders', [
        'getLoaders',
    ]),
    loader() {
        return this.getLoaders
        }
    },
    methods:
    {
        ...mapActions('loaders', [
            'addLoader',
        ]),
        loaderStart(loaderName)
        {
            const loader = this.getLoaders[loaderName];
            let loaderDiv = document.querySelector('.loader__div');
            if (!loaderDiv)
            {
                loaderDiv = document.createElement('div');
                loaderDiv.classList.add('loader__div');
                document.body.appendChild(loaderDiv);
            }       

            loaderDiv.innerHTML =
            `
                <img src="${loader.loaderImage}" class="loader__image"/>
                <p class="loader__text">${loader.loaderText}</p>
            `;

            loaderDiv.style.display = 'flex';

            const loaderImage = loaderDiv.querySelector('img');
            loaderImage.classList.add('spinning');

            setTimeout(() =>
            {
                loaderDiv.style.display = 'none';
                loaderImage.classList.remove('spinning');
            }, loader.loaderDuration * 1000); // Convert duration from seconds to milliseconds
        }
    }
}
</script>

<style lang="less">
    @import "styles/styles.less";
</style>
