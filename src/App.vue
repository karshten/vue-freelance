<template>
    <div class="wrapper">
        <SideBar
                :showSidebar="showSideBar"
        />
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
        setup() {

            const route = useRoute()
            const path = computed(() => route.path)

            const showSideBar = ref(false)


            onMounted(() => {
                setTimeout(() =>
                    showSideBar.value =
                        // path.value !== '/' &&
                        innerWidth > 1100
                )
            })

            const handleClickSideBar = (boolean) => {
                innerWidth > 1100 ? null : showSideBar.value = boolean
            }

            return {showSideBar, handleClickSideBar, path}
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        background: #FAFBFC;

        &__content {
            margin: 0 auto;

            & main {
                padding-left: 30px;
            }
        }
    }

    @media (max-width: 1100px) {
        .wrapper {
            &__content {
                margin: 0 auto;

                & main {
                    padding: 0;
                }
            }

            &__sidebar {
                width: 0;
            }
        }
    }

    @media (max-width: 375px) {
        .wrapper {

            &__content {
                padding: 0 40px;
            }
        }
    }
</style>
