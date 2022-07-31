<template>
    <div class="companies">
        <div class="container">
            <img class="companies__img" v-for="item in companies" :key="item" :src="item" alt="company-name">
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'

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

            return {companies}
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

        &__img {

        }
    }
</style>