<template>
    <ul class="skills-list">
        <router-link
                to="/"
                v-for="item in skillsItems"
                :key="item.title"
        >
            <ItemSkill
                    :title="item.title"
                    :count="item.count"
                    :img="item.img"
            />
        </router-link>
    </ul>
</template>

<script>
    import ItemSkill from "./ItemSkill.vue";

    export default {
        components: {ItemSkill},
        setup() {
            const skillsItems = [
                {
                    title: 'Website Development',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Website.svg'
                },
                {
                    title: 'Writing Texts',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Texts.svg'
                },
                {
                    title: 'Website Development',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Website.svg'
                },
                {
                    title: 'Writing Texts',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Texts.svg'
                },
                {
                    title: 'Website Development',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Website.svg'
                },
                {
                    title: 'Writing Texts',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Texts.svg'
                },
                {
                    title: 'Website Development',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Website.svg'
                },
                {
                    title: 'Writing Texts',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Texts.svg'
                },
                {
                    title: 'Website Development',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Website.svg'
                },
                {
                    title: 'Writing Texts',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Texts.svg'
                },
                {
                    title: 'Website Development',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Website.svg'
                },
                {
                    title: 'Writing Texts',
                    count: 543,
                    img: 'src/assets/icons/side-menu-icons/Texts.svg'
                },
            ]

            return {skillsItems}
        }
    }
</script>

<style scoped>

</style>