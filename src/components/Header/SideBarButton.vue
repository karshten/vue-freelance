<template>
    <Transition>
        <div class="sidebar-btn">
            <button>
                <div></div>
                <div></div>
                <div></div>
            </button>
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
        position: fixed;
        top: 34px;
        left: 36px;

        & button {
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

    @media (max-width: 1080px) {
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
</style>