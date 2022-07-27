<template>
    <div class="authorize">
        <router-link to="/signIn">
            <div class="authorize__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
                          fill="#C3CAD9"/>
                </svg>
            </div>
        </router-link>
        <div class="authorize__links">
            <router-link class="authorize__link" to="/signIn">Sign in</router-link>
            <p>or</p>
            <router-link class="authorize__link" to="/signUp">Join</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        setup() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .authorize {
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

    @media (max-width: 1500px) {
        .authorize {

            &__links {
                display: none;
            }
        }
    }

    .mainHeader .main-auth .authorize__links {
        display: flex;
    }

    @media (max-width: 970px) {
        .authorize {
            &__links {
                display: flex;
            }

            &__icon {
                & svg {
                    width: 25px;
                    height: 25px;
                }
            }
        }
        .mainHeader .main-auth .authorize__links {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .authorize .authorize__links {
            display: none;
        }
    }

    @media (max-width: 514px) {
        .authorize {
            &__icon {
                & svg {
                    width: 15px;
                    height: 15px;
                }
            }
        }
    }

</style>