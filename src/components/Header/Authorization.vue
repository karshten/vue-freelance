<template>
    <div class="authorize">
        <router-link to="/">
            <div :class="{whenSmall: windowWidth < 1500}" class="authorize__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
                          fill="#C3CAD9"/>
                </svg>
            </div>
        </router-link>
        <div class="authorize__links" v-if="windowWidth > 1500">
            <router-link class="authorize__link" to="/">Sign in</router-link>
            <p>or</p>
            <router-link class="authorize__link" to="/">Join</router-link>
        </div>
    </div>
</template>

<script>
    import {ref, computed} from 'vue'

    export default {
        name: "SignIn",
        setup() {
            const windowWidth = window.innerWidth

            return {windowWidth}
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .header {
        & .authorize {
            display: flex;
            font-weight: 700;
            font-size: 13px;
            align-items: center;

            &__links {
                display: flex;
            }

            &__link {
                text-decoration: none;
                margin: 0 10px;
                color: $low-dark-blue;
            }

            & p {
                color: $text-light-blue;
            }
        }
    }

    .whenSmall {
        margin-right: 20px;
    }
</style>