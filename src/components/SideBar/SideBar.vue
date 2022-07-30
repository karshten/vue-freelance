<template>
    <Transition name="side">
        <aside v-if="showSidebar && !isValidPage" class="sidebar">
            <div @click="handelCloseSidebar" class="sidebar__close-btn"></div>
            <NavBar
                    @closeNavbar="handleToggleNavrbar(false)"
                    :isNavbarOpen="isNavbarOpen" class="sidebar__navbar"/>

            <TopButtons
                    @toggleNavbar="handleToggleNavrbar(!isNavbarOpen)"/>

            <AccountInfo/>
            <MenuList/>
            <SkillsList/>
        </aside>
    </Transition>
</template>

<script>
    import TopButtons from "./TopButtons.vue";
    import AccountInfo from "./AccountInfo.vue";
    import MenuList from "./MenuList.vue";
    import SkillsList from "./SkillsList.vue";
    import NavBar from "../Header/NavBar.vue";
    import {ref, computed, onMounted} from 'vue'
    import {useRoute} from "vue-router";

    export default {
        name: "SideBar",
        props: ['showSidebar'],
        components: {NavBar, SkillsList, MenuList, AccountInfo, TopButtons},
        setup(props, context) {
            const isNavbarOpen = ref(false)

            const handleToggleNavrbar = (boolean) => {
                isNavbarOpen.value = boolean
            }

            const handelCloseSidebar = () => {
                context.emit('closeSidebar')
            }

            const route = useRoute()
            const path = computed(() => route.path)
            const invalidPathsForSideBar = ['/signUp', '/signIn']
            const isValidPage = computed(() => invalidPathsForSideBar.some(itemPath => path.value === itemPath))

            return {isNavbarOpen, handleToggleNavrbar, isValidPage, handelCloseSidebar}
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables.scss";

    .sidebar {
        display: none;
        padding: 35px 20px;
        z-index: 100;
        background-color: $high-dark-blue;
        min-width: 260px;
        width: 340px;
        min-height: 100vh;
        overflow: auto;

        &__navbar {
            display: none;
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

    @media (max-width: 1100px) {
        .sidebar {
            width: 340px;
            position: absolute;
            top: 0;
        }
    }

    @media (max-width: 970px) {
        .sidebar {

            &__navbar {
                display: block;
            }
        }
    }

    @media (max-width: 768px) {
        .sidebar {
            left: 0;
            width: 100%;

            &__close-btn {
                cursor: pointer;
                position: absolute;
                right: 10px;
                top: 0;
                width: 25px;
                height: 25px;

                &:before, &:after {
                    position: absolute;
                    left: 15px;
                    content: ' ';
                    height: 33px;
                    width: 2px;
                    background-color: #fff;
                }

                &:before {
                    transform: rotate(45deg);
                }

                &:after {
                    transform: rotate(-45deg);
                }
            }

            &__navbar {
                display: block;
            }
        }
    }

    .side-enter-active,
    .side-leave-active {
        transition: all .6s ease-in-out;
    }

    .side-enter-from,
    .side-leave-to {
        transform: translateX(-1000px);
    }

    .side-enter-to {
        transform: translateX(0);
    }
</style>