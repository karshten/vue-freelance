<template>
    <div class="wrapper">
        <SideBar
                @closeSidebar="handleToggleSideBar(false)"
                :showSidebar="showSideBar"
        />
        <div class="wrapper__content">
            <Header :is-main="route.path === '/'" @openSidebar="handleToggleSideBar(true)"/>
            <main @click="handleToggleSideBar(false)">
                <RouterView/>
            </main>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header/Header.vue";
    import SideBar from "./components/SideBar/SideBar.vue";
    import {ref} from "vue"
    import SideBarButton from "./components/Header/SideBarButton.vue";
    import {useRoute} from "vue-router";

    export default {
        components: {SideBarButton, SideBar, Header},
        setup() {

            const route = useRoute()
            const showSideBar = ref(innerWidth > 1100)

            const handleToggleSideBar = (boolean) => {
                innerWidth > 1100 ? null : showSideBar.value = boolean
            }

            return {showSideBar, handleToggleSideBar, route}
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        margin: 0 auto;
        max-width: 1600px;
        display: flex;

        &__content {
            margin: 0 auto;

            & main {
                padding-left: 30px;
            }
        }
    }

    @media (max-width: 1100px) {
        .wrapper {
            display: block;

            &__content {
                margin: 0 auto;

                & main {
                    padding: 0;
                }
            }
        }
    }

    @media (max-width: 375px) {
        .wrapper {

            &__content main {
                padding: 0 20px;
            }
        }
    }
</style>
