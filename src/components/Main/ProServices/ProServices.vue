<template>
    <section class="pro-service">
        <div class="container">
            <h2 class="pro-service__title">Popular <span>Professional</span> Services</h2>
            <div class="pro-service__content">
                <div v-for="service in services" class="pro-service__item">
                    <img :src="service.icon" alt="service-icon">
                    <router-link class="pro-service__link" to="/">{{service.title}}</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: "ProServices",
        setup() {
            const services = ref([
                {
                    icon: 'src/assets/icons/services-icons/web-mobile-dev.svg',
                    title: 'Wev, Mobile Dev'
                },
                {
                    icon: 'src/assets/icons/services-icons/design-art.svg',
                    title: 'Design & Art'
                },
                {
                    icon: 'src/assets/icons/services-icons/writing-trasnlation.svg',
                    title: 'Writing Translation'
                },
                {
                    icon: 'src/assets/icons/services-icons/video-animation.svg',
                    title: 'Video & Animation'
                },
                {
                    icon: 'src/assets/icons/services-icons/sales-marketing.svg',
                    title: 'Sales & Marketing'
                },
                {
                    icon: 'src/assets/icons/services-icons/music-audio.svg',
                    title: 'Music& Audio'
                },
                {
                    icon: 'src/assets/icons/services-icons/customers-service.svg',
                    title: 'Customer Service'
                },
                {
                    icon: 'src/assets/icons/services-icons/engineering.svg',
                    title: 'Engineering'
                },
            ])

            return {services}
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";

    .pro-service {
        margin-top: 100px;

        & .container {
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 15px;
            padding: 100px 125px;
        }

        &__title {
            text-align: center;
            color: $mid-dark-blue;
            font-size: 30px;
            font-weight: 600;

            & span {
                font-weight: 900;
            }
        }

        &__link {
            margin-top: 30px;
            color: $text-blue;
            font-size: 12px;
            font-weight: 700;
        }

        &__content {
            margin-top: 105px;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            flex-grow: 4;
            flex-wrap: wrap;
        }

        &__item {
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 80px;
        }
    }
</style>