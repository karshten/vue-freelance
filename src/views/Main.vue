<template>
    <section class="intro">
        <div class="container">
            <h1 class="intro__title">Find <span>Freelance</span> Services for Your Business</h1>
            <div class="intro__internal-title"><h2>FIND</h2></div>
            <img class="intro__home-img" src="src/assets/images/home-page.jpg" alt="home-image">
        </div>
    </section>
</template>

<script>
    export default {
        name: "Main",
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
            z-index: 2;
            position: absolute;

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
            max-width: 934px;
            position: absolute;
            right: 0;
            top: 0;
        }
    }
</style>