<template>
    <ul class="menu-list">
        <ItemMenu
                v-for="item in menuItems"
                :key="item.title"
                :title="item.title"
                :svg="item.svg"/>
    </ul>
</template>

<script>
    import ItemMenu from "./ItemMenu.vue";

    export default {
        components: {ItemMenu},
        setup() {
            const menuItems = [
                {
                    title: 'My information',
                    svg: 'src/assets/icons/side-menu-icons/User.svg',
                },
                {
                    title: 'Billing Methods',
                    svg: 'src/assets/icons/side-menu-icons/Billing.svg',
                },
                {
                    title: 'Password & Security',
                    svg: 'src/assets/icons/side-menu-icons/Password.svg',
                },
                {
                    title: 'Notifications',
                    svg: 'src/assets/icons/side-menu-icons/Notifications.svg',
                }
            ]
            return {menuItems}
        }
    }
</script>

<style scoped>
    .menu-list {
        margin-bottom: 53px;
        padding-bottom: 53px;
        border-bottom: 2px solid #26334D;
    }
</style>