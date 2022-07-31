<template>
    <section class="intro">
        <div class="container">
            <h1 class="intro__title">Find <span>Freelance</span> Services for Your Business</h1>
            <div class="intro__internal-title"><h2>FIND</h2></div>
            <img class="intro__home-img" src="../../../assets/images/home-page.jpg" alt="home-image">

            <div class="intro__search-content">
                <IntroSearch/>
                <div class="intro__tags">
                    <router-link :to="'/'">
                        <IntroTag v-for="tag in tags" :key="tag" :tag="tag"/>
                    </router-link>
                </div>
                <p class="intro__info">Expertly connects professionals and agencies to businesses seeking specialized
                    talent.</p>
            </div>
            <button class="intro__show-more-btn">Show More</button>
        </div>
    </section>
</template>

<script>
    import IntroTag from "./IntroTag.vue";
    import IntroSearch from "./IntroSearch.vue";
    import {ref} from "vue";

    export default {
        name: "Intro",
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

    @import "../../../assets/scss/variables";

    .intro {
        padding-top: 116px;
        position: relative;
        border-bottom: 4px solid #aaa9a9;
        border-radius: 0px 0px 900px 900px / 0px 0px 100px 100px;
        padding-bottom: 140px;

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
            top: 50px;
        }

        &__tags {
            margin: 30px 0 51px;
        }

        &__info {
            max-width: 257px;
            font-size: 12px;
            line-height: 20px;
            color: $text-light-blue;
            font-weight: 700;
        }

        &__show-more-btn {
            cursor: pointer;
            color: $text-blue;
            position: absolute;
            bottom: -25px;
            padding: 15px 33px;
            left: calc(50% - 136px / 2);
            background: #fff;
            box-shadow: 0px 10px 30px rgba(54, 61, 77, 0.05);
            border-radius: 30px;
            border: none;

            &:hover {
                padding: 13px 31px;
                border: 2px solid $text-blue;
            }
        }
    }
</style>