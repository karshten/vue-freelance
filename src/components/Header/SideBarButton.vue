<template>
    <Transition>
        <div class="sidebar-btn">
            <button>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <label class="sidebar-btn__label">
                Constructor
            </label>
        </div>
    </Transition>
</template>

<script>
    export default {
        name: "SideBarButton",
        props: ['showSidebar']
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";

    .sidebar-btn {
        display: none;
        align-items: center;
        border-right: 2px solid #F2F3F5;
        padding-right: 45px;

        &__label {
            cursor: pointer;
            color: $low-dark-blue;
            font-weight: 700;
        }

        & button {
            margin-right: 36px;
            cursor: pointer;
            border: none;
            background-color: inherit;
        }

        & div {
            position: relative;
            margin-bottom: 4px;
            width: 22px;
            height: 2px;
            background-color: $text-light-blue;
        }
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity .7s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    @media (max-width: 1100px) {
        .sidebar-btn {
            display: block;
        }
    }

    @media (max-width: 970px) {
        .sidebar-btn {
            left: 20px;
        }
    }

    @media (max-width: 514px) {
        .sidebar-btn {
            top: 30px;
            left: 10px;
        }
    }

    @media (max-width: 375px) {
        .sidebar-btn {
            top: 30px;
            left: 5px;
        }
    }

    .mainHeader .mainSideBarBtn {
        display: flex;
    }
</style>