<template>
    <section class="intro">
        <div class="container">
            <h1 class="intro__title">Find <span>Freelance</span> Services for Your Business</h1>
            <div class="intro__internal-title"><h2>FIND</h2></div>
            <img class="intro__home-img" src="src/assets/images/home-page.jpg" alt="home-image">

            <div class="intro__search-content">
                <IntroSearch/>
                <div class="intro__tags">
                    <router-link :to="'/'">
                        <IntroTag v-for="tag in tags" :key="tag" :tag="tag"/>
                    </router-link>
                </div>
                <p class="intro__info">Expertly connects professionals and agencies to businesses seeking specialized talent.</p>
            </div>
        </div>
    </section>
</template>

<script>
    import IntroSearch from "../components/Intro/IntroSearch.vue";
    import IntroTag from "../components/Intro/IntroTag.vue";
    import {ref} from 'vue'

    export default {
        name: "Main",
        components: {IntroTag, IntroSearch},
        setup() {
            const tags = ref([
                "Voice Over",
                "Translation",
                "Logo Design"
            ])
            return {tags}
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";

    .intro {
        padding-top: 116px;
        position: relative;

        &__title {
            font-size: 48px;
            max-width: 553px;
            font-weight: 400;
            color: $mid-dark-blue;
            z-index: 1000;
            position: relative;

            & span {
                font-weight: 900;
            }
        }

        &__internal-title {
            max-width: 553px;
            top: 0;
            position: absolute;

            & h2 {
                font-size: 200px;
                color: #002881;
                opacity: 0.03;
            }
        }

        &__home-img {
            z-index: 1;
            max-width: 934px;
            position: absolute;
            right: 0;
            top: 100px;
        }

        &__tags {
            margin: 20px 0 51px;
        }

        &__info {
            max-width: 257px;
            font-size: 12px;
            line-height: 20px;
            color: $text-light-blue;
            font-weight: 700;
        }
    }
</style>