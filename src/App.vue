<template>

    <Header/>
    <div class="container">
        <RouterView/>
    </div>
</template>

<script>
    import Header from "./components/Header/Header.vue";

    export default {
        components: {Header}
    }
</script>

<style scoped>

</style>
