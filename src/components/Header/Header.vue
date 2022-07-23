<template>
    <header class="header">
        <SideBarButton/>
        <NavBar/>
        <Search/>
        <RegisterLink/>
        <button class="header__add-project-btn"><div class="header__add-project-btn__plus">+</div>Add project</button>
    </header>
</template>

<script>
    import SideBarButton from "./SideBarButton.vue";
    import NavBar from "./NavBar.vue";
    import Search from "./Search.vue";
    import RegisterLink from "./Authorization.vue";
    export default {
        components:{SideBarButton, NavBar, Search, RegisterLink},
        name: "Header",
    }
</script>

<style lang="scss">
    @import "../../assets/scss/variables";

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25px 30px;

        &__add-project-btn {
            @include button(10px 22px);
            display: flex;
            
            &__plus {
                padding-top: 1px;
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