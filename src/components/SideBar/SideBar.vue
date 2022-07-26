<template>
    <Transition name="side">
        <aside v-if="showSidebar" class="sidebar">
            <NavBar :isNavbarOpen="isNavbarOpen" class="sidebar__navbar"/>
            <TopButtons @clickNavbar="handleOpenNavrbar"/>
            <AccountInfo/>
            <MenuList/>
            <SkillsList/>
        </aside>
    </Transition>
</template>

<script>
    import TopButtons from "./TopButtons.vue";
    import AccountInfo from "./AccountInfo.vue";
    import ItemMenu from "./ItemMenu.vue";
    import ItemSkill from "./ItemSkill.vue";
    import MenuList from "./MenuList.vue";
    import SkillsList from "./SkillsList.vue";
    import NavBar from "../Header/NavBar.vue";
    import {ref, onMounted, onUnmounted} from 'vue'

    export default {
        name: "SideBar",
        props: ['showSidebar'],
        components: {NavBar, SkillsList, MenuList, ItemSkill, ItemMenu, AccountInfo, TopButtons},
        setup() {
            const isNavbarOpen = ref(false)

            onMounted(() => {
                console.log('dasdas')
                isNavbarOpen.value = false
            })

            const handleOpenNavrbar = () => {
                isNavbarOpen.value = !isNavbarOpen.value
            }

            return {isNavbarOpen, handleOpenNavrbar}
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables.scss";

    .sidebar {
        padding: 35px 20px;
        z-index: 100;
        background-color: $high-dark-blue;
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
            position: fixed;
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