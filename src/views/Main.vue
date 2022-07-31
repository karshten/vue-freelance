<template>
    <Intro/>
</template>

<script>
    import {ref} from 'vue'
    import Intro from "../components/Main/Intro/Intro.vue";

    export default {
        name: "Main",
        components: {Intro},
        setup() {}
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";
</style>