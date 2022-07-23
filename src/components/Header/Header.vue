<template>
    <header class="header">
<!--        <SideBarButton @onShowSideBar="handleShowSideBar"/>-->
        <div class="header__content">
            <NavBar/>
            <Search/>
            <RegisterLink/>
            <button class="header__add-project-btn">
                <div class="header__add-project-btn__plus">+</div>
                Add project
            </button>
        </div>
    </header>
</template>

<script>
    import SideBarButton from "./SideBarButton.vue";
    import NavBar from "./NavBar.vue";
    import Search from "./Search.vue";
    import RegisterLink from "./Authorization.vue";

    export default {
        components: {SideBarButton, NavBar, Search, RegisterLink},
        name: "Header",
        setup(props, context) {
            const handleShowSideBar = () => {
                context.emit('onShowSideBar')
            }

            return {handleShowSideBar}
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/variables";

    .header {
        display: flex;
        align-items: center;
        padding: 25px 30px 25px 0;

        &__content {
            display: flex;
            max-width: 1260px;
        }

        &__add-project-btn {
            @include button(10px 22px);
            display: flex;
            white-space: nowrap;
            align-items: center;

            &__plus {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #fff;
                opacity: .5;
                color: $mid-light-blue;
                border-radius: 50%;
                margin-right: 9px;
                width: 16px;
                height: 16px;
                font-size: 12px;
                font-weight: 700;
            }
        }
    }
</style>