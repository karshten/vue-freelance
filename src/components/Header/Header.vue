<template>
    <header class="header">
        <div class="header__content">
            <NavBar class="header__navbar"/>
            <Search/>
            <RegisterLink/>
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

    export default {
        components: {SideBarButton, NavBar, Search, RegisterLink},
        name: "Header",
        setup(props, context) {
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/variables";

    .header {
        background-color: #fff;
        padding: 25px 30px;

        &__content {
            display: flex;
            max-width: 1260px;
        }

        &__add-project-btn {
            @include button(10px 22px);
            display: flex;
            white-space: nowrap;
            align-items: center;
            justify-content: center;

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

    @media (max-width: 1180px) {
        .header {

            &__add-project-btn {
                padding: 12px;

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

    @media (max-width: 1080px) {
        .header {
            padding: 25px 0;
        }
    }

    @media (max-width: 970px) {
        .header {
            display: block;
            padding: 25px 0;

            &__content {
                justify-content: space-between;
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

                &__plus {
                    font-size: 20px;
                }
            }
        }
    }
</style>