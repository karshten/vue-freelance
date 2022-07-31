<template>
    <div class="latest-jobs__jobs">
        <JobItem v-for="job in jobs" :key="job.name" :job="job"/>
    </div>
</template>

<script>
    import JobItem from "./JobItem";
    import {ref} from 'vue'

    export default {
        name: "JobsList",
        components: {JobItem},
        setup(){

            const jobs = ref([
                {
                    name: 'Web & UI Design',
                    workersCount: 654,
                    imgUrl: 'src/assets/images/Main/LatestJobs/web-ui.jpg'
                },
                {
                    name: 'Development',
                    workersCount: 654,
                    imgUrl: 'src/assets/images/Main/LatestJobs/dev.jpg'
                },
                {
                    name: 'Articles & News',
                    workersCount: 654,
                    imgUrl: 'src/assets/images/Main/LatestJobs/articles.jpg'
                },
                {
                    name: 'Music Writing',
                    workersCount: 654,
                    imgUrl: 'src/assets/images/Main/LatestJobs/music.jpg'
                },
            ])

            return {jobs}
        }
    }
</script>

<style scoped>
    @import "src/assets/scss/variables.scss";
</style>