<template>
    <div class="wrapper" :class="{mainWrapper:isMainPage}">
        <SideBar
                @closeSidebar="handleToggleSideBar(false)"
                :showSidebar="showSideBar"
                :class="{mainSideBar: isMainPage}"
        />
        <div class="wrapper__content">
            <Header :is-main="isMainPage" @openSidebar="handleToggleSideBar(true)"/>
            <main @click="handleToggleSideBar(false)">
                <RouterView/>
            </main>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header/Header.vue";
    import SideBar from "./components/SideBar/SideBar.vue";
    import {onMounted, ref, computed} from "vue"
    import SideBarButton from "./components/Header/SideBarButton.vue";
    import {useRoute} from "vue-router";

    export default {
        components: {SideBarButton, SideBar, Header},
        setup() {

            const route = useRoute()
            const showSideBar = ref(false)
            const path = computed(() => route.path)
            const isMainPage = ref(path.value === '/')

            onMounted(() => {
                showSideBar.value = path.value !== '/' && innerWidth > 1100
            })

            const handleToggleSideBar = (boolean) => {
                innerWidth > 1100 ? null : showSideBar.value = boolean
            }

            return {showSideBar, handleToggleSideBar, route, isMainPage}
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        margin: 0 auto;
        max-width: 1600px;
        display: flex;

        &__content {

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

    .mainWrapper {
        display: block;

        & .mainSideBar {
            position: absolute;
            top: 0;
        }
    }
</style>
