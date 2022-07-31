<template>
    <Intro/>
    <Companies/>
    <ProServices/>
    <LatestJobs/>
</template>

<script>
    import {ref} from 'vue'
    import Intro from "../components/Main/Intro/Intro.vue";
    import Companies from "../components/Main/Companies/Companies.vue";
    import ProServices from "../components/Main/ProServices/ProServices.vue";
    import LatestJobs from "../components/Main/LatestJobs/LatestJobs.vue";

    export default {
        name: "Main",
        components: {LatestJobs, ProServices, Companies, Intro},
        setup() {}
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";
</style>