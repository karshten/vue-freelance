<template>
    <div class="latest-jobs__job">
        <img class="latest-jobs__job-img" :src="job.imgUrl" alt="job image">
        <h4 class="latest-jobs__job-title">{{job.name}}</h4>
        <p class="latest-jobs__job-workers">{{job.workersCount}} workers</p>
    </div>
</template>

<script>
    export default {
        name: "JobItem",
        props: ['job']
    }
</script>

<style scoped>
    @import "src/assets/scss/variables.scss";
</style>