<template>
    <SideBar :showSideBar="showSideBar"/>
    <Header @onShowSideBar="showSideBar = true"/>
    <main @click="showSideBar = false">
        <div class="container">
            <RouterView/>
        </div>
    </main>
</template>

<script>
    import Header from "./components/Header/Header.vue";
    import SideBar from "./components/SideBar/SideBar.vue";
    import {ref} from "vue"

    export default {
        components: {SideBar, Header},
        setup() {
            const showSideBar = ref(false)
            return {showSideBar}
        }
    }
</script>

<style scoped>
</style>
