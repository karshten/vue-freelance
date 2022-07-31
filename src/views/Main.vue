<template>
    <Intro/>
    <Companies/>
    <ProServices/>
</template>

<script>
    import {ref} from 'vue'
    import Intro from "../components/Main/Intro/Intro.vue";
    import Companies from "../components/Main/Companies/Companies.vue";
    import ProServices from "../components/Main/ProServices/ProServices.vue";

    export default {
        name: "Main",
        components: {ProServices, Companies, Intro},
        setup() {}
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";
</style>