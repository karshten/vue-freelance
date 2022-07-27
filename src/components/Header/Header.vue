<template>
    <header :class="{mainHeader: isMain}" v-if="!isValidPage" class="header">
        <div class="header__content">
            <SideBarButton @click="handelOpenSidebar"/>
            <NavBar :is-navbar-open="true" class="header__navbar"/>
            <Search/>
            <RegisterLink :is-main="isMain"/>
            <button class="header__add-project-btn">
                <div class="header__add-project-btn__plus">+</div>
                <span>Add project</span>
            </button>
        </div>
    </header>
</template>

<script>
    import SideBarButton from "./SideBarButton.vue";
    import NavBar from "./NavBar.vue";
    import Search from "./Search.vue";
    import RegisterLink from "./Authorization.vue";
    import {computed} from 'vue'
    import {useRoute} from "vue-router";

    export default {
        components: {SideBarButton, NavBar, Search, RegisterLink},
        name: "Header",
        props: ['isMain'],
        setup(props, context) {

            const route = useRoute()
            const path = computed(() => route.path)
            const invalidPathsForSideBar = ['/signUp', '/signIn']
            const isValidPage = computed(() => invalidPathsForSideBar.some(itemPath => path.value === itemPath))

            const handelOpenSidebar = () =>{
                context.emit('openSidebar')
            }
            return {isValidPage, handelOpenSidebar}
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/variables";

    .header {
        background: #fff;
        padding: 25px 30px;

        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__add-project-btn {
            @include button(10px 22px);
            display: flex;
            white-space: nowrap;
            align-items: center;
            justify-content: center;
            margin-left: 45px;

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

    .mainHeader .header__content {
        max-width: 1360px;
    }

    @media (max-width: 1180px) {
        .header {

            &__add-project-btn {
                padding: 12px;
                margin-left: 25px;

                &__plus {
                    margin: 0;
                    background-color: inherit;
                    color: #fff;
                    font-size: 24px;
                    font-weight: normal;
                }

                & span {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 1100px) {
        .header, .mainHeader {

            &__content {
                max-width: 1024px;
            }

            &__add-project-btn {
                margin-left: 0;
            }
        }
    }

    @media (max-width: 970px) {
        .header {
            display: block;

            &__content {
                justify-content: space-between;
            }

            &__add-project-btn {
                margin-left: 20px;
            }

            &__navbar {
                display: none;
            }
        }
    }

    @media (max-width: 514px) {
        .header {

            &__add-project-btn {
                padding: 6px;
                margin-left: 10px;

                &__plus {
                    font-size: 20px;
                }
            }
        }
    }
</style>