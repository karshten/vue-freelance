<template>
    <Transition>
        <div v-if="showSideBar" class="sidebar">
            <TopButtons/>
            <AccountInfo/>
            <ul class="menu-list">
                <li><ItemMenu v-for="item in menuItems" :svg="item.svg" :title="item.title"/></li>
            </ul>
            <ItemSkill/>
        </div>
    </Transition>
</template>

<script>
    import TopButtons from "./TopButtons.vue";
    import AccountInfo from "./AccountInfo.vue";
    import ItemMenu from "./ItemMenu.vue";
    import ItemSkill from "./ItemSkill.vue";

    export default {
        name: "SideBar",
        props: ['showSideBar'],
        components: {ItemSkill, ItemMenu, AccountInfo, TopButtons},

        setup(props) {
            const menuItems = [
                {
                    title: 'My information',
                    svg: 'src/assets/icons/side-menu-iconsw/User.svg',
                },
                {
                    title: 'Billing Methods',
                    svg: 'src/assets/icons/side-menu-iconsw/Billing.svg',
                },
                {
                    title: 'Password & Security',
                    svg: 'src/assets/icons/side-menu-iconsw/Password.svg',
                },
                {
                    title: 'Notifications',
                    svg: 'src/assets/icons/side-menu-iconsw/Notifications.svg',
                }
            ]
            return {menuItems}
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables.scss";

    .sidebar {
        padding: 35px 20px;
        z-index: 100;
        background-color: $high-dark-blue;
        width: 300px;
        min-height: 100vh;
        position: fixed;
        overflow: auto;

        & .menu-list {
            margin-bottom: 53px;
            padding-bottom: 53px;
            border-bottom: 2px solid #26334D;
        }
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