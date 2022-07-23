<template>
    <div class="wrapper">
        <SideBar :showSideBar="showSideBar"/>
        <div class="wrapper__content">
            <Header @onShowSideBar="showSideBar = true"/>
            <main>
                <div class="container">
                    <RouterView/>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header/Header.vue";
    import SideBar from "./components/SideBar/SideBar.vue";
    import {ref} from "vue"

    export default {
        components: {SideBar, Header},
        setup(props, context) {
            const showSideBar = ref(true)
            return {showSideBar}
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;

        &__content {
            margin-left: 75px;
        }
    }
</style>
