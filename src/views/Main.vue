<template>
    <Intro/>
    <Companies/>
</template>

<script>
    import {ref} from 'vue'
    import Intro from "../components/Main/Intro/Intro.vue";
    import Companies from "../components/Main/Companies/Companies.vue";

    export default {
        name: "Main",
        components: {Companies, Intro},
        setup() {}
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";
</style>