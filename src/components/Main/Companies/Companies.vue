<template>
    <div class="companies">
        <div class="container">
            <a target="_blank" :href="links[idx]" v-for="(item, idx) in companies">
                <img
                    class="companies__img"
                    :key="item" :src="item"
                    alt="company-name">
            </a>
        </div>
    </div>
</template>

<script>
    import {ref, computed} from 'vue'

    export default {
        name: "Companies",
        setup() {
            const companies = ref([
                'src/assets/images/Main/Google.png',
                'src/assets/images/Main/Facebook.png',
                'src/assets/images/Main/Apple.png',
                'src/assets/images/Main/Sony.png',
                'src/assets/images/Main/Dell.png',
                'src/assets/images/Main/Microsoft.png',
                'src/assets/images/Main/Canon.png',
                'src/assets/images/Main/Lenovo.png'
            ])

            const links = ref([
                'https://www.google.com/',
                'https://www.facebook.com/',
                'https://www.apple.com/',
                'https://www.sony.com/en/',
                'https://www.dell.com/ru-rs?c=kg&l=en&s=,gen&~ck=cr&redirect=1',
                'https://www.microsoft.com/en-us/windows/?r=1',
                'https://global.canon/en/index.html',
                'https://www.lenovo.com/in/en/?orgRef=https%253A%252F%252Fwww.google.com%252F',
            ])

            return {companies, links}
        }
    }
</script>

<style lang="scss" scoped>
    .companies {
        margin: 60px 0;

        & .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
        }
    }
</style>