<template>
    <router-link
            @mouseenter="handleHover"
            @mouseleave="handleLeave"
            to="/"
            class="menu-list__item"
            :class="{hover: isHover}">
        <div class="menu-list__item__icon">
            <img :src="svg" alt="icon">
        </div>
        <div class="menu-list__item__title">
            {{title}}
        </div>
        <div class="menu-list__item__arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1 8.59249H12.17L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.30249C15.68 7.91249 15.68 7.28249 15.29 6.89249L8.71 0.292486C8.52317 0.105233 8.26952 0 8.005 0C7.74048 0 7.48683 0.105233 7.3 0.292486C6.91 0.682486 6.91 1.31249 7.3 1.70249L12.17 6.59249H1C0.45 6.59249 0 7.04249 0 7.59249C0 8.14249 0.45 8.59249 1 8.59249Z"
                      :fill=" isHover ? '#fff' : '#6B7A99'"/>
                <mask id="mask0_52_367" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16"
                      height="16">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M1 8.59249H12.17L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.30249C15.68 7.91249 15.68 7.28249 15.29 6.89249L8.71 0.292486C8.52317 0.105233 8.26952 0 8.005 0C7.74048 0 7.48683 0.105233 7.3 0.292486C6.91 0.682486 6.91 1.31249 7.3 1.70249L12.17 6.59249H1C0.45 6.59249 0 7.04249 0 7.59249C0 8.14249 0.45 8.59249 1 8.59249Z"
                    />
                </mask>
                <g mask="url(#mask0_52_367)">
                </g>
            </svg>
        </div>
    </router-link>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: "ItemMenu",
        props: ['svg', 'title'],
        setup(){
            const isHover = ref(false)
            const handleHover = () =>{
                isHover.value = true
            }
            const handleLeave = () =>{
                isHover.value = false
            }
            return {handleHover, handleLeave, isHover}
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables.scss";

    .menu-list {
        &__item {
            padding: 17px;
            cursor: pointer;
            width: 100%;
            background-color: inherit;
            border: none;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            border-radius: 10px;
            transition: .3s ease;

            &__title {
                color: #fff;
                margin-left: 27px;
            }

            &__arrow {
                margin-left: auto;
            }
        }

        & .hover {
            background: $mid-light-blue;
        }
    }
</style>