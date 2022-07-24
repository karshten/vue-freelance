<template>
    <Transition>
        <aside v-if="showSideBar" class="sidebar">
            <TopButtons/>
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
    import {useRoute} from "vue-router";

    export default {
        name: "SideBar",
        props: ['showSideBar'],
        components: {SkillsList, MenuList, ItemSkill, ItemMenu, AccountInfo, TopButtons},
        setup() {

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
        height: 100vh;
        position: fixed;
        top: 0;
        overflow: auto;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
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