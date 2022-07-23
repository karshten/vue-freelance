<template>
    <Transition>
        <aside v-if="showSideBar" class="wrapper-bar">
            <div class="sidebar">
                <TopButtons/>
                <AccountInfo/>
                <MenuList/>
                <SkillsList/>
            </div>
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

    export default {
        name: "SideBar",
        props: ['showSideBar'],
        components: {SkillsList, MenuList, ItemSkill, ItemMenu, AccountInfo, TopButtons},
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables.scss";

    .wrapper-bar {
        width: 300px;
        height: 1px;
    }

    .sidebar {
        padding: 35px 20px;
        z-index: 100;
        background-color: $high-dark-blue;
        width: 300px;
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
</style>