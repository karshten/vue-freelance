<template>
    <div class="latest-jobs__job">
        <img class="latest-jobs__job-img" :src="job.imgUrl" alt="job image">
        <div class="latest-jobs__job-content">
            <router-link to="/" class="latest-jobs__job-title">{{job.name}}</router-link>
            <p class="latest-jobs__job-workers">{{job.workersCount}} workers</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JobItem",
        props: ['job']
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";

    .latest-jobs {

        &__job {
            position: relative;
        }

        &__job-content {
            position: absolute;
            top: 240px;
            left: 25%;
        }

        &__job-title {
            color: #fff;
            font-size: 16px;
            font-weight: 700;
        }

        &__job-workers {
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            opacity: .8;
        }

        &__job-img {
            height: 350px;
            border-radius: 15px;
            object-fit: cover;
        }
    }
</style>