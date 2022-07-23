<template>
    <ul class="sidebar">
        <li class="sidebar__button">
            <button>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </li>
        <li class="sidebar__label">Constructor</li>
    </ul>
</template>

<script>
    export default {
        name: "SideBarButton"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";

    .header {
        & .sidebar {
            display: flex;
            align-items: center;

            &__button {
                & button {
                    padding-top: 10px;
                    cursor: pointer;
                    border: none;
                }

                & div {
                    position: relative;
                    margin-bottom: 4px;
                    width: 22px;
                    height: 2px;
                    background-color: $text-light-blue;
                }
            }

            &__label {
                margin-left: 30px;
                color: $mid-dark-blue;
                font-size: 18px;
                font-weight: 700;
            }
            @media (max-width: 1350px) {
                .sidebar__label {
                    display: none;
                }
            }
        }
    }
</style>