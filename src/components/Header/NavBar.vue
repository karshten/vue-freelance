<template>
    <nav>
        <ul class="navbar">
            <li class="navbar__item">
                <div class="navbar__icon">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6ZM15 18H3V16.6C3 14.6 7 13.5 9 13.5C11 13.5 15 14.6 15 16.6V18Z"
                              fill="#C3CAD9"/>
                    </svg>
                </div>
                <router-link to="/" class="navbar__link">Freelancers</router-link>
            </li>
            <li class="navbar__item">
                <div class="navbar__icon">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM10 16H5C4.45 16 4 15.55 4 15C4 14.45 4.45 14 5 14H10C10.55 14 11 14.45 11 15C11 15.55 10.55 16 10 16ZM13 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM13 8H5C4.45 8 4 7.55 4 7C4 6.45 4.45 6 5 6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
                              fill="#C3CAD9"/>
                    </svg>
                </div>

                <router-link to="/" class="navbar__link">Projects</router-link>
            </li>
            <li class="navbar__item">
                <div class="navbar__icon">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1 19.1738H11C11.55 19.1738 12 19.6238 12 20.1738C12 20.7238 11.55 21.1738 11 21.1738H1C0.45 21.1738 0 20.7238 0 20.1738C0 19.6238 0.45 19.1738 1 19.1738ZM4.24 6.24376L7.07 3.41376L19.8 16.1438C20.58 16.9238 20.58 18.1938 19.8 18.9738C19.02 19.7538 17.75 19.7538 16.97 18.9738L4.24 6.24376ZM12.73 0.583756L15.56 3.41376C16.34 4.19376 16.34 5.46376 15.56 6.24376L14.14 7.66376L8.49 2.00376L9.9 0.593756C10.68 -0.196244 11.95 -0.196244 12.73 0.583756ZM2.83 7.65376L8.49 13.3138L7.08 14.7238C6.3 15.5038 5.03 15.5038 4.25 14.7238L1.42 11.8938C0.64 11.1138 0.64 9.84376 1.42 9.06376L2.83 7.65376Z"
                              fill="#C3CAD9"/>
                    </svg>

                </div>
                <router-link to="/" class="navbar__link">Contests</router-link>
            </li>
            <li class="navbar__item">
                <div class="navbar__icon">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M3.5 18C4.33 18 5 17.33 5 16.5V15H15V16.5C15 17.33 15.67 18 16.5 18C17.33 18 18 17.33 18 16.5V14C18 12.9 17.1 12 16 12H4C2.9 12 2 12.9 2 14V16.5C2 17.33 2.67 18 3.5 18ZM18 7H19C19.55 7 20 7.45 20 8V9C20 9.55 19.55 10 19 10H18C17.45 10 17 9.55 17 9V8C17 7.45 17.45 7 18 7ZM1 7H2C2.55 7 3 7.45 3 8V9C3 9.55 2.55 10 2 10H1C0.45 10 0 9.55 0 9V8C0 7.45 0.45 7 1 7ZM15 10H5V2C5 0.9 5.9 0 7 0H13C14.1 0 15 0.9 15 2V10Z"
                              fill="#C3CAD9"/>
                    </svg>
                </div>
                <router-link to="/" class="navbar__link">Jobs</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";

    .header {
        & .navbar {
            padding-top: 10px;
            display: flex;

            &__item {
                display: flex;
                margin-right: 3.5vw;
            }

            &__icon {
                margin-right: 20px;
            }

            &__link {
                text-decoration: none;
                color: $low-dark-blue;
                font-size: 13px;
                font-weight: 700;
            }
        }
    }

    @media (max-width: 1280px) {
        .header {
            & .navbar {

                &__item {
                    display: flex;
                    margin-right: 2.5vw;
                }
            }
        }
    }
</style>