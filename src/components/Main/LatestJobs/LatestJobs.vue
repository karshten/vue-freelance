<template>
    <section class="latest-jobs">
        <div class="container">
            <h2 class="latest-jobs__title">Latest Most <span>Popular</span> Jobs</h2>
            <div class="latest-jobs__internal-title"><h2>POPULAR</h2></div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "LatestJobs"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";

    .latest-jobs {

        & .container {
            position: relative;
        }

        &__title {
            padding: 65px 47px;
            color: $mid-dark-blue;
            font-size: 24px;
            font-weight: 600;

            & span {
                font-weight: 900;
            }
        }

        &__internal-title {
            position: absolute;
            top: 0;

            & h2 {
                font-size: 120px;
                font-weight: 800;
                color: #002881;
                opacity: 0.3;
            }
        }
    }
</style>