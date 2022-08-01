<template>
    <section class="works">
        <div class="container">
            <h2 class="works__title">How it <span>Works</span></h2>
            <div class="works__internal-title"><h2>PROCESS</h2></div>
            <ul class="works__list">
                <WorkItem v-for="work in works" :work="work" :key="work.number"/>
            </ul>
        </div>
    </section>
</template>

<script>
    import WorkItem from "./WorkItem.vue";

    export default {
        name: "Works",
        components: {WorkItem},
        setup() {
            const works = [
                {
                    icon: 'src/assets/icons/works-icons/post-project.svg',
                    title: 'Post a Project',
                    description: 'Connects you with top talent and agencies around the world, or near you.',
                    number: 1,
                    color: 'blue'
                },
                {
                    icon: 'src/assets/icons/works-icons/artists-offers.svg',
                    title: 'Artists Offer Prices',
                    description: 'Compare bids, reviews, and prior work. Interview favorites and hire the best fit.',
                    number: 2,
                    color: 'orange'
                },
                {
                    icon: 'src/assets/icons/works-icons/choose-freelancer.svg',
                    title: 'Choose Freelancer',
                    description: 'Use to chat or video call, share files, and track project milestones',
                    number: 3,
                    color: 'green'
                },
                {
                    icon: 'src/assets/icons/works-icons/take-job.svg',
                    title: 'Take The Job',
                    description: 'Check the work done by the freelancer and make corrections if necessary',
                    number: 4,
                    color: 'purple'
                },
            ]

            return {works}
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/variables.scss";

    .works {
        margin-top: 95px;

        & .container {
            position: relative;
        }

        &__title {
            margin-bottom: 96px;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            color: $mid-dark-blue;

            & span {
                font-weight: 900;
            }
        }

        &__internal-title {
            position: absolute;
            top: -70px;
            left: 26%;
            opacity: 0.03;

            & h2 {
                font-size: 120px;
                color: #002881;
                font-weight: 800;
            }
        }

        &__list {
            display: flex;
            justify-content: space-between;
            max-width: 100%;
        }
    }
</style>