<template>
    <div class="wrapper">
        <div class="wrapper__sidebar">
            <SideBar
                    :showSideBar="showSideBar"
            />
        </div>
        <SideBarButton @click="handleClickSideBar(true)"/>
        <div @click="handleClickSideBar(false)" class="wrapper__content">
            <Header/>
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
    import {ref, onMounted, computed} from "vue"
    import SideBarButton from "./components/Header/SideBarButton.vue";
    import {useRoute} from "vue-router";

    export default {
        components: {SideBarButton, SideBar, Header},
        setup(props, context) {

            const route = useRoute()
            const path = computed(() => route.path)

            const showSideBar = ref(null)

            onMounted(() => {
                setTimeout(() => showSideBar.value =
                    // path.value !== '/' &&
                    innerWidth > 1080
                )
            })

            const handleClickSideBar = (boolean) => {
                innerWidth > 1080 ? null : showSideBar.value = boolean
            }

            return {showSideBar, handleClickSideBar, path}
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        background: #E4E7F0;

        &__content {
            margin: 0 auto;
        }

        &__sidebar {
            width: 340px;
        }
    }

    @media (max-width: 1366px) {
        .sidebar {
            width: 300px;
        }
    }

    @media (max-width: 1280px) {
        .sidebar {
            width: 260px;
        }
    }
</style>
