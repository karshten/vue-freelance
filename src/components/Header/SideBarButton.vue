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
        top: 28px;
        left: 36px;

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

    .v-enter-active,
    .v-leave-active {
        transition: opacity .7s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    @media (max-width: 1200px) {
        .sidebar-btn {
            display: block;
        }
    }
</style>