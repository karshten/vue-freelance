<template>

    <swiper
            :slides-per-view="3"
            :space-between="50"
            :navigation="true"
            :modules="modules"
    >
        <swiper-slide v-for="artist in artists" :key="artist.name">
            <div class="artists__content">
                <ArtistItem :artist="artist"/>
            </div>
        </swiper-slide>
        ...
    </swiper>
</template>

<script>
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import 'swiper/css';
    import "swiper/css/navigation";
    import {Navigation} from "swiper";
    import {ref} from 'vue'
    import ArtistItem from "./ArtistItem.vue";

    export default {
        name: "ArtistsList",
        components: {
            ArtistItem,
            Swiper,
            SwiperSlide,
        },
        setup() {
            const artists = ref([
                {
                    imgUrl: 'src/assets/images/Main/userAvatar.png',
                    name: 'Jack Brady',
                    job: 'Web Development',
                    description: 'Senior developer with 8+ years of programming. Im an Android application developer with extensive experience in building high performance application. Its important to me to build long term relationships with clients.',
                    salary: 30,
                    success: 77
                },
                {
                    imgUrl: 'src/assets/images/Main/userAvatar.png',
                    name: 'Jack Brady',
                    job: 'Web Development',
                    description: 'Senior developer with 8+ years of programming. Im an Android application developer with extensive experience in building high performance application. Its important to me to build long term relationships with clients.',
                    salary: 30,
                    success: 77
                },
                {
                    imgUrl: 'src/assets/images/Main/userAvatar.png',
                    name: 'Jack Brady',
                    job: 'Web Development',
                    description: 'Senior developer with 8+ years of programming. Im an Android application developer with extensive experience in building high performance application. Its important to me to build long term relationships with clients.',
                    salary: 30,
                    success: 77
                },
                {
                    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthZcF6C12-eMC0JrJdv4CWO40-emM4BBFlw&usqp=CAU',
                    name: 'Batman',
                    job: 'Web Development',
                    description: 'Senior developer with 8+ years of programming. Im an Android application developer with extensive experience in building high performance application. Its important to me to build long term relationships with clients.',
                    salary: 30,
                    success: 77
                },
                {
                    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&usqp=CAU',
                    name: 'Jack Brady',
                    job: 'Web Development',
                    description: 'Senior developer with 8+ years of programming. Im an Android application developer with extensive experience in building high performance application. Its important to me to build long term relationships with clients.',
                    salary: 30,
                    success: 77
                },
                {
                    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU',
                    name: 'Jack Brady',
                    job: 'Web Development',
                    description: 'Senior developer with 8+ years of programming. Im an Android application developer with extensive experience in building high performance application. Its important to me to build long term relationships with clients.',
                    salary: 30,
                    success: 77
                },
            ])
            return {artists, modules: [Navigation]}
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/variables";

</style>